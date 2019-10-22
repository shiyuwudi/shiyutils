/**
 * 数据量很大时的展示
 * @param value
 * @param minUnit 最小单位 k / w，默认k
 * @return {string|number}
 */
function formatterNumber(value, minUnit) {
  let largeNumber = '';
  minUnit = minUnit || 'k';
  const showValue = parseInt(value, 10);
  if (minUnit === 'k') {
    if (showValue < 1000) {
      largeNumber = showValue;
    } else if (showValue >= 1000 && showValue < 1000000) {
      if (showValue % 1000) {
        largeNumber = `${(showValue / 1000).toFixed(1)}K`;
      } else {
        largeNumber = `${showValue / 1000}K`;
      }
    } else if (showValue >= 1000000 && showValue < 1000000000) {
      if (showValue % 1000000) {
        largeNumber = `${(showValue / 1000000).toFixed(1)}M`;
      } else {
        largeNumber = `${showValue / 1000000}M`;
      }
    } else {
      largeNumber = `${(showValue / 1000000000).toFixed(1)}G`;
    }
    return largeNumber;
  } else if (minUnit === 'w') {
    if (showValue < 10000) {
      largeNumber = showValue;
    } else if (showValue >= 10000 && showValue < 1000000) {
      if (showValue % 10000) {
        largeNumber = `${(showValue / 10000).toFixed(1)}W`;
      } else {
        largeNumber = `${showValue / 10000}W`;
      }
    } else if (showValue >= 1000000 && showValue < 1000000000) {
      if (showValue % 1000000) {
        largeNumber = `${(showValue / 1000000).toFixed(1)}M`;
      } else {
        largeNumber = `${showValue / 1000000}M`;
      }
    } else {
      largeNumber = `${(showValue / 1000000000).toFixed(1)}G`;
    }
    return largeNumber;
  }
}

/**
 * 设置层级较深的js对象的值
 * @param obj 对象
 * @param value 值
 * @param path key的路径，数组
 */
function setToValue(obj, value, path) {
  var i;
  const pathArr = path.split('.');
  for (i = 0; i < pathArr.length - 1; i++)
    obj = obj[pathArr[i]];

  obj[pathArr[i]] = value;
}


module.exports = {
  formatterNumber,
  setToValue,
};
