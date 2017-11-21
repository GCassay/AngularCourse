import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //Normal Component
  // selector: '[app-servers]', // Component as Attribute
  selector: '.app-servers', //Component as Class
  template: `
    <h3>SERVERS COMPONENT</h3>
    <label>Server Name</label>
    <input type="text"
            (input)="onUptadteServerName($event)"
            placeholder="input event listener ver.">
    <input type="text"
            [(ngModel)]="serverName"
            placeholder="ngModel ver.">
    <button [disabled]="!allowNewServer"
            (click)="onCreateServer()">
      Add Server
    </button>
    <p><i>{{ serverName }}</i> {{ serverCreationStatus }}</p>
    <p [innerText]="allowNewServer"></p>
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created yet!";
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was Created! Name: "+ this.serverName;
  }

  onUptadteServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
