const { isLeap, isLeap_v2 } = require("./index");

console.log("testing Function IsLeap");

const test1 = isLeap(2000) == true;
console.log("test1", test1 ? "passed" : "failed");

const test2 = isLeap(2400) == true;
console.log("test2", test2 ? "passed" : "failed");

let test3 = false;
try {
  typeof isLeap(1800);
} catch (e) {
  test3 = true;
}
console.log("test3", test3 ? "passed" : "failed");

const test4 = isLeap(1900) == false;
console.log("test4", test4 ? "passed" : "failed");

const test5 = isLeap(2100) == false;
console.log("test5", test5 ? "passed" : "failed");

const test6 = isLeap(2200) == false;
console.log("test6", test6 ? "passed" : "failed");

const test7 = isLeap(2300) == false;
console.log("test7", test7 ? "passed" : "failed");

const test8 = isLeap(2500) == false;
console.log("test8", test8 ? "passed" : "failed");

let test9 = false;
try {
  typeof isLeap(1899);
} catch (e) {
  test9 = true;
}
console.log("test9", test9 ? "passed" : "failed");

let test10 = false;
try {
  typeof isLeap(Math.pow(10, 6));
} catch (e) {
  test10 = true;
}
console.log("test10", test10 ? "passed" : "failed");

//v2

console.log("testing Function isLeap_v2");

const testv2_1 = isLeap_v2(2000) == true;
console.log("testv2_1", testv2_1 ? "passed" : "failed");

const testv2_2 = isLeap_v2(2400) == true;
console.log("testv2_2", testv2_2 ? "passed" : "failed");

let testv2_3 = false;
try {
  typeof isLeap_v2(1800);
} catch (e) {
  testv2_3 = true;
}
console.log("testv2_3", testv2_3 ? "passed" : "failed");

const testv2_4 = isLeap_v2(1900) == false;
console.log("testv2_4", testv2_4 ? "passed" : "failed");

const testv2_5 = isLeap_v2(2100) == false;
console.log("testv2_5", testv2_5 ? "passed" : "failed");

const testv2_6 = isLeap_v2(2200) == false;
console.log("testv2_6", testv2_6 ? "passed" : "failed");

const testv2_7 = isLeap_v2(2300) == false;
console.log("testv2_7", testv2_7 ? "passed" : "failed");

const testv2_8 = isLeap_v2(2500) == false;
console.log("testv2_8", testv2_8 ? "passed" : "failed");

let testv2_9 = false;
try {
  typeof isLeap_v2(1899);
} catch (e) {
  testv2_9 = true;
}
console.log("testv2_9", testv2_9 ? "passed" : "failed");

let testv2_10 = false;
try {
  typeof isLeap_v2(Math.pow(10, 6));
} catch (e) {
  testv2_10 = true;
}
console.log("testv2_10", testv2_10 ? "passed" : "failed");
