# Problem: https://www.hackerrank.com/challenges/pangrams/problem
# My solution:

def pangrams(s):
    alph = 'abcdefghijklmnopqrstuvwxyz'
    return 'pangram' if all(letter in s.lower() for letter in alph) else 'not pangram'