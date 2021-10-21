import { fromEvent, of, from } from "rxjs";
import { map, scan } from "rxjs/operators";

//FROM - CREATE STREAM FROM AN ARRAY-----------------------------------------------
const arraySource = from([1, 2, 3, 4, 5])
arraySource.subscribe(val => console.log(val));

of(1, 2, 3).subscribe(data => console.log(data));

// //FROMEVENT - MAKE SUBSCRIPTIONS FROM EVENTS-----------------------------------------------
// fromEvent(document, "click").pipe(
//     scan(count => count + 1, 0)  //similar to reduce in js
// ).subscribe(count => console.log(`Clicked ${count} times`));


// //OF - CREATE OBSERVABLES FROM NUMBERS-----------------------------------------------
// of(1, 2, 3).pipe(
//     map(x => x * x)
// ).subscribe(data => console.log(data));
