import { Component } from '@angular/core';


class Manager {
  id: number;
  name: string;
  image: string;
  votes: number;
}

class Log {
  timestamp: Object;
  entry: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Best manager evah!';

  modeltext: string = '';

  logging: Log[] = [];

  managers: Manager[] = [
    {
      id: 1,
      name: 'Alex',
      image: '/assets/alex.jpg',
      votes: 0
    },
    {
      id: 2,
      name: 'Anne Dorte',
      image: '/assets/anne_dorte.jpg',
      votes: 0
    },
    {
      id: 3,
      name: 'Henrik',
      image: '/assets/henrik.jpg',
      votes: 0
    }
  ];

  constructor() {

  }

  voteUp(manager: Manager, log: Log) {
    manager.votes++

   log = {
      timestamp: Date.now(),
      entry: `USER voted for ${manager.name}`
    }

    this.logging.push(log)
  }
  voteDown(manager: Manager, log: Log) {

    if (manager.votes >= 1) {
      return manager.votes--
    }

  }
}
