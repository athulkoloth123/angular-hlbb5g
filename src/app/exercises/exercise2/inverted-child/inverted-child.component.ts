import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvertedChildComponent {
  inputValue: string = '';
  @Output() event = new EventEmitter<string>();
  constructor(private cdr: ChangeDetectorRef) {}

  onClick() {
    this.event.emit(this.inputValue);
  }
}
