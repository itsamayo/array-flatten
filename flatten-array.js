function flatten(arr){
    if(Array.isArray(arr)){
        return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
    } else {
        return 'Please pass in an array';
    }
    
}

module.exports = flatten;