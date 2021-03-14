const {
  T,
  identity,
  compose,
  cond,
  fromPairs,
  toPairsIn,
  map,
  o,
  is,
  allPass,
  isNil,
  complement,
  filter,
  last,
  head,
  juxt,
  forEachObjIndexed,
  mapObjIndexed,
  isEmpty
} = require('ramda');

exports.isFunction = is(Function);
exports.isString = is(String);
exports.isObject = is(Object);
exports.isInt = is(Number);
exports.isEmpty = isEmpty;
const recursiveRemove = cond([
  [
    allPass([exports.isObject, complement(isNil), complement(exports.isFunction)]),
    value => exports.removeObjectUndefined(value)
  ],
  [T, identity]
]);

exports.removeObjectUndefined = compose(
  fromPairs,
  filter(o(value => value !== undefined, last)),
  map(juxt([head, o(recursiveRemove, last)])),
  toPairsIn
);
exports.iterateObject = forEachObjIndexed;
exports.mapObject = mapObjIndexed;

/*
 * Deep copy of source object into target object.
 * It does not overwrite properties.
 */
exports.assignObject = (target, source) => {
  const spec = target;
  if (spec && exports.isObject(spec) && source && exports.isObject(source)) {
    Object.keys(source).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(spec, key) || spec[key] === undefined) {
        spec[key] = source[key];
      } else exports.assignObject(spec[key], source[key]);
    });
  }
  return spec;
};

exports.countDaysLeft = date => {
  const one_day = 1000 * 60 * 60 * 24;
  const present_date = new Date();
  const days = Math.round(date.getTime() - present_date.getTime()) / one_day;
  return days.toFixed(0);
};
