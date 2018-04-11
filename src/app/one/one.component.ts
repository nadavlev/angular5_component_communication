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
    this.subscription = this.communicationService.brodcastedMessageObservable$.subscribe(
      msg => this.broadcastedMessage = msg
    );
  }

  serviceUpdate() {
    this.communicationService.addMessage(this.textMessage);
  }

  private getMessages(): void {
    this.communicationService.getMessages(1)
      .subscribe(messages => this.serviceMessages = messages);
  }

}
