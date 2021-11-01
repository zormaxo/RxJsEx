/* import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, throttleTime, debounceTime, distinctUntilChanged, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap, catchError } from "rxjs/operators";

console.log("CATCH ERROR");


of(1, 2, 3, 4, 5).pipe(
    map(n => {
        if (n === 4) {
            throw 'four!';
        }
        return n;
    }),
    catchError(err => of('I', 'II', 'III', 'IV', 'V')),
).subscribe(x => console.log(x));
 

of(1, 2, 3, 4, 5).pipe(
    map(n => {
        if (n === 4) {
            throw 'four!';
        }
        return n;
    }),
    catchError(err => {
        throw 'error in source. Details: ' + err;
    }),
).subscribe({
    next: x => console.log(x),
    error: err => console.log(err)
});
  // 1, 2, 3, error in source. Details: four! */