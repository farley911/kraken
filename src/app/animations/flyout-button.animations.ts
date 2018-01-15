import { transition, style, state, trigger, animate, ElementRef } from '@angular/core';

export const FlyoutAnimations = {
  toggleFlyout: [
    trigger('toggleFlyout', [
      state('0', style({
        display: 'none',
        height: '0px'
      })),
      state('1', style({
        display: 'inline-flex',
        height: '*'
      })),
      transition('void => *', animate(0)),
      transition('* => *', animate('300ms ease-in-out'))
    ])
  ]
};
