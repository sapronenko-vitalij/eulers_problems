let numberOfProblem = prompt('Введите номер задачи Эйлера от 1 до 11', 1);
if (numberOfProblem == 1) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerFirst(1000)}`)
} else if (numberOfProblem == 2) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerSecond(4000000)}`)
} else if (numberOfProblem == 3) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerThird(600851475143)}`)
} else if (numberOfProblem == 4) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerForth()}`)
} else if (numberOfProblem == 5) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerFifth(1000)}`)
} else if (numberOfProblem == 6) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerSixth(100)}`)
} else if (numberOfProblem == 7) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerSeventh(10001)}`)
} else if (numberOfProblem == 8) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerEighth()}`)
} else if (numberOfProblem == 9) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerNinth()}`)
} else if (numberOfProblem == 10) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerTenth(2000000)}`)
} else if (numberOfProblem == 11) {
    alert(`Результат задачи номер ${numberOfProblem}: ${eulerEleventh()}`)
}














//#1
function eulerFirst(number) {
    let resultsArrayFirst = [];
    for (let i = 1; i < number; i++) {
        if (isDividedBy(i, 3) || isDividedBy(i, 5)) {
            resultsArrayFirst.push(i)
        }
    }
    return sumArrayElements(resultsArrayFirst);
}
// console.log(eulerFirst(1000));
//#2
function eulerSecond(number) {
    return sumArrayElements(sequenceFibonachi(number).filter(isNumberEven));
}
console.log(eulerSecond(10));
//#3 
function eulerThird(number) {
    return findDividers(number).filter(isNumberPrimeFaster).pop();
}
// console.log(eulerThird(13195));
//#4
function eulerForth() {
    for (let i = 1000; i > 99; i--) {
        for (let j = 1000; j > 99; j--) {
            if (isNumberPalindrome(i * j)) {
                return i * j;
            }
        }
    }
}
// console.log(eulerForth());


//#5
function eulerFifth() {
    let i = 1;
    while (!(isDividedBy(i, 1) && isDividedBy(i, 2) && isDividedBy(i, 3) && isDividedBy(i, 4) && isDividedBy(i, 5) && isDividedBy(i, 6) && isDividedBy(i, 7) && isDividedBy(i, 8) && isDividedBy(i, 9) && isDividedBy(i, 10) && isDividedBy(i, 11) && isDividedBy(i, 12) && isDividedBy(i, 13) && isDividedBy(i, 14) && isDividedBy(i, 15) && isDividedBy(i, 16) && isDividedBy(i, 17) && isDividedBy(i, 18) && isDividedBy(i, 19) && isDividedBy(i, 20))) {
        i++;
    }
    return i;
}
// console.log(eulerFifth());


//#6
function eulerSixth(number) {
    let sumOfSquares = 0;
    let squareOfSum = 0;
    for (let i = 1; i <= number; i++) {
        sumOfSquares += i ** 2;
        squareOfSum += i;
    }
    squareOfSum = squareOfSum ** 2;
    return squareOfSum - sumOfSquares;
}
// console.log(eulerSixth(10));
//#7
function eulerSeventh(number) {
    let arrayOfPrimeNumbers = [];
    let i = 1;
    do {
        i++;
        if (isNumberPrimeFaster(i)) {
            arrayOfPrimeNumbers.push(i);
        }
    } while (arrayOfPrimeNumbers.length !== number)
    return arrayOfPrimeNumbers.pop();
}
// console.log(eulerSeventh(6));
//#8
function eulerEighth() {
    let bigNum = 7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450n;
    let bigNumString = bigNum.toString();
    let arrayOfDigits = [];
    let maxMultSec = 1;
    for (let i = 0; i < bigNumString.length; i++) {
        arrayOfDigits[i] = +bigNumString[i];
    }
    for (let i = 0; i < arrayOfDigits.length - 13; i++) {
        if (maxMultSec < mulArrayElements(arrayOfDigits.slice(i, i + 13))) {
            maxMultSec = mulArrayElements(arrayOfDigits.slice(i, i + 13))
        }
    }
    return maxMultSec;
}
// console.log(eulerEighth());



//#9
function eulerNinth() {
    for (let c = 998; c > 1; c--) {
        for (let b = 998; b > 1; b--) {
            for (let a = 998; a > 1; a--) {
                if (a + b + c == 1000 && a ** 2 + b ** 2 == c ** 2) {
                    return a * b * c;
                }
            }
        }

    }

}
// console.log(eulerNinth());




//#10
function eulerTenth(number) {
    let sumPrimeNumbers = 0;
    for (let i = 2; i < number; i++) {
        if (isNumberPrimeFaster(i)) {
            sumPrimeNumbers += i;
        }
    }
    return sumPrimeNumbers;
}
// console.log(eulerTenth(10));


//#11
function eulerEleventh() {
    let table = [
        [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
        [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
        [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
        [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
        [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
        [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
        [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
        [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
        [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
        [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
        [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
        [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
        [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
        [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
        [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
        [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
        [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
        [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
        [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
        [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
    ]

    let maxMulOfNum = 0;
    //++ diogonal
    for (let i = 0; i < table.length - 3; i++) {
        console.log(i)
        for (let j = 0; j < table[i].length - 3; j++) {

            console.log(j)
            console.log(table[i][j] * table[i + 1][j + 1] * table[i + 2][j + 2] * table[i + 3][j + 3])
            if (maxMulOfNum < table[i][j] * table[i + 1][j + 1] * table[i + 2][j + 2] * table[i + 3][j + 3]) {
                maxMulOfNum = table[i][j] * table[i + 1][j + 1] * table[i + 2][j + 2] * table[i + 3][j + 3];
                console.log(table[i][j] * table[i + 1][j + 1] * table[i + 2][j + 2] * table[i + 3][j + 3])
            }
        }
    }
    // horizontal
    for (let i = 0; i < table.length; i++) {
        console.log(i)
        for (let j = 0; j < table[i].length - 3; j++) {

            console.log(j)
            console.log(table[i][j] * table[i][j + 1] * table[i][j + 2] * table[i][j + 3])
            if (maxMulOfNum < table[i][j] * table[i][j + 1] * table[i][j + 2] * table[i][j + 3]) {
                maxMulOfNum = table[i][j] * table[i][j + 1] * table[i][j + 2] * table[i][j + 3];
                console.log(table[i][j] * table[i][j + 1] * table[i][j + 2] * table[i][j + 3])
            }
        }
    }
    // vertical
    for (let i = 0; i < table.length - 3; i++) {
        console.log(i)
        for (let j = 0; j < table[i].length; j++) {

            console.log(j)
            console.log(table[i][j] * table[i + 1][j] * table[i + 2][j] * table[i + 3][j])
            if (maxMulOfNum < table[i][j] * table[i + 1][j] * table[i + 2][j] * table[i + 3][j]) {
                maxMulOfNum = table[i][j] * table[i + 1][j] * table[i + 2][j] * table[i + 3][j];
                console.log(table[i][j] * table[i + 1][j] * table[i + 2][j] * table[i + 3][j])
            }
        }
    }
    //-+ diogonal
    for (let i = 3; i < table.length; i++) {
        console.log(i)
        for (let j = 0; j < table[i].length - 3; j++) {

            console.log(j)
            console.log(table[i][j] * table[i - 1][j + 1] * table[i - 2][j + 2] * table[i - 3][j + 3])
            if (maxMulOfNum < table[i][j] * table[i - 1][j + 1] * table[i - 2][j + 2] * table[i - 3][j + 3]) {
                maxMulOfNum = table[i][j] * table[i - 1][j + 1] * table[i - 2][j + 2] * table[i - 3][j + 3];
                console.log(table[i][j] * table[i - 1][j + 1] * table[i - 2][j + 2] * table[i - 3][j + 3])
            }
        }
    }
    return maxMulOfNum;
}
// console.log(eulerEleventh());

//functions to help 

// найти массив делителей
function findDividers(number) {
    let arrayOfDividers = [];
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            arrayOfDividers.push(i);
        }
    }
    return arrayOfDividers;
}
// console.log(findDividers(40000));


// делится ли число на другое без остатка
function isDividedBy(number, divider) {
    if (number % divider == 0) {
        return true;
    }
}



// определение четности
function isNumberEven(number) {
    return isDividedBy(number, 2);
}



// определение простого числа
function isNumberPrimeFaster(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isNumberPrimeFaster(2))



function isNumberPalindrome(number) {
    let testedNumber = number.toString();
    for (let i = 0; i < testedNumber.length / 2; i++) {
        if (testedNumber[i] != testedNumber[testedNumber.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// console.log(isNumberPalindrome(37));
// console.log(isNumberPalindrome(1));
// console.log(isNumberPalindrome(101));
// console.log(isNumberPalindrome(30303));
// console.log(isNumberPalindrome(30301));

function isNumberPrimeShort(number) {
    if (findDividers(number).length == 2) {
        return true;
    }
    return false;
}
// console.log(isNumberPrimeShort(37))



// сумма элементов массива
function sumArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}



// произведение элементов массива
function mulArrayElements(array) {
    let mul = 1;
    for (let i = 0; i < array.length; i++) {
        mul *= array[i];
    }
    return mul;
}



// максимальный элемент массива
function findMaxElementOfArray(array) {
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxElement < array[i]) {
            maxElement = array[i];
        }
    }
    return maxElement;
}



// сложение двух чисел
function sumTwoNumbers(first, second) {
    return first + second;
}


// последовательность чисел Фибоначи
function sequenceFibonachi(numberOfElements) {
    let arrayFibonachi = [];

    for (let i = 1; i < numberOfElements; i++) {
        arrayFibonachi.push(numberFibonachi(i));
    }
    return arrayFibonachi;
}



// определение Н-элемента последовательности Фибоначи - скомунизджено с лернжс
function numberFibonachi(number) {
    let a = 0;
    let b = 0;
    let c = 0;
    if (number == 1) {
        b = 1;
    } else if (number == 2) {
        b = 2;
    } else if (number > 2) {
        a = 1;
        b = 2;
        for (let i = 3; i <= number; i++) {
            c = a + b;
            a = b;
            b = c;
        }
    }
    return b;
}