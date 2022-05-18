import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BallSelectorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('"maxNumber" array must to has 10 spaces', () => {
    expect(component.maxNumber.length).toEqual(10);
  });

  it('should call reiniciarJuego function when limpiar btn is clicked', () => {
    let spyn = spyOn(component, 'reiniciarJuego');
    let button = fixture.debugElement.query(By.css('.limpiar')).nativeElement;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyn).toHaveBeenCalled();
    });
  });

  it('should call add number to array for play', () => {
    let spyn = spyOn(component, 'agregar');
    let button = fixture.debugElement.query(By.css('.number')).nativeElement;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(spyn).toHaveBeenCalled();
    });
  });

});