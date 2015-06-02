import {assign} from 'bound-native-methods';

export default [
  'propTypes',
  'defaultProps',
  'childContextTypes'
].reduce((m, name) => {
  m[name] = input =>
    target => {
      target[name] = (target[name] || {})::assign(input);
    };

  return m;
}, {});
