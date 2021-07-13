import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciverAddressComponent } from './reciver-address.component';

describe('ReciverAddressComponent', () => {
  let component: ReciverAddressComponent;
  let fixture: ComponentFixture<ReciverAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciverAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciverAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
