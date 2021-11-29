function productFib(prod){
  let multiplied = 0;
  let n = 0;
  let n1 = 1;
  let sum = 0;
  while (multiplied < prod){
    sum = n1 + n;
    n = n1;
    n1 = sum;
    multiplied = n * n1
  }
  return [n, n1, (multiplied === prod)]
}

productFib(40)
productFib(5895)
productFib(193864606)