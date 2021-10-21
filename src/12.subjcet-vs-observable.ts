import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";


//SUBJECT AND OBSERVABLE DIFFERENCE-----------------------------------------------
const observable$: Observable<number> = new Observable<number>(data => {
    data.next(Math.random());

});
observable$.subscribe(res => {
    console.log('subscription a :', res); //subscription a :0.2859800202682865
});

observable$.subscribe(res => {
    console.log('subscription b :', res); //subscription b :0.694302021731573
});



let obs = new Subject();

obs.subscribe(res => {
    console.log('subscription a :', res); // subscription a : 0.91767565496093
});

obs.subscribe(res => {
    console.log('subscription b :', res);// subscription b : 0.91767565496093
});

obs.next(Math.random());