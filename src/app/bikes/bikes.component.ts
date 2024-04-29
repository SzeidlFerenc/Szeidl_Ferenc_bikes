import { Component, OnInit } from '@angular/core';

interface Bike {
  id: number;
  serial: string;
  battery: number;
  status: string;
  rentalStart?: Date;
  rentalEnd?: Date;
}

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
})
export class BikesComponent implements OnInit {
  bikes: Bike[] = [
    { id: 1, serial: 'ABC123', battery: 70, status: 'Elérhető' },
    { id: 2, serial: 'DEF456', battery: 90, status: 'Elérhető' },
    {
      id: 3,
      serial: 'GHI789',
      battery: 30,
      status: 'Nem elérhető',
      rentalStart: new Date(),
      rentalEnd: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
