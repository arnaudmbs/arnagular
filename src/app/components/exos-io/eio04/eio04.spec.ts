import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eio04 } from './eio04';

describe('Eio04', () => {
  let component: Eio04;
  let fixture: ComponentFixture<Eio04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eio04],
    }).compileComponents();

    fixture = TestBed.createComponent(Eio04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
