import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directive } from './directive/directive';
import { StructuralDirectiveNgIfVsIf } from './structural-directive-ng-if-vs-if/structural-directive-ng-if-vs-if';
@Component({
  // standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, User, DataBinding, Directive, StructuralDirectiveNgIfVsIf],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Angular_19_tutorial');
}
