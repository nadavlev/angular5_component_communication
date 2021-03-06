import { Injectable } from '@angular/core';
import {Message} from './message';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

  public serviceMessages: Message[];
  private consumerMap: Map<number, Message[]>;

  private broadcastedMessage = new Subject<string>();
  public broadcastedMessageObservable$ = this.broadcastedMessage.asObservable();

  constructor() {
    this.serviceMessages = [];
    this.consumerMap = new Map();

    this.timelyMessage();
  }

  public addMessage(text: string ) {
    const newMessage = new Message(text);
    this.serviceMessages.push(newMessage);
    const keyArr = Array.from(this.consumerMap.keys());
    for (const key of keyArr) {
      this.consumerMap.get(key).push(newMessage);
    }
  }

  public getMessages(consumerId: number): Observable<Message[]> {
    if (!this.consumerMap.get(consumerId)) {
      this.consumerMap.set(consumerId, [...this.serviceMessages]);
    }
    return of(this.consumerMap.get(consumerId)); // return a fresh copy, to avoid
  }

  public messageBroadcasting(msg: string) {
    this.broadcastedMessage.next(msg);
  }

  private timelyMessage() {
    setInterval(() => {
      this.messageBroadcasting((new Date()).toISOString());
    }, 1000);
  }

}
