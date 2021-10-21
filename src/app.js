import { fromEvent, of, from, Observable } from "rxjs";
import { map, scan } from "rxjs/operators";

//OBSERVABLE - CREATE OWN OBSERVABLES-----------------------------------------------
const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    throw "This is an error";
    subscriber.next(3);  //of(1,2,3)
    setInterval(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000)
});

observable.subscribe({
    next: val => console.log(val),
    error: err => console.log(err),
    complete: () => console.log("completed")
});

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
