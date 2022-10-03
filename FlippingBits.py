# Problem: https://www.hackerrank.com/challenges/flipping-bits/problem
# My Solution:

def flippingBits(n):
    binary = '{:032b}'.format(n)
    flipped_list = ['1' if bit=='0' else '0' for bit in binary]
    flipped_string = ''.join(flipped_list)
    return int(flipped_string, 2)