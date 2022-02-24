import { Component, OnInit } from '@angular/core';
import { Celebrity } from '../interfaces/celebrity';
//import { CELEBRITIES } from '../mock-celebrities';
import { CelebrityService } from '../celebrity.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css']
})
export class CelebritiesComponent implements OnInit {

  //selectedCelebrity?: Celebrity;

  celebrities: Celebrity[] = [];

  constructor(private celebrityService: CelebrityService) { }

  ngOnInit(): void {
    this.getCelebrities();
  }

  // onSelect(celebrity: Celebrity): void {
  //   this.selectedCelebrity = celebrity;
  //   this.messageService.add(`CelebritiesComponent: Selected celebrity id=${celebrity.id}`);
  // }

  getCelebrities(): void {
    this.celebrityService.getCelebrities()
        .subscribe(celebrities => this.celebrities = celebrities);
  }
}