var postcss = require('postcss');

module.exports = postcss.plugin('<%= project_name %>', function (inOptions) {
  return function (css) {
    var options = Object.assign({
      opt1: 'default opt1 value'
    }, inOptions);
    // console.log(options);
    // Processing code will be added here
    css.walkRules(function (rule) {
      rule.walkDecls(function (decl, i) {
        var key = decl.prop;
        var value = decl.value;

        decl.value = value + 'MY_STR';
      });
    });
  }
});
