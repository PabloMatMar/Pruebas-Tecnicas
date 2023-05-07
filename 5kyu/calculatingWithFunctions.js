zero = callback => callback ? callback(0) : 0;
one = callback => callback ? callback(1) : 1;
two = callback => callback ? callback(2) : 2;
three = callback => callback ? callback(3) : 3;
four = callback => callback ? callback(4) : 4;
five = callback => callback ? callback(5) : 5;
six = callback => callback ? callback(6) : 6;
seven = callback => callback ? callback(7) : 7;
eight = callback => callback ? callback(8) : 8;
nine = callback => callback ? callback(9) : 9;

plus = b => a => a + b;
minus = b => a => a - b;
times = b => a => a * b;
dividedBy = b => a => Math.floor(a / b);