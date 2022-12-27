module.exports = function reverse (n) {
    let result = '';
    for(let i = 1; i <= n.toString().length; i++) {
        if(n.toString().slice(-i) < 1) {
            continue
        }else {
            result = result + n.toString().at(-i)            
        }
    }
    return +result
}

