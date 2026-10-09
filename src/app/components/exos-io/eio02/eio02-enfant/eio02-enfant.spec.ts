import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio02Enfant } from './eio02-enfant';

describe('Eio02Enfant', () => {
  let component: Eio02Enfant;
  let fixture: ComponentFixture<Eio02Enfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio02Enfant],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio02Enfant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
