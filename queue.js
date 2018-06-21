
/**
 * this helps create a queue
 * allows appending to the tail
 * allows retreiving from head
 */

// -- implementation

function createQueue() {
    return [];
}

function append(value, queue) {
    queue.push(value);
}

function retreive(queue) {
    return queue.shift();
}


// -- using

var q = createQueue(); // FIFO
append(5, q)
append(25, q)
append(15, q)
var v = retreive(q)
console.log(v)
var v = retreive(q)
console.log(v)
var v = retreive(q)
console.log(v)

