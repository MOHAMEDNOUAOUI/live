import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarHolderComponent } from './chart-bar-holder.component';

describe('ChartBarHolderComponent', () => {
  let component: ChartBarHolderComponent;
  let fixture: ComponentFixture<ChartBarHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartBarHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBarHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
