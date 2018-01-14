import { Directive, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';

import { AppColors } from '../../enums/app-colors.enum';
import { IconButtonDirective } from '../icon-button/icon-button.directive';

@Directive({
  selector: '[krOutlineIconButton]',
  providers: [ MatRipple ]
})
export class OutlineIconButtonDirective extends IconButtonDirective implements AfterViewInit {

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public ripple: MatRipple,
    public router: Router
  ) {
    super(element, renderer, ripple, router);
  }

  public addClasses(): void {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-outline-btn', true);
    super.addClasses();
  }

  ngAfterViewInit() {
    this.addClasses();
  }
}
