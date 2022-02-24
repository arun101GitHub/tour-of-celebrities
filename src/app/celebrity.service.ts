import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Celebrity } from './interfaces/celebrity';
import { CELEBRITIES } from './mock-celebrities';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {

  constructor(private messageService: MessageService) { }

  getCelebrities(): Observable<Celebrity[]> {
    const celebrities = of(CELEBRITIES);
    this.messageService.add('CelebrityService: fetched celebrities');
    return celebrities;
  }
  getCelebrity(id: number): Observable<Celebrity> {
    // For now, assume that a celebrity with the specified `id` always exists.
    
    const celebrity = CELEBRITIES.find(c => c.id === id)!;
    this.messageService.add(`CelebrityService: fetched celebrity id=${id}`);
    return of(celebrity);
  }
}