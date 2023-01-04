Array.prototype.myEach = function(callback) {
    for (i=0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }
}
