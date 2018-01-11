import { Directive, Renderer, OnInit, Input } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Directive({
  selector: '[appOutlineButton]'
})
export class OutlineButtonDirective implements OnInit {
  @Input() color: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    if (this.color) {
      this.renderer.setElementStyle(this.element, 'borderColor', this.color);
    }
  }
}
