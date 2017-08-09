import { Injectable } from '@angular/core';

@Injectable()
export class CrisisService {

  constructor(public id: number, public name: string) { }

}

const CRISES = [
  new CrisisService(1, 'Dragon Burning Cities'),
  new CrisisService(2, 'Sky Rains Great White Sharks'),
  new CrisisService(3, 'Giant Asteroid Heading For Earth'),
  new CrisisService(4, 'Procrastinators Meeting Delayed Again'),
];
