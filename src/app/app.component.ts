import { Component, OnInit} from "@angular/core";
import { BackendService} from "./backend.service";

/**
Fetch managers from backend api
Does not currently exist.

The backend should return a structure similar to,
the following example:

    {
        id: 1,
        name: "Someone",
        image: "/assets/someone.jpg",
        votes: 0
    }

 */
const managers: Array<object> = [];

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [
        BackendService
    ]
})
export class AppComponent implements OnInit {
    title: string;
    managers: any[];
    ready: boolean;
    service: BackendService;

    constructor() {
        this.title =  "Best manager evah!";
        this.managers = managers;
        this.ready = false;
    }

    voteUp(manager: any) {
        manager.votes++;

        const votes = {
            type: "update",
            name: manager.name,
            votes: manager.votes
        };

    }

    voteDown(manager: any) {

        if (manager.votes >= 1) {
            return manager.votes--;
        }

        const votes = {
            type: "update",
            name: manager.name,
            votes: manager.votes
        };

    }

    ngOnInit(): void {
        console.log("BEGIN INIT")
        this.service = new BackendService();
        this.service.connect();

        // subscriber.subscribe(data => console.log(data));
    }
}
