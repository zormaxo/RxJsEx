import { of } from "rxjs";
import { map } from "rxjs/operators";

//of - create observables from numbers
of(1, 2, 3).pipe(
    map(x => x * x)
).subscribe(data => console.log(data));
