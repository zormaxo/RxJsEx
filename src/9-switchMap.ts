import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";

console.log("SWITCHMAP------USE FOR HTTP REQUEST"); 

//Cancels previous subscription.
fromEvent(document, "click").pipe( 
    switchMap(() => interval(1000))
).subscribe(val => console.log(val));