import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneDetailiComponent } from './transazione-detaili.component';

describe('TransazioneDetailiComponent', () => {
  let component: TransazioneDetailiComponent;
  let fixture: ComponentFixture<TransazioneDetailiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioneDetailiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioneDetailiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
