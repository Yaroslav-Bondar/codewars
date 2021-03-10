multiplicationTable = function(size) {
  let res = [], tmp;
  for (let i = 1; i <= size; i++) {
    res.push([]);
    tmp = 0;
    for (let g = 0; g < size; g++) {
      tmp += i;
      res[i - 1].push(tmp);
    }
  }
  return res;
}
