Array.prototype.myEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  // return this
};

Array.prototype.myMap = function (callback) {
  const mapped = [];
  // this.myEach(function(el) {
  //     mapped.push(callback(el));
  // });
  const cb = function (el) {
    mapped.push(callback(el));
  };
  this.myEach(cb);
  return mapped;
};

Array.prototype.myReduce = function (callback, initialValue) {
  acc = initialValue || this.shift();
  this.myEach(function (el) {
    acc = callback(acc, el);
  });
  return acc;
};
