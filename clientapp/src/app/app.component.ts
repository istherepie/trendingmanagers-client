import { Component, OnInit} from '@angular/core';
import { SocketService } from './data/socket.service';

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
export class AppComponent implements OnInit {
  title = 'Best manager evah!';
  socket: SocketService;
  user: string = 'AwesomeUser';
  someMessage: string = '';

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

  constructor(socket: SocketService) {
    this.socket = socket;
  }

  voteUp(manager: Manager, log: Log) {
    manager.votes++

    const payload = {
      manager: manager.name,
      votes: manager.votes
    }

    this.socket.update(payload)

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

    const payload = {
      manager: manager.name,
      votes: manager.votes
    }

    this.socket.update(payload)

  }

  ngOnInit(): void {
    this.socket.connect()
  }
}
