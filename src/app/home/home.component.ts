import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  personalInfo = {
    name: 'Tirth Shah',
    profession: 'Web Developer',
    assignment: 'Final Assignment for Web Programming & Framework 2'
  };
  

  assignmentDetails = {
    projectName: 'Client-side Web App',
    description: 'This project involves creating a client-side web application using Angular. The application includes features like API data fetching, form handling, and dynamic routing to provide a seamless user experience.',
    technologies: ' Technologies used: Angular for frontend development, and Spring Boot for backend services. Other tools include TypeScript, HTML, CSS, and RESTful APIs.',
    goals: 'Main goals of the project include implementing client-side navigation, consuming data from a public API, validating and submitting forms using reactive forms in Angular, and deploying the application to a public hosting platform likely on Vercel.'
  };
  
}
