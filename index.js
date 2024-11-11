function averageOfNumbers(arr) {
    let numbers = arr.filter(item => typeof item === 'number');
    
    if (numbers.length === 0) {
      return 0;
    }
    
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    
    let average = sum / numbers.length;
    
    return average;
  }
  let arr = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5];
  console.log(averageOfNumbers(arr));
  