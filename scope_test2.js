
var x = 20, p = 25, y= 5, z = 75, q = 43;

function f4(p) {
    p = 40;
    console.log(p)
}

function f3(p) {
    var p = 55;
    console.log(p)
}

function f1(y){
    var x = 10;
    console.log(x+y)
}

function f2(z){
    var x = 15;
    console.log(x+z)
}

console.log(x+y+p+z+q)
f1(q)

console.log(x+y+p+z+q)
f2(z)

console.log(x+y+p+z+q)
f3(p)

console.log(x+y+p+z+q)
f4(p)
