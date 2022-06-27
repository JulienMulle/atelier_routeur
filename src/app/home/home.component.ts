import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public studentName: string =  "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToStudent(): void{
    this.router.navigate(['/student', this.studentName])
  }
}
