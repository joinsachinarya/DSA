function sol(str) {

    for (let i = 0; i < str.length; i++) {
        let uniqueCharFound = true;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && i !== j) {
                uniqueCharFound = false
            }
        }
        if (uniqueCharFound) {
            return i;
        }
    }
    return -1;

}

console.log(sol('leetcodelevel'))
