import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  name: string = 'FED learning';
  topic: string = 'Data Binding';
  image: string = `https://angular.io/assets/images/logos/angular/angular.png`;

  random = '';
  onSave() {
    alert('Data saved');
  }
  onChange() {
    alert('Data changed');
  }
}