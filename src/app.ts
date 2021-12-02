import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";


// // //TAKEUNTIL-----------------------------------------------
// //emit value every 1s
// const source = interval(1000);
// //after 5 seconds, emit value
// const timer$ = timer(10000);
// //when timer emits after 5s, complete source
// const example = source.pipe(takeUntil(timer$));
// //output: 0,1,2,3
// const subscribe = example.subscribe(val => console.log(val));




// //CONCATMAP-------------------------order is important---------------------
// const source  = of(2000,1000);

// const example = source.pipe(
//     concatMap(val=>of(`Delayed by: ${val}ms`).pipe(delay(val)))
// ).subscribe(val=>console.log(val)); 


// //EXHAUSTMAP----------------------------------------------
// fromEvent(document, "click").pipe(
//     exhaustMap(() => interval(1000).pipe(take(5)))
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




// //FROM - CREATE STREAM FROM AN ARRAY-----------------------------------------------
// const arraySource = from([1, 2, 3, 4, 5])
// arraySource.subscribe(val => console.log(val));

// of(1, 2, 3).subscribe(data => console.log(data));



// console.log("OF - CREATE OBSERVABLES FROM NUMBERS");
// of(1, 2, 3).pipe(
//     map(x => {
//         x = x * x;
//         console.log("ömer");
//         return x;
//     })
// ).subscribe(data => console.log(data));
