import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  url = 'http://localhost:3000/heroes'

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');

  //   return heroes;
  // }

  async getHeroes(): Promise<Hero[]> {
    const data = await fetch(this.url);
    this.messageService.add('HeroService: fetched heroes');

    return await data.json() ?? [];
  }

  // /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }

  // getHero(id: number): Observable<Hero> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const hero = HEROES.find((h) => h.id === id)!;
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);

  //   return of(hero);
  // }
  async getHero(id: number): Promise<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const data = await fetch(`${this.url}/${id}`);
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return await data.json() ?? {};
  }
}
