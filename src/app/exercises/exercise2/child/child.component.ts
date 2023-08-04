import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input() set value(value: string) {
    this._value = value;
    this.cdr.markForCheck();
  }
  get value(): string {
    return this._value;
  }
  private _value: string = '';
}