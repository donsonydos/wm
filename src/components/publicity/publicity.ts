import { Component } from '@angular/core';

/**
 * Generated class for the PublicityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'publicity',
  templateUrl: 'publicity.html'
})
export class PublicityComponent {

  text: string;

  constructor() {
    this.text = 'publicidad in place';
  }

}
