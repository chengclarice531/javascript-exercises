function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0) // Filter even numbers
    .map((num) => num * 3) // Triple each even number
    .reduce((sum, num) => sum + num, 0); // Sum the tripled values
}
