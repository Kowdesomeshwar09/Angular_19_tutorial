import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ng-if-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ng-if-vs-if.html',
  styleUrl: './structural-directive-ng-if-vs-if.scss',
})
export class StructuralDirectiveNgIfVsIf {
  isChecked: boolean = false;
  isInputbox: boolean = true;
  input1: string = '';
  input2: string = '';
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
