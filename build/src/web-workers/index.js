function recursiveNumbers(n) {
  postMessage(n);
  setTimeout(recursiveNumbers.bind(null, n + 1), 300);
}

recursiveNumbers(1);