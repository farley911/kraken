import { Directive, ElementRef, Renderer } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[krButtonGroup]'
})
export class ButtonGroupDirective implements AfterViewInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-button-group', true);
  }

}
