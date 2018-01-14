import { Directive, HostListener, Input, Renderer, ElementRef } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';

import { AppColors } from '../../enums/app-colors.enum';
import { ButtonSizes } from '../../enums/button-sizes.enum';

@Directive({
  selector: '[krButton]'
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
    this.addColorClass();
    this.renderer.setElementClass(this.element.nativeElement, 'kr-btn', true);
  }

  @HostListener('click') onClick() {
    if (this.routerLink) {
      this.router.navigate([ this.routerLink ]);
    }
  }

  @HostListener('mousedown', [ '$event' ]) onmousedown(event) {
    this.toggleClass('kr-btn-mouse-focused', true);
    this.ripple.launch(event.x, event.y);
  }

  @HostListener('mouseup') onmouseup() {
    this.toggleClass('kr-btn-mouse-focused', false);
  }

  private addColorClass(): void {
    if (this.color in AppColors) {
      this.toggleClass(`kr-${this.color}`, true);
    }
  }

  private toggleClass(className: string, toggle: boolean): void {
    this.renderer.setElementClass(this.element.nativeElement, className, toggle);
  }
}
