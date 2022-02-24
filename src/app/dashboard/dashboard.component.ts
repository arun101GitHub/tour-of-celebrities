import { Component, OnInit } from '@angular/core';
import { Celebrity } from '../interfaces/celebrity';
import { CelebrityService } from '../celebrity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  celebrities: Celebrity[] = [];

  constructor(private celebrityService: CelebrityService) { }

  ngOnInit(): void {
    this.getCelebrities();
  }
  getCelebrities(): void {
    this.celebrityService.getCelebrities()
      .subscribe(celebrities => this.celebrities = celebrities.slice(1, 12));
    }

  }

