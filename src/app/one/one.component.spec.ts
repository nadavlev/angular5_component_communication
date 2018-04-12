import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponent } from './one.component';
import {CommunicationService} from '../communication.service';
import {FormsModule} from '@angular/forms';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;
  let communicationService: CommunicationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneComponent ],
      imports: [FormsModule],
      providers: [CommunicationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    communicationService = new CommunicationService();
    expect(component).toBeTruthy();
  });
});
