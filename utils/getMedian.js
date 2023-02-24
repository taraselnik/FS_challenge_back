export const getMedianf = (num) => {
  const numArr = Array.from({ length: num + 1 }, () => true);

  for (let i = 2; i * i <= num; i++) {
    if (numArr[i]) {
      for (let j = i + i; j <= num; j += i) {
        numArr[j] = false;
      }
    }
  }

  const primeNumbers = numArr.reduce(
    (result, item, index) => item ? (result.push(index), result) : result,[])

  const res = {
    currId: Date.now(),
    num,
    medianFirst: null,
    medianSecond: null
  }

  if (primeNumbers.length % 2 === 0) {
    res.medianFirst = primeNumbers[primeNumbers.length / 2 - 1];
    res.medianSecond = primeNumbers[primeNumbers.length / 2];
  } else {
    res.medianFirst = primeNumbers[primeNumbers.length / 2 - 0.5];
  }

  return res;
}
