import { Directive, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';

import { RoundedButtonDirective } from '../rounded-button/rounded-button.directive';

@Directive({
  selector: '[krRoundedOutlineButton]',
  providers: [ MatRipple ]
})
export class RoundedOutlineButtonDirective extends RoundedButtonDirective implements AfterViewInit {

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public ripple: MatRipple,
    public router: Router
  ) {
    super(element, renderer, ripple, router);
  }

  ngAfterViewInit() {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-outline-button', true);
    super.ngAfterViewInit();
  }

}
