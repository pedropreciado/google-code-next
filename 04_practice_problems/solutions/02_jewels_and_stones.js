/*
 * You're given strings "jewels" representing the types of stones that are jewels, and "stones"
 * representing the stones you have.
 * 
 * Each character in "stones" is a type of stone you have.
 * You want to know how many of the stones you have are also jewels.
 * The letters in J are guaranteed distinct, and all characters in J and S are letters.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 *
 * Ex: numJewelsInStones("aA", "aAAbbbb") => 3 , since "aA" appears in "aAAbbbb" 3 times.
 */

var numJewelsInStones = function(jewels, stones) {
  let jewelCount = 0;

  for (let i = 0; i < stones.length; i++) {
    const stone = stones.slice(i, i + jewels.length);

    if (stone === jewels) {
      jewelCount++;
    }
  }

  return jewelCount;
};

// DO NOT MODIFY UNDER THIS LINE
module.exports = numJewelsInStones;