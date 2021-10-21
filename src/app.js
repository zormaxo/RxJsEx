import { fromEvent, of, from, Observable, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, take, pluck, delay, mergeMap, switchMap } from "rxjs/operators";

//SWITCHMAP------USE FOR HTTP REQUEST--------------------
fromEvent(document, "click").pipe(
    switchMap(() => interval(1000))
).subscribe(val => console.log(val));


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
// const example2 = concat(
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
