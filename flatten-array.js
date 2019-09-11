function flatten(arr){
    return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
}

module.exports = flatten;