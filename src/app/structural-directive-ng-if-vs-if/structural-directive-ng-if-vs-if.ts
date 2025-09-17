import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-if-vs-if',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-if-vs-if.html',
  styleUrl: './structural-directive-ng-if-vs-if.scss',
})
export class StructuralDirectiveNgIfVsIf {
  isChecked: boolean = false;
  isInputbox: boolean = true;
  onClick() {
    this.isChecked = !this.isChecked;
  }
  showField() {
    this.isInputbox = true;
  }

  hideField() {
    this.isInputbox = false;
  }
}
