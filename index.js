
var offset = require('offset');

function viewport() {
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
}

function get(el) {
  var o = offset(el);
  var h = el.clientHeight;
  var v = viewport();
  var delta = window.scrollY - o.top;

  if (h - delta < v) {
    return 1;
  }

  return (v * 0.68  + delta) / h;
}

function set(el, val) {
  var o = offset(el);
  var h = el.clientHeight;
  var v = viewport();
  var y = val * h - v * 0.68 + o.top;
  return window.scrollTo(0, y);
}

module.exports = function(el, val) {
  if (val !== undefined && val !== null) {
    return set(el, val);
  }
  return get(el);
};
