Array.prototype.unique = function () {
    newArray = [];
    this.forEach(el => {
        if(newArray.includes(el)) {
            // cool
        } else {
            newArray.push(el);
        }
    });
    return newArray;
}

Array.prototype.twoSum = function () {
    newArray = [];
    for (i=0; i < this.length -1; i++) {
        for (j = i + 1; j <= this.length - 1; j++) {
            // debugger
            if (this[i] + this[j] === 0) {
                // debugger
                newArray.push([i, j]);
            }
        }
    }
    return newArray;
}