// Problem: https://www.hackerrank.com/challenges/caesar-cipher-1/problem

// My Solution:

function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const rotate = alphabet.map((letter, index) => alphabet[(index + k) % 26]);
    const sArray = s.split('');
    let answer = [];

    function findMapping(letter) {
        if (letter === letter.toUpperCase()) {
            return rotate[alphabet.indexOf(letter.toLowerCase())].toUpperCase();
        }
        else {
            return rotate[alphabet.indexOf(letter)]
        }
    }
    for (var i = 0; i < sArray.length; i++) {
        if (!alphabet.includes(sArray[i].toLowerCase())) {
            answer.push(sArray[i]);
        }
        else {
            answer.push(findMapping(sArray[i]));
        }
    }

    return answer.join('');
}