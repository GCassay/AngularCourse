import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //Normal Component
  // selector: '[app-servers]', // Component as Attribute
  selector: '.app-servers', //Component as Class
  template: `
    <h3>SERVERS COMPONENT</h3>
    <label>Server Name</label>

    <!-- $event -->
    <input type="text"
            (input)="onUptadteServerName($event)"
            placeholder="input event listener ver.">

    <!-- ngModel -->
    <input type="text"
            [(ngModel)]="serverName"
            placeholder="ngModel ver.">

    <!-- Attributes & Click Event -->
    <button [disabled]="!allowNewServer"
            (click)="onCreateServer()">
      Add Server
    </button>

    <!-- String -->
    <p><i>{{ serverName }}</i> {{ serverCreationStatus }}</p>

    <!-- innerText -->
    <p [innerText]="allowNewServer"></p>

    <!-- components -->
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>

    <!-- ngIf Structural directive -->
    <p *ngIf="serverCreated; else noServer">Server Creation Completed</p>

    <!-- ng-template -->
    <ng-template #noServer>
      <p>No new server created</p>
    </ng-template>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created yet!";
  serverName = "";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was Created! Name: "+ this.serverName;
    this.serverCreated = true;
  }

  onUptadteServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
