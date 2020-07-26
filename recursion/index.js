function sum(arr, n) {
    // Only change code below this line
    // base case
    if (n == 0 || n > arr.length) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }
    // Only change code above this line
}
console.log(sum([2, 3, 4, 5], 2));

/*
   sum(arr, 2) + arr[2] = sum(arr, 2) + 4
   sum(arr, 1) + arr[1] = sum(arr, 1) + 3+4
   sum(arr, 0) + arr[0] = 0+2+3+4
 */