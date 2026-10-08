function product(...num){
    return num.reduce((curr, acc) => curr * acc);
}

module.exports = product;