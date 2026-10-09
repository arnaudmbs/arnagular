import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio03Enfant } from './eio03-enfant';

describe('Eio03Enfant', () => {
  let component: Eio03Enfant;
  let fixture: ComponentFixture<Eio03Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio03Enfant],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio03Enfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
