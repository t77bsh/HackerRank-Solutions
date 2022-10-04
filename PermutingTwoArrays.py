# Problem: https://www.hackerrank.com/challenges/two-arrays/problem

# My solution:

def twoArrays(k, A, B):
    A.sort()
    B.sort(reverse=True)
    return 'YES' if all(a+b >= k for a, b in zip(A, B)) else 'NO'
