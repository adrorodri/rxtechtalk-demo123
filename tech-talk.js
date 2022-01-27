import Demo1 from './demo1.js';
import Demo2 from './demo2.js';
import Demo3 from './demo3.js';

const args = process.argv.slice(2);

if (args[0] === 'demo1') {
    new Demo1().start();
} else if (args[0] === 'demo2') {
    new Demo2().start();
} else if (args[0] === 'demo3') {
    new Demo3().start();
} else {
    console.log("Invalid option")
}