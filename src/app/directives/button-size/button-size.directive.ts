import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { ButtonSizes } from '../../enums/button-sizes.enum';

@Directive({
  selector: '[krButtonSize]'
})
export class ButtonSizeDirective implements AfterViewInit {
  @Input() krButtonSize: ButtonSizes;

  constructor(
    public element: ElementRef,
    public renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.renderer.setElementClass(this.element.nativeElement, `kr-${this.krButtonSize}-button`, true);
  }

}
