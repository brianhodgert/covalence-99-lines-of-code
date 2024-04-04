
const friends = ["Jojo", "Clark", "Spungy", "Tyler", "Cliff"]

friends.forEach(friend => {
    console.log(`${friend}:`)
    let lineNumber = 99
    while(lineNumber>1){
        console.log( `${lineNumber} lines of code in the file, ${lineNumber} lines of code; ${friend} strikes one out, clears it all out, ${lineNumber -1} lines of code in the file`)
        lineNumber--
    }
    console.log(`1 line of code in the file, 1 line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file`)
})
