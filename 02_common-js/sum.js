function sum(...num){
    return num.reduce((curr, acc) => curr + acc);
}

module.exports = sum;