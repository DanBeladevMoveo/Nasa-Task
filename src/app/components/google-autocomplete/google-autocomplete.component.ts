import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-autocomplete.component.html',
  styleUrls: ['./google-autocomplete.component.scss'],
})
export class GoogleAutocompleteComponent implements OnInit {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addressInput') private addressInput: ElementRef;

  constructor() {}
  ngOnInit() {}
  public AddressChange(address: any) {
    this.invokeEvent(address);
    this.resetInput();
  }

  public resetInput(): void {
    const input = this.addressInput.nativeElement as HTMLInputElement;
    input.value = '';
}
  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
