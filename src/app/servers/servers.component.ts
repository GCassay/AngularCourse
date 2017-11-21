import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //Normal Component
  // selector: '[app-servers]', // Component as Attribute
  selector: '.app-servers', //Component as Class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created yet!";
  serverName = "";
  serverCreated = false;
  servers = ['Mnemosine','Atenea','Selene','Gaia'];

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
    this.servers.push(this.serverName);
  }

  onUptadteServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
