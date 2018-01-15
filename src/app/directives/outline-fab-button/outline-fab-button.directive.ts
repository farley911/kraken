import { Directive, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';

import { AppColors } from '../../enums/app-colors.enum';
import { ButtonDirective } from '../button/button.directive';

@Directive({
  selector: '[krOutlineFabButton]',
  providers: [ MatRipple ]
})
export class OutlineFabButtonDirective extends ButtonDirective implements AfterViewInit {

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public ripple: MatRipple,
    public router: Router
  ) {
    super(element, renderer, ripple, router);
  }

  public addClasses(): void {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-fab-button', true);
    this.renderer.setElementClass(this.element.nativeElement, 'kr-outline-button', true);
    super.addClasses();
  }

  ngAfterViewInit() {
    this.addClasses();
  }
}
