import { delay, Observable, range, Subject, timer } from 'rxjs'

export default class Demo2 {
    $observable = new Observable(subscriber => {
        subscriber.next(Math.floor(Math.random() * 1000));
    });

    $subject = new Subject();

    start() {
        this.startSubjects();
        this.startObservables();
    }

    startSubjects() {
        this.$subject.subscribe({
            next: (value) => console.log("Subject Next", value)
        });
        this.$subject.subscribe({
            next: (value) => console.log("Subject Next", value)
        });
        this.$subject.subscribe({
            next: (value) => console.log("Subject Next", value)
        });

        this.$subject.next(Math.floor(Math.random() * 1000));
    }

    startObservables() {
        this.$observable.subscribe({
            next: (value) => console.log("Observable Next", value)
        });
        this.$observable.subscribe({
            next: (value) => console.log("Observable Next", value)
        });
        this.$observable.subscribe({
            next: (value) => console.log("Observable Next", value)
        });
    }
}