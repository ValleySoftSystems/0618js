
function changePrimitiveValue(num, flag){
    console.log('\tinside func: before change: ' + num)
    num++;
    console.log('\tinside func: after change: ' + num)

    console.log('\tinside func: before change: ' + flag)
    flag = !flag;
    console.log('\tinside func: after change: ' + flag)
}

function changeString(str){
    console.log('\tinside: before change: ' + str)
    str += " toka "
    console.log('\tinside: after change: ' + str)
}

function changeArray(someObj){
    console.log('\tinside: before change: ' + JSON.stringify(someObj))
    someObj.push(55)
    console.log('\tinside: after change: ' + JSON.stringify(someObj))
}

function changeCompositeValue(someObj){
    console.log('\tinside: before change: ' + JSON.stringify(someObj))
    someObj.p = 200;
    someObj.q = 300;
    console.log('\tinside: after change: ' + JSON.stringify(someObj))
}

var n = 40, f = true
console.log('outside func: before call: ' + n)
console.log('outside func: before call: ' + f)
changePrimitiveValue(n, f) // vanishing cabinet
console.log('outside func: after call: ' + n)
console.log('outside func: after call: ' + f)

var name = "Donald Trump"
console.log('\noutside func: before call: ' + name)
changeString(name) // vanishing cabinet
console.log('outside func: after call: ' + name)

var list = [ 3, 4, 5 ]
console.log('\noutside func: before call: ' + JSON.stringify(list))
changeArray(list) // vanishing cabinet
console.log('outside func: after call: ' + JSON.stringify(list))

var obj = { p: 100, q: 150 }
console.log('\noutside func: before call: ' + JSON.stringify(obj))
changeCompositeValue(obj) // vanishing cabinet
console.log('outside func: after call: ' + JSON.stringify(obj))






