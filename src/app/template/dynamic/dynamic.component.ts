import { Component } from '@angular/core';

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [],
})
export class DynamicComponent {
  newGame: string = '';

  person: Person = {
    name: 'Eze',
    favourites: [
      {
        id: 1,
        name: 'Metal Slug',
      },
      {
        id: 1,
        name: 'Metal Gear',
      },
    ],
  };

  save() {
    console.log('Posted Form');
  }

  addGame() {
    const newFavourite: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.newGame,
    };
    this.person.favourites.push({...newFavourite});
    this.newGame = '';
  }

  delete(index: number) {
    this.person.favourites.splice(index, 1);
  }
}
