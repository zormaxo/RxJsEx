import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";


// // //TAKEUNTIL-----------------------------------------------
// //emit value every 1s
// const source = interval(1000);
// //after 5 seconds, emit value
// const timer$ = timer(5000);
// //when timer emits after 5s, complete source
// const example = source.pipe(takeUntil(timer$));
// //output: 0,1,2,3
// const subscribe = example.subscribe(val => console.log(val));



// //OBSERVABLE - CREATE OWN OBSERVABLES-----------------------------------------------
// const observable$: Observable<number> = new Observable<number>(data => {
//     data.next(1);
//     data.next(2);
//     setTimeout(() => {
//         console.log("timeout");
//     }, 2000);
//     data.next(3);
//     data.next(4);
//     data.error("error given");
//     data.complete();
// });
// const observer1: Observer<number> =
// {
//     next: val => console.log("observer 1 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// };
// const observer2: Observer<number> =
// {
//     next: val => console.log("observer 2 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// };

// const subscription = observable$.subscribe(observer1);
// observable$.subscribe(observer2);
// observable$.subscribe({
//     next: val => console.log("observer 3 talking " + val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// });

// const employer$: Subject<string> = new Subject<string>();
// const subscription = employer$.subscribe(notif => {
//     console.log(`employee 1 gets : ${notif}`);
// })
// employer$.pipe(take(1)).subscribe(notif => {
//     console.log(`employee 2 gets : ${notif}`);
// })
// employer$.next("gelin artık");
// // employer$.complete();
// subscription.unsubscribe();
// employer$.next("gelin artık2");



// //CONCATMAP-------------------------order is important---------------------
// const source  = of(2000,1000);

// const example = source.pipe(
//     concatMap(val=>of(`Delayed by: ${val}ms`).pipe(delay(val)))
// ).subscribe(val=>console.log(val)); 


// //EXHAUSTMAP----------------------------------------------
// fromEvent(document, "click").pipe(
//     exhaustMap(() => interval(1000).pipe(take(5)))
// ).subscribe(val => console.log(val));


// //SWITCHMAP------USE FOR HTTP REQUEST--------------------
// fromEvent(document, "click").pipe(
//     switchMap(() => interval(1000))
// ).subscribe(val => console.log(val));


// //MERGEMAP-----------------------------------------------
// // fromEvent(document, "click").subscribe(e=>{
// //     interval(1000).subscribe(val => console.log(val));
// // })
// fromEvent(document, "click").pipe(
//     mergeMap(() => interval(1000))
// ).subscribe(val => console.log(val));



// //MERGE-CONCAT-----------------------------------------------
// const example = merge(
//     of(1).pipe(delay(1000)),
//     of(2),
//     of(3),
// );
// example.subscribe(val => console.log(val));
// console.log("second example");
// const example2 = concat(             //order is important
//     of(1).pipe(delay(1000)),
//     of(2),
//     of(3),
// );
// example2.subscribe(val => console.log(val));


// //MAP-PLUCK-----------------------------------------------
// document.body.innerHTML = "<p>Loading...</p>"

// const myPromise = new Promise((resolve, reject) => {
//     console.log("Creating Promise");
//     setTimeout(() => {
//         resolve({
//             title: "WebDev",
//             message: "WebDev is the best!",
//             age: 12
//         })
//     }, 2000);
// });

// //This is where we would put HTTP request if we wanted to turn a HTTP request into an observable
// const observableFromPromise = from(myPromise);
// observableFromPromise.pipe(
//     // map(data => data.age)
//     pluck("age")
// ).subscribe(data => {
//     document.body.innerHTML = "";
//     document.body.insertAdjacentHTML("beforebegin", "<p>" + data + "</p>")

// });



// //TIMER-RANGE-----------------------------------------------
// let source = timer(2000, 1000);
// source.subscribe(val => console.log(val));

// source = range(1, 3);
// source.subscribe(val => console.log(val));



// //INTERVAL-FROM-TAKE-SCAN-----------------------------------------------
// const source = interval(1000);
// source.pipe(
//     scan(val => val + 1, 0),
//     take(4)
// ).subscribe(val => console.log(val));



// //OBSERVABLE - CREATE STREAM FROM AN PROMISE-----------------------------------------------
// document.body.innerHTML = "<p>Loading...</p>"

// const myPromise = new Promise((resolve, reject) => {
//     console.log("Creating Promise");
//     setTimeout(() => {
//         resolve({
//             title: "WebDev",
//             message: "WebDev is the best!",
//             age: 12
//         })
//     }, 3000);
// });

// //This is where we would put HTTP request if we wanted to turn a HTTP request into an observable
// const observableFromPromise = from(myPromise);
// observableFromPromise.subscribe(data => {
//     document.body.innerHTML = "";
//     for (let key in data) {
//         document.body.insertAdjacentHTML("beforebegin", "<p>" + data[key] + "</p>")
//     }
// });



// //OBSERVABLE - CREATE OWN OBSERVABLES-----------------------------------------------
// const observable = new Observable(subscriber => {
//     subscriber.next(1);
//     subscriber.next(2);
//     throw "This is an error";
//     subscriber.next(3);  //of(1,2,3)
//     setInterval(() => {
//         subscriber.next(4);
//         subscriber.complete();
//     }, 1000)
// });

// observable.subscribe({
//     next: val => console.log(val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// });

// //OBSERVABLE - CREATE OWN OBSERVABLES-----------------------------------------------
// const observable$: Observable<number> = new Observable<number>(data => {
//     data.next(1);
//     data.next(2);
//     data.next(3);
//     data.next(4);
//     data.error("error given");
//     data.complete();
// });

// const observer: Observer<number> =
// {
//     next: val => console.log(val),
//     error: err => console.log(err),
//     complete: () => console.log("completed")
// };

// const subscription = observable$.subscribe(observer);



// //FROM - CREATE STREAM FROM AN ARRAY-----------------------------------------------
// const arraySource = from([1, 2, 3, 4, 5])
// arraySource.subscribe(val => console.log(val));

// of(1, 2, 3).subscribe(data => console.log(data));



// //FROMEVENT - MAKE SUBSCRIPTIONS FROM EVENTS-----------------------------------------------
// fromEvent(document, "click").pipe(
//     scan(count => count + 1, 0)  //similar to reduce in js
// ).subscribe(count => console.log(`Clicked ${count} times`));



// //OF - CREATE OBSERVABLES FROM NUMBERS-----------------------------------------------
// of(1, 2, 3).pipe(
//     map(x => x * x)
// ).subscribe(data => console.log(data));
