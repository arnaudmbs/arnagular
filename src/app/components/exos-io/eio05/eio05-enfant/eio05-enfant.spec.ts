import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio05Enfant } from './eio05-enfant';

describe('Eio05Enfant', () => {
  let component: Eio05Enfant;
  let fixture: ComponentFixture<Eio05Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio05Enfant],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio05Enfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
