// import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
// import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";


// console.log("OBSERVABLE - CREATE OWN OBSERVABLES");

// const observable$: Observable<number> = new Observable<number>(subscriber);

// function subscriber(data: Subscriber<number>) {
//     data.next(1);
//     data.next(2);
//     //throw "dalih"
//     setTimeout(() => {
//         console.log("timeout start");
//         data.next(3);
//         console.log("timeout end");
//     }, 2000);
//     data.next(4);

//     //data.error("error given");
//     data.complete();
// }

// const observer: Observer<number> = {
//     next: val => console.log("observer 1 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// };

// observable$.subscribe(observer);

// const subscription = observable$.subscribe({
//     next: val => console.log("observer 2 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// });

// subscription.unsubscribe();

// console.log("INFINITE OBSERVABLE");

// var button = document.querySelector('button');
// const observable2$: Observable<number> = new Observable<number>(subscriber2);

// function subscriber2(data: Subscriber<number>) {
//     button.onclick = function (event) {
//         data.next(Math.random());
//     }
// };
// observable$.subscribe(val => console.log(val));