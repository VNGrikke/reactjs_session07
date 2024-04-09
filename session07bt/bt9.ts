let array1:number[] = [1,2,3,4,5,6,7]
let array2:number[] = [2,3,5,7]

function isPrime(number: number): boolean {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function arrayIsPrime(numbers:number[]) {
    for (let index in numbers) {
        if (!isPrime(numbers[index])) {
            return false;
        }            
    }
    return true;
}

console.log(arrayIsPrime(array1));
console.log(arrayIsPrime(array2));



