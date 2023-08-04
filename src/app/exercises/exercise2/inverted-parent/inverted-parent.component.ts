import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
})
export class InvertedParentComponent {
  invertedchildData!: string;
  Event(value: string) {
    this.invertedchildData = value;
  }
  constructor() {}
}
