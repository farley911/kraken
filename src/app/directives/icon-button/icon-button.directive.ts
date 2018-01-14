import { Directive, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';

import { ButtonDirective } from '../button/button.directive';

@Directive({
  selector: '[krIconButton]',
  providers: [ MatRipple ]
})
export class IconButtonDirective extends ButtonDirective implements AfterViewInit {

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public ripple: MatRipple,
    public router: Router
  ) {
    super(element, renderer, ripple, router);
  }

  public addClasses(): void {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-icon-btn', true);
    super.addClasses();
  }

  ngAfterViewInit() {
    this.addClasses();
  }

}
