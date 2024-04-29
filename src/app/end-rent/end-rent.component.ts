import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BikeService } from '../bike.service';

@Component({
  selector: 'app-end-rent',
  templateUrl: './end-rent.component.html',
  styleUrls: ['./end-rent.component.css'],
})
export class EndRentComponent implements OnInit {
  endRentForm: FormGroup;
  bikes: any[] = [];
  selectedBikeId: number;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private bikeService: BikeService
  ) {}

  ngOnInit(): void {
    this.createEndRentForm();
    this.getBikes();
  }

  createEndRentForm() {
    this.endRentForm = this.formBuilder.group({
      bikeId: ['', Validators.required],
    });
  }

  getBikes() {
    this.bikeService.getAllRented().subscribe((data: any) => {
      this.bikes = data;
    });
  }

  onSubmit() {
    const bikeId = this.endRentForm.value.bikeId;
    this.http.patch(`endRent/${bikeId}`, {}).subscribe(
      (response: any) => {
        alert('A bérlés befejezve!'); // Sikeres kérés esetén alert ablak megjelenítése
      },
      (error) => {
        alert('Hiba történt a bérlés befejezése közben.'); // Hiba esetén alert ablak megjelenítése
      }
    );
  }

  navigateBackToBikes() {
    this.router.navigate(['/bikes']);
  }
}
