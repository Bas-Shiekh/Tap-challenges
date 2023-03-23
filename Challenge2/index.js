const solution = (numbers) => {
  for (let i = 0; i <= numbers.length; i++) {
    if (!numbers.includes(i)) {
      return i
    }
  }
}

console.log(solution([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(solution([3, 0, 1]))
console.log(solution([0, 1]))
