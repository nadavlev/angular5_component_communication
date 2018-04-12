import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import {CommunicationService} from './communication.service';


@NgModule({
  declarations: [
    AppComponent, OneComponent, TwoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
