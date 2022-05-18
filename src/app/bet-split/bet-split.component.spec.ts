import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { BetSplitComponent } from './bet-split.component';

describe('BetSplitComponent', () => {
  let component: BetSplitComponent;
  let fixture: ComponentFixture<BetSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetSplitComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call reiniciarJuego function when limpiar btn is clicked', () => {
    let spyn = spyOn(component, 'jugar');
    let button = fixture.debugElement.query(By.css('.btn-jugar')).nativeElement;
    fixture.detectChanges();
    if (!button.disabled) {
      button.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(spyn).toHaveBeenCalled();
      });
    }
  });

  it('should call multiplicarValor function multiply value for amount', () => {
    let spyn = spyOn(component, 'multiplicarValor');
    let button = fixture.debugElement.query(By.css('.content')).nativeElement;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyn).toHaveBeenCalled();
    });
  });
});
