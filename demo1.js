import { delay, Observable, range, timer } from 'rxjs'

export default class Demo1 {
    $observable = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.next(4);
        // subscriber.error(new Error("An error!!"));
        // subscriber.complete();
        return () => {
            console.log("Cleaning up resources");
        }
    });

    $observable = timer(0, 1000);

    start() {
        let subscription = this.$observable.subscribe({
            next: (value) => console.log("Next", value),
            error: (error) => console.error("Error", error),
            complete: () => console.log("Complete")
        });

        setTimeout(() => {
            subscription.unsubscribe();
        }, 10000);
    }
}