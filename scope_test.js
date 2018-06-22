/*
 * Scope is visibility (all symbols accessible) at a given instance
 * 
 * Scope => Runtime scope
 *  => creation time scope => global scope, local scope, closure/block scope
 *  => context => is the object that the execution point is attached to
 * 
 * creation time scope cannot be changed once created
 * context can be changed before execution using call/apply/bind on functions
 * 
 */

// var n = 10;

// function square(n) {
//     console.log(n)
//     return n * n;
// }

// console.log(n);

// var s = square(333);
// console.log(s)
