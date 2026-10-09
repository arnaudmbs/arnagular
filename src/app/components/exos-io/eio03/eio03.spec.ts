import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio03 } from './eio03';

describe('Eio03', () => {
  let component: Eio03;
  let fixture: ComponentFixture<Eio03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio03],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
