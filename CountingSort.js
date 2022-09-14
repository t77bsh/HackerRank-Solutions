// Problem: https://www.hackerrank.com/challenges/countingsort1/problem

// My Solution:

function countingSort(arr) {
    let res = [];
    function freq(i) {
        let count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (i == arr[j]) {
                count++;
            }
        }
        return count
    }
    for (var i = 0; i < 100; i++) {
        res.push(freq(i));
    }
    return res
}