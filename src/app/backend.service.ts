import { Injectable } from "@angular/core";

interface Status {
    type: string;
    value: string;
}

interface Message {
    type: string;
    name: string;
    votes: string;
}

@Injectable({
  providedIn: "root"
})
export class BackendService {
    private url: string;
    private protocol: string;
    private socket: any;

    constructor() {
    }

    public connect() {
        if (window.location.protocol === "https") {
            this.protocol = "wss";
        } else {
            this.protocol = "ws";
        }

        this.url = `${this.protocol}://${window.location.host}/socket`;
        this.socket = new WebSocket(this.url);

    }
}
