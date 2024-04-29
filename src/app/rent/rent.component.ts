import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importáljuk a HttpClient modult

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  rentForm: FormGroup;
  bikeId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient // Injektáljuk a HttpClient szolgáltatást
  ) {
    this.rentForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bikeId = +params['id'];
    });
  }

  rentBike() {
    if (this.rentForm.valid) {
      const rentData = {
        name: this.rentForm.get('name').value,
        bikeId: this.bikeId,
      };

      this.http.post<any>('rent', rentData).subscribe(
        (response) => {
          alert('A bérlés sikeres volt!');
          this.router.navigate(['/bikes']);
        },
        (error) => {
          alert('Hiba történt a bérlés során. Kérlek próbáld újra később.');
          console.error('Hiba:', error);
        }
      );
    } else {
      alert('Kérlek töltsd ki a Bérlő nevét!');
    }
  }
}
