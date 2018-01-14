import { Directive, Renderer, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatRipple } from '@angular/material/core';

import { AppColors } from '../../enums/app-colors.enum';

@Directive({
  selector: '[app-outline-button]',
  providers: [ MatRipple ]
})
export class OutlineButtonDirective implements AfterViewInit {
  @Input() color: string;
  @Input() routerLink: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer,
    private ripple: MatRipple,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.addClasses();
    this.renderer.setElementAttribute(this.element.nativeElement, 'mat-ripple', '');
    this.renderer.setElementAttribute(this.element.nativeElement, 'mat-ripple-color', '#FF0000');
  }

  @HostListener('click') onClick() {
    if (this.routerLink) {
      this.router.navigate([ this.routerLink ]);
    }
  }

  @HostListener('mousedown', [ '$event' ]) onmousedown(event) {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-btn-mouse-focused', true);
  }

  private addClasses(): void {
    if (this.color in AppColors) {
      this.renderer.setElementClass(this.element.nativeElement, `kr-${this.color}`, true);
    }
    this.renderer.setElementClass(this.element.nativeElement, 'kr-btn', true);
    this.renderer.setElementClass(this.element.nativeElement, 'kr-outline-btn', true);
  }
}
