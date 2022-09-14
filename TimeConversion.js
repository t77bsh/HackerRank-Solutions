// Problem: https://www.hackerrank.com/challenges/time-conversion/problem

// My Solution:

function timeConversion(s) {
    // Write your code here
    if (s.substr(8, 2) === 'AM' && s.substr(0, 2) === '12') {
        return "00:" + s.substr(3, 2) + ":" + s.substr(6, 2);
    }
    else if (s.substr(8, 2) === 'AM' && s.substr(0, 2) !== '12') {
        return s.substr(0, 2) + ":" + s.substr(3, 2) + ":" + s.substr(6, 2);
    }
    else if (s.substr(8, 2) === 'PM' && s.substr(0, 2) === '12') {
        return "12:" + s.substr(3, 2) + ":" + s.substr(6, 2);
    }
    else if (s.substr(8, 2) === 'PM' && s.substr(0, 2) !== '12') {
        const t = parseInt(s.substr(0, 2)) + 12;
        return t.toString() + ":" + s.substr(3, 2) + ":" + s.substr(6, 2);
    }
}
