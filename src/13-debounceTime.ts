/* import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, debounceTime, distinctUntilChanged, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";

console.log("DEBOUNCETIME");

// elem ref
const searchBox = document.getElementById('search');
// streams
const keyup$ = fromEvent(searchBox, 'keyup');
// wait .5s between keyups to emit current value
keyup$.pipe(
  map((i: any) => i.currentTarget.value),
  debounceTime(1500),
  distinctUntilChanged()        //prevents multiple click
).subscribe(console.log); */