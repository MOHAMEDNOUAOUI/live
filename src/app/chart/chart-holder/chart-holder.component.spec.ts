import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHolderComponent } from './chart-holder.component';

describe('ChartHolderComponent', () => {
  let component: ChartHolderComponent;
  let fixture: ComponentFixture<ChartHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
