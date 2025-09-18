import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.html',
  styleUrl: './structural-directive-ngfor-vs-for.scss',
})
export class StructuralDirectiveNgforVsFor {
  employees: any[] = [
    { empName: 'John', empNumber: '123', empEmail: 'john@example.com', empDept: 'IT' },
    { empName: 'Jane', empNumber: '124', empEmail: 'jane@example.com', empDept: 'HR' },
    { empName: 'Doe', empNumber: '125', empEmail: 'doe@example.com', empDept: 'Finance' },
  ];

  companyList: string[] = [
    'Google',
    'Microsoft',
    'Apple',
    'Amazon',
    'Facebook',
    'Tesla',
    'Netflix',
    'Adobe',
    'Intel',
    'IBM',
  ];
}
