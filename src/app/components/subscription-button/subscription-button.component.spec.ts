import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionButtonComponent } from './subscription-button.component';
import {HttpClientModule} from '@angular/common/http';
import {EventService} from '../../services/event.service';

describe('SubscriptionButtonComponent', () => {
  let component: SubscriptionButtonComponent;
  let fixture: ComponentFixture<SubscriptionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SubscriptionButtonComponent ],
      providers: [EventService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
