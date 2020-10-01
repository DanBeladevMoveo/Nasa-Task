import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Moveo, MyHome } from 'src/app/google-places';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss'],
})
export class MyMapComponent implements OnInit /* , AfterViewInit */ {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  address: Object;
  establishmentAddress: Object;

  formattedAddress: string;
  formattedEstablishmentAddress: string;

  phone: string;
  constructor(private zone: NgZone) {}

  ngOnInit(): void {}
  //   ngAfterViewInit(): void {
  //     const mapProperties = {
  //          center: new google.maps.LatLng(Moveo.lat, Moveo.long),
  //          zoom: 17,
  //          mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     };
  //     const marker = new google.maps.Marker({
  //       position: new google.maps.LatLng(Moveo.lat, Moveo.long),
  //       title: 'Moveo'
  //     })
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  //     marker.setMap(this.map);
  //  }

  getAddress(place: google.maps.places.PlaceResult) {
    console.log('in maps', place);
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      ),
      title: place.name,
    });
    marker.setMap(this.map);
    this.map.setCenter(
      new google.maps.LatLng(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      )
    );
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = {
        formatted_phone_number: 'formatted_phone_number',
      },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  drawHomeToWorkRoute(): void {
    const home = new google.maps.LatLng(MyHome.lat, MyHome.long);
    const moveo = new google.maps.LatLng(Moveo.lat, Moveo.long);
    const directionService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    const request: google.maps.DirectionsRequest = {
      origin: home,
      destination: moveo,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsDisplay.setMap(this.map);
    directionService.route(request, (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  }
}
