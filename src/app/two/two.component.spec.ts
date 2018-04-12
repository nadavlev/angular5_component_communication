import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComponent } from './two.component';
import {CommunicationService} from '../communication.service';
import {FormsModule} from '@angular/forms';

describe('TwoComponent', () => {
  let component: TwoComponent;
  let fixture: ComponentFixture<TwoComponent>;
  let communicationService: CommunicationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoComponent ],
      imports: [FormsModule],
      providers: [CommunicationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    communicationService = new CommunicationService();
    expect(component).toBeTruthy();
  });
});
