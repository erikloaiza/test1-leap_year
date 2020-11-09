module.exports.isLeap = function (year) {
  if (year < 1900 || year > Math.pow(10, 5)) {
    throw `Error: ${year} is out of bounds`;
  }
  const module_by_4 = year % 4;
  const is_evenly_divided_by_4 = !module_by_4; //if module == 0 then is true, other case is false

  if (is_evenly_divided_by_4) {
    const module_by_100 = year % 100;
    const is_evenly_divided_by_100 = !module_by_100; //if module == 0 then is true, other case is false

    if (is_evenly_divided_by_100) {
      const module_by_400 = year % 400;
      const is_evenly_divided_by_400 = !module_by_400; //if module == 0 then is true, other case is false
      if (is_evenly_divided_by_400) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * A more optimized one
 * @param {year} year
 */
module.exports.isLeap_v2 = function (year) {
  if (year < 1900 || year > Math.pow(10, 5)) {
    throw `Error: ${year} is out of bounds`;
  }
  return !(year % 4) && !(!(year % 100) && !!(year % 400));
};

require("make-runnable/custom")({
  printOutputFrame: false,
});
