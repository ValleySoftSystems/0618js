
/**
 * this helps create a queue
 * allows pushing to the tail
 * allows retreiving from head
 */

// -- implementation

function createStack() {
    return [];
}

// function push(value, queue) {
//     queue.push(value);
// }

// function pop(queue) {
//     return queue.pop();
// }


// -- using

var s = createStack(); // LIFO
s.push(5)
s.push(25)
s.push(15)
var v = s.pop()
console.log(v)
var v = s.pop()
console.log(v)
var v = s.pop()
console.log(v)

