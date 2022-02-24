
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Celebrity } from '../interfaces/celebrity';
import { CelebrityService } from '../celebrity.service';

@Component({
  selector: 'app-celebrity-detail',
  templateUrl: './celebrity-detail.component.html',
  styleUrls: [ './celebrity-detail.component.css' ]
})
export class CelebrityDetailComponent implements OnInit {
  celebrity: Celebrity | undefined;

  constructor(
    private route: ActivatedRoute,
    private celebrityService: CelebrityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCelebrity();
  }

  getCelebrity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.celebrityService.getCelebrity(id)
      .subscribe(celebrity => this.celebrity = celebrity);
  }

  goBack(): void {
    this.location.back();
  }
}