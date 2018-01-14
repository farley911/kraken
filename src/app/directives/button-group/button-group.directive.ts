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
    this.addClasses();
  }

  private addClasses(): void {
    this.renderer.setElementClass(this.element.nativeElement, 'kr-button-group', true);
    this.addVerticalClass();
  }

  private addVerticalClass(): void {
    if (this.element.nativeElement.hasAttribute('vertical')) {
      this.renderer.setElementClass(this.element.nativeElement, 'kr-vertical-group', true);
    }
  }

}
