# Problem: https://www.hackerrank.com/challenges/dynamic-array/problem

def dynamicArray(n, queries):
    arr = [[] for i in range(n)]
    lastAnswer = 0
    answers = []
    for query in queries:
        x = query[1]
        y = query[2]
        idx = (x ^ lastAnswer) % n
        if query[0] == 2:
            lastAnswer = arr[idx][y % len(arr[idx])]
            answers.append(lastAnswer)
        else:
            arr[idx].append(y)
    return answers
