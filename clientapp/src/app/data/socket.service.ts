import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface updateVotes {
  manager: string;
  votes: number;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  backend: string;
  socket: WebSocket;
  subject: Subject<object>;

  constructor() {
    this.backend = 'ws://localhost:8080';
  }

  connect() {
    this.subject = new Subject<object>();
    this.socket = new WebSocket(this.backend);

    this.socket.onopen = this.ready;
    this.socket.onmessage = this.subject.next;
    this.socket.onerror = this.subject.error;
    this.socket.onclose = this.closed;
  }

  public ready(event: object): void {
    console.log("Connection ready", event)
  }

  public closed(event: object): void {
    alert("Socket is closed")
  }

  public update(payload: updateVotes): void {

    const to_string = JSON.stringify(payload);
    this.socket.send(to_string)
  }
}
