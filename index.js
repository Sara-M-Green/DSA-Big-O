// Tower of Hanoi

function stackRods(numOfDisks, src, mid, dest) {
    if (numOfDisks > 0) {
        stackRods(numOfDisks -1, src, mid, dest)
        console.log("Move disk " + numOfDisks + " from " + src + " to " + dest)
        stackRods(numOfDisks - 1, mid, src, dest)
    }
    return
}

// console.log(stackRods(5, "rod 1", "rod 2", "rod 3"))


// Counting Sheep

function countSheep(numOfSheep) {
        for (let i = 0; i <= numOfSheep; i++) {
            if (i < numOfSheep) {
                console.log("Another sheep jumps over the fence")
            }
            if (i === numOfSheep) {
                 console.log("All sheep jumped over the fence")
            }
           
        }        
}

// console.log(countSheep(5))

// Power Calculator

function powerCalc(baseNum, exp) {
    return Math.pow(baseNum, exp)
}

// console.log(powerCalc(10, 2))

function reverseString(str) {
    let newStr = ""

    for (let i = str.length; i > 0; i--) {
        const newLetter = str[i-1]
        newStr += newLetter
    }

    return newStr
}

// console.log(reverseString("abcd"))

function triangleNumber(n) {
    let result = 0

    for (let i = n; i >= 1; i--) {
        result += i
    }
    return result
}

// console.log(triangleNumber(5))

function stringSplitter(str, seperator) {
    let result = []

    for (let i = 1; i < str.length; i++) {
        if (!(str.includes(seperator))) {
            result.push(str)
            return result
        }

        let split = str.indexOf(seperator)
        result.push(str.slice(0, split))
        str = str.slice(split + 1, str.length)

    }

    return result
}

// console.log(stringSplitter("02/20/2020", "/"))

function fibonacci(num) {
    let num1 = 0
    let num2 = 1
    let sum

    for (let i = 1; i < num; i++) {
        sum = num1 + num2
        num1 = num2
        num2 = sum
    }

    return num2

}

// console.log(fibonacci(7))

function factorial(num) {
    let result = num

    for (let i = num - 1; i > 0; i--) {
        result = result * i
    }

    return result
}

console.log(factorial(5))