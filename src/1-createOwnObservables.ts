// import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
// import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";


// console.log("OBSERVABLE - CREATE OWN OBSERVABLES");

// const observable$: Observable<number> = new Observable<number>(subscriber);

// function subscriber(data:Subscriber<number>) {
//     data.next(1);
//     data.next(2);
//     setTimeout(() => {
//         console.log("timeout");
//     }, 2000);
//     data.next(3);
//     data.next(4);
//     data.error("error given");
//     data.complete();
// }

// const observer: Observer<number> =
// {
//     next: val => console.log("observer 1 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// };

// observable$.subscribe(observer);
// const subscription = observable$.subscribe({
//     next: val => console.log("observer 3 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// });

// subscription.unsubscribe();

