import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public serviceMessages: Message[];
  public textMessage: string;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.getMessages();
  }

  serviceUpdate() {
    this.communicationService.addMessage(this.textMessage);
  }

  private getMessages(): void {
    this.communicationService.getMessages(1)
      .subscribe(messages => this.serviceMessages = messages);
  }

}
