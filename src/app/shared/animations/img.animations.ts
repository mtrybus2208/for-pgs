import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

export function simpleFade() {
  return trigger('onLoadfade', [
    state('in', style({
      opacity: 1,
    })),
    state('out', style({
      opacity: 0,
    })),
    transition('out <=> in', animate('300ms linear'))
  ]);
}
