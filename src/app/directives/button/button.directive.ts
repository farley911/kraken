import { Directive, HostListener, Input, Renderer, ElementRef } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';

import { AppColors } from '../../enums/app-colors.enum';

@Directive({
  selector: '[app-button]'
})
export class ButtonDirective {
  @Input() color: string;
  @Input() routerLink: string;

  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public ripple: MatRipple,
    public router: Router
  ) { }

  public addClasses(): void {
    if (this.color in AppColors) {
      this.renderer.setElementClass(this.element.nativeElement, `kr-${this.color}`, true);
    }
    this.renderer.setElementClass(this.element.nativeElement, 'kr-btn', true);
  }

  @HostListener('click') onClick() {
    if (this.routerLink) {
      this.router.navigate([ this.routerLink ]);
    }
  }

  @HostListener('mousedown', [ '$event' ]) onmousedown(event) {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-btn-mouse-focused', true);
    this.ripple.launch(event.x, event.y);
  }

  @HostListener('mouseup') onmouseup() {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-btn-mouse-focused', false);
  }
}
