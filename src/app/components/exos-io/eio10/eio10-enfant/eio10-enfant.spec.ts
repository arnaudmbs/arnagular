import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio10Enfant } from './eio10-enfant';

describe('Eio10Enfant', () => {
  let component: Eio10Enfant;
  let fixture: ComponentFixture<Eio10Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio10Enfant],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio10Enfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
