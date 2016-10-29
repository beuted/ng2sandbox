import { Injectable } from '@angular/core';

@Injectable()
export class AutorouteService {

  private static autoroutes: Autoroute[] = [
    {id: 0, name: 'A7', description: 'Nice autoroute 100% would ride again' },
    {id: 1, name: 'A8', description: 'Often bouché' },
    {id: 2, name: 'A9', description: 'It\'s okay' },
    {id: 3, name: 'A10', description: 'I don\'t know' },
    {id: 4, name: 'A1', description: 'Trains are the best' },
    {id: 5, name: 'A2', description: 'Hey what\'s up ?' },
    {id: 6, name: 'A3', description: 'insert meme here' },
    {id: 7, name: 'A4', description: 'I like trains' },
    {id: 8, name: 'A5', description: 'What about stopping here ?' },
    {id: 9, name: 'A6', description: 'Don\'t tell me what to do' },
    {id: 10, name: 'A11', description: 'WHat does it exist ?' },
  ]

  constructor() { }

  getAll(): Autoroute[] {
    return AutorouteService.autoroutes;
  }

  get(id: number): Autoroute {
    return AutorouteService.autoroutes[id];
  }

}

interface Autoroute {
  id: number,
  name: string,
  description: string
}
