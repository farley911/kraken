import { Directive, Renderer, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonDirective } from '../button/button.directive';
import { MatRipple } from '@angular/material/core';

@Directive({
  selector: '[app-outline-button]',
  providers: [ MatRipple ]
})
export class OutlineButtonDirective extends ButtonDirective implements AfterViewInit {

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
