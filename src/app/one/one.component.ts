import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import {CommunicationService} from '../communication.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public serviceMessages: Message[];
  public textMessage: string;
  private subscription: Subscription;
  public broadcastedMessage: string;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.getMessages();
    this.subscription = this.communicationService.broadcastedMessageObservable$.subscribe(
      msg => this.broadcastedMessage = msg
    );
  }

  // Send message to service (messages from text input )
  public updateService() {
    this.communicationService.addMessage(this.textMessage);
  }

  // get Messages from service (messages from text input )
  private getMessages(): void {
    this.communicationService.getMessages(1)
      .subscribe(messages => this.serviceMessages = messages);
  }

}
