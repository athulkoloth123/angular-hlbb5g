import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  showChild: string = '';
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.cdr.markForCheck();
  }
  passValue(value: string) {
    this.showChild = value;
    this.cdr.detectChanges();
  }
}