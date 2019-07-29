var numJewelsInStones = function(J, S) {
  let SArray = S.split("");
  let count = 0;
  SArray.forEach(element => {
    if (J.includes(element)) {
      count++;
    }
  });
  return count;
};

console.log(numJewelsInStones("aAb", "aAA"));
