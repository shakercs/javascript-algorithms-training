function countup(startNum, endNum) {
    if (startNum === endNum) {
        return [];
    } else {
        //debugger;
        const countArray = countup(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
}
console.log(countup(5, 9)); // [ 1, 2, 3, 4, 5 ]