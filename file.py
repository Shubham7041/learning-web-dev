arr = [[7,1,3],[2,8,7],[1,9,5]]
result_arr = []

for i in range(0, len(arr)):
    total_sum = 0
    for j in range(0, len(arr[i])):
        total_sum += arr[i][j]
    result_arr.append(total_sum)

print(result_arr)