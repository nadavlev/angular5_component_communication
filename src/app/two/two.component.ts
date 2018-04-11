import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import {CommunicationService} from '../communication.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

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

  public updateService() {
    this.communicationService.addMessage(this.textMessage);
  }

  private getMessages(): void {
    this.communicationService.getMessages(2)
      .subscribe(messages => this.serviceMessages = messages);
  }

}
