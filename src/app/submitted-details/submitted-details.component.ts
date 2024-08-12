import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-submitted-details',
  templateUrl: './submitted-details.component.html',
  styleUrls: ['./submitted-details.component.css']
})
  

export class SubmittedDetailsComponent {
  data: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.data = navigation.extras.state['data'];
    }
  }
}