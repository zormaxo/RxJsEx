import { fromEvent, of, Observable, merge } from "rxjs";
import { map, scan,delay } from "rxjs/operators";

const example = merge(
    of(1).pipe(delay(2000)),
    of(2),
    of(3)
)
example.subscribe(d=>console.log(d));

const example2 = merge(
    of(1).pipe(delay(2000)),
    of(2),
    of(3)
)
example.subscribe(d => console.log(d));

/* const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
        subscriber.next(5);
    }, 1000);
    subscriber.next(5123);
});
observable.subscribe({
    next: data => console.log(data),
    error: (err) => console.log(err),
    complete: () => console.log("completed")
}); */


/* of(1,2,3).pipe(
    map(x=>x*x)
).subscribe(data=>console.log(data));

fromEvent(document,    "click").pipe(
    scan(count=>count+1, 0)
).subscribe(count=>{
    console.log(count);
}); */