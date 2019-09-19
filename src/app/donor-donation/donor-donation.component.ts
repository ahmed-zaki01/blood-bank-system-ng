import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-donor-donation',
  templateUrl: './donor-donation.component.html',
  styleUrls: ['./donor-donation.component.css']
})
export class DonorDonationComponent implements OnInit {
  donorForm = new FormGroup({
    name: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }

}
