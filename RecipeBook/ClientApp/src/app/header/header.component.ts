import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
/** header component*/
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
    /** header ctor */
    constructor() {

    }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
