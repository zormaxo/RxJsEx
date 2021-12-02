// import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
// import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";

// console.log("FROMEVENT - MAKE SUBSCRIPTIONS FROM EVENTS");

// /////////////////////////////////// 1 ///////////////////////////////////

// var button1 = document.querySelector('button');

// var observer = {
//     next: (value: any) => {
//         console.log(value);
//     },
//     error: function (error: any) {
//         console.log(error);
//     },
//     complete: function () {
//         console.log('Completed');
//     }
// };

// fromEvent(button1, 'click')
//     .subscribe(observer);

// /////////////////////////////////// 2 ///////////////////////////////////

// fromEvent(document, "click").pipe(
//     scan(count => count + 1, 0)  //similar to reduce in js
// ).subscribe(count => console.log(`Clicked ${count} times`));


// /////////////////////////////////// 3 ///////////////////////////////////

// var button = document.querySelector('button');

// const observable$: Observable<number> = new Observable<number>(subscriber);
// function subscriber(data: any) {
//     button.onclick = function (event) {
//         data.next(1);
//     }
// };
// observable$.subscribe(val=>console.log(val));