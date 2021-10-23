import { fromEvent, of, from, Observable, Observer, Subject, Subscriber, interval, timer, range, merge, concat } from "rxjs";
import { map, scan, takeUntil, take, pluck, delay, mergeMap, switchMap, exhaustMap, concatMap } from "rxjs/operators";

// console.log("MERGEMAP");


/* // fromEvent(document, "click").subscribe(e=>{
//     interval(1000).subscribe(val => console.log(val));
// })
fromEvent(document, "click").pipe(
    mergeMap(() => interval(1000))
).subscribe(val => console.log(val)); */


//---------------------------------------------------------------------------


/* var input1 = document.querySelector('#search');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var obs1 = fromEvent(input1, 'input');
var obs2 = fromEvent(input2, 'input');

obs1.pipe(
    map((text1: any) => text1.target.value),
    mergeMap((text1: any) =>
        obs2.pipe(
            map((text2: any) => text1 + " " + text2.target.value)
        )
    )
).subscribe(combinedValue => span.textContent = combinedValue); */