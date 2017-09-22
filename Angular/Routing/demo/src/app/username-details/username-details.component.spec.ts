import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameDetailsComponent } from './username-details.component';

describe('UsernameDetailsComponent', () => {
  let component: UsernameDetailsComponent;
  let fixture: ComponentFixture<UsernameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
