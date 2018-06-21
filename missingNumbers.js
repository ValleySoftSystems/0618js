
function printMissingNumber(list) {
    var status = [];
    for (var i = 0; i < list.length; i++){
        var value = list[i];
        status[value] = true;
    }
    for (var j = 1; j < status.length; j++) {
        if (! status[j]) { // if status[j] is undefined or null or 0
            console.log(j);
            break;
        }
    }
}

printMissingNumber([4,1,5,3])






