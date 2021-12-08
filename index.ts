import { interval } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';

var outer = interval(1000).pipe(take(2));

var source = outer.pipe(
  switchMap((x) => {
    return interval(500).pipe(
      take(4),
      map((y) => `${x}:${y}`)
    );
  })
);

source.subscribe((d) => console.log(d));
