Array.prototype.myEach = function(callback) {
    for (i=0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    const mapped = [];
    return this.myEach(function(callback) {
        for (i=0; i < this.length; i++) {
            return mapped.push(callback(this[i]));
        }
    });
   
};