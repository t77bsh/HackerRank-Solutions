# Problem: https://www.hackerrank.com/challenges/pangrams/problem
# My solution:

def pangrams(s):
    alph = 'abcdefghijklmnopqrstuvwxyz'
    if all(letter in s.lower() for letter in alph):
        return 'pangram'
    else:
        return 'not pangram'