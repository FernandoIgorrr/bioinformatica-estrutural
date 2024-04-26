import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrositeMotifPatternComponent } from './prosite-motif-pattern.component';

describe('PrositeMotifPatternComponent', () => {
  let component: PrositeMotifPatternComponent;
  let fixture: ComponentFixture<PrositeMotifPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrositeMotifPatternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrositeMotifPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
