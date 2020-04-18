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

var jewelsAndStones = function (jewels, stones) {

};

// DO NOT MODIFY UNDER THIS LINE

console.log("-----TESTS FOR jewelsAndStones()-----");
console.log("it should return correct number of jewels");
console.log("Test 1 Passed?: ", jewelsAndStones('aA', 'aAaAbbaAbb') === 3);
console.log("Test 2 Passed?: ", jewelsAndStones('aAb', 'AaAbaabAbbb') === 1);
console.log("it should be case sensitive");
console.log("Test 3 Passed?: ", jewelsAndStones('jewels', 'JEWEL') === 0);

module.exports = jewelsAndStones;