// Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

// My Solution:

function diagonalDifference(arr) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    let n = arr.length;
    for (var i = 0, j = 0; i < n, j < n; i++, j++) {
        diagonal1 += arr[i][j];
    }
    for (var i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
        diagonal2 += arr[i][j];
    }
    return Math.abs(diagonal1 - diagonal2)
}