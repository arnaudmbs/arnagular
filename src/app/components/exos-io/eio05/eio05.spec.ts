import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio05 } from './eio05';

describe('Eio05', () => {
  let component: Eio05;
  let fixture: ComponentFixture<Eio05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio05],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
