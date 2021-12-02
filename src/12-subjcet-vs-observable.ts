// import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
// import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";

// console.log("SUBJECT AND OBSERVABLE DIFFERENCE");

// ///////////////////////////////////////////////////////////////////////////////////

// const observable$: Observable<number> = new Observable<number>(data => {
//     data.next(Math.random());
// });

// observable$.subscribe(res => {
//     console.log('subscription a :', res); //subscription a :0.2859800202682865
// });

// observable$.subscribe(res => {
//     console.log('subscription b :', res); //subscription b :0.694302021731573
// });



// const observable2$ = new Subject();

// observable2$.subscribe(res => {
//     console.log('subscription a :', res); // subscription a : 0.91767565496093
// });

// observable2$.subscribe(res => {
//     console.log('subscription b :', res);// subscription b : 0.91767565496093
// });

// observable2$.next(Math.random());