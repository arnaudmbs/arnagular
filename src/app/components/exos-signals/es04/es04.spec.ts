import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Es04 } from './es04';

describe('Es04', () => {
  let component: Es04;
  let fixture: ComponentFixture<Es04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Es04],
    }).compileComponents();

    fixture = TestBed.createComponent(Es04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
