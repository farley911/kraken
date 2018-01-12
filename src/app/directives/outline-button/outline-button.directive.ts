import { Directive, Renderer, Input, ElementRef } from '@angular/core';

import { AppColors } from '../../enums/app-colors.enum';

@Directive({
  selector: '[appOutlineButton]'
})
export class OutlineButtonDirective {
  @Input() color: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer
  ) {
    if (this.color in AppColors) {
      renderer.setElementClass(element.nativeElement, `kr-outline-btn-${this.color}`, true);
    }
    renderer.setElementClass(element.nativeElement, 'kr-outline-btn', true);
  }
}
