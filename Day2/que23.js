function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return { min, max };
}

let numbers = [5, 12, 1, 8, 20, 3];
let result = findMinMax(numbers);
console.log("Min:", result.min, "Max:", result.max);