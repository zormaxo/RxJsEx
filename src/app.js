import { fromEvent, of } from "rxjs";
import { map, scan } from "rxjs/operators";

//FROMEVENT - MAKE SUBSCRIPTIONS FROM EVENTS-----------------------------------------------
fromEvent(document, "click").pipe(
    scan(count => count + 1, 0)  //similar to reduce in js
).subscribe(count => console.log(`Clicked ${count} times`));


// //OF - CREATE OBSERVABLES FROM NUMBERS-----------------------------------------------
// of(1, 2, 3).pipe(
//     map(x => x * x)
// ).subscribe(data => console.log(data));
