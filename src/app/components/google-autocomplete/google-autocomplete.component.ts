import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-autocomplete.component.html',
  styleUrls: ['./google-autocomplete.component.scss'],
})
export class GoogleAutocompleteComponent implements OnInit, AfterViewInit {
//   @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
//   @ViewChild('addresstext') addresstext: any;

//   autocompleteInput: string;
//   queryWait: boolean;
//   constructor() {}

//   ngOnInit(): void {
//   }
  
//   ngAfterViewInit(): void {
//     this.getPlaceAutocomplete();
//   }
 
//   private getPlaceAutocomplete() {
//     const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
//         {
//             componentRestrictions: { country: 'US' },
//             types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
//         });
//     google.maps.event.addListener(autocomplete, 'place_changed', () => {
//         const place = autocomplete.getPlace();
//         this.invokeEvent(place);
//     });
// }

constructor(){}
ngOnInit(){}
ngAfterViewInit(){}
//Local Variable defined 
formattedaddress=" "; 
public AddressChange(address: any) { 
  console.log(address);
  this.invokeEvent(address)
  
//setting address from API to local variable 
 this.formattedaddress=address.formatted_address 
} 

invokeEvent(place: Object) {
  this.setAddress.emit(place);
}
}
