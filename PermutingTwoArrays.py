# Problem: https://www.hackerrank.com/challenges/two-arrays/problem

# My solution:

def twoArrays(k, A, B):
    C = [k-b for b in B]
    ans = [1 for c in C if sum(a >= c for a in A) >= C.count(c)]
    if sum(ans) == len(B):
        return 'YES'
    return 'NO'
