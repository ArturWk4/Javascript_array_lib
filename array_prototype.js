Array.prototype._of = function () {
  return [...arguments];
};
Array.prototype._concat = function () {
  let result = this;
  for (let i = 0; i < arguments.length; ++i) {
    if (Array.isArray(arguments[i])) {
      result.push(...arguments[i]);
    } else {
      result.push(arguments[i]);
    }
  }
  return result;
};
Array.prototype._every = function (callback) {
  for (let item of this) {
    if (!callback(item)) {
      return false;
    }
  }
  return true;
};
Array.prototype._fill = function (value = 0, start = 0, end = this.length) {
  if (start < 0 || end > this.length) {
    return this;
  }
  for (let i = start; i < end; ++i) {
    this[i] = value;
  }
  return this;
};
Array.prototype._filter = function (callback) {
  let result = [];
  for (let i of this) {
    if (callback(i)) {
      result.push(i);
    }
  }
  return result;
};
Array.prototype._find = function (callback) {
  for (let i of this) {
    if (callback(i)) {
      return i;
    }
  }
};
Array.prototype._findIndex = function (callback) {
  let length = this.length;
  for (let i = 0; i < length; ++i) {
    if (callback(this[i])) {
      return i;
    }
  }
  return -1;
};
Array.prototype._includes = function (value) {
  for (let i of this) {
    if (i === value) {
      return true;
    }
  }
  return false;
};
Array.prototype._join = function (connector = '') {
  let result = '';
  for (let i of this) {
    result += i + connector;
  }
  if (connector !== '') {
    result = result.slice(0, result.length - 1);
  }
  return result;
};
Array.prototype._keys = function () {
  let keys = [];
  for (let i = 0; i < this.length; ++i) {
    keys.push(i);
  }
  return keys;
};
Array.prototype._map = function (callback) {
  let result = [];
  for (let i of this) {
    result.push(callback(i));
  }
  return result;
};
Array.prototype._some = function (callback) {
  for (let i of this) {
    if (callback(i)) {
      return true;
    }
  }
  return false;
};
Array.prototype._reverse = function () {
  let reversedArray = [];
  let len = this.length - 1;
  for(let i = len; i >= 0; --i) {
    reversedArray.push(this[i]);
  }
  return reversedArray;
};

const functions = {
  of: Array.prototype._of,
  concat: Array.prototype._concat,
  every: Array.prototype._every,
  fill: Array.prototype._fill,
  filter: Array.prototype._filter,
  find: Array.prototype._find,
  findIndex: Array.prototype._findIndex,
  includes: Array.prototype._includes,
  join: Array.prototype._join,
  keys: Array.prototype._keys,
  map: Array.prototype._map,
  some: Array.prototype._some,
  reverse: Array.prototype._reverse
};

module.exports = functions;