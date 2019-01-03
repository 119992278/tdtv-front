// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': [1, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
    // 关闭语句强制分号结尾
    'semi': [2, 'never'],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [0],
    //空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 100}],
    //关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    // 强制在块之前使用一致的空格
    'space-before-blocks': [2, 'always'],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [0],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [2, 'always', {'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']}],
    // 控制逗号前后的空格
    'comma-spacing': [0],
    // 驼峰命名
    'camelcase': 0,
    // 全等
    'eqeqeq': 0,
    // 缩进
    "indent": 2,
    // 扩展native对象
    'no-extend-native': 0,
    'no-unreachable':0,//禁止在return、throw、continue 和 break语句之后出现不可达代码
    "no-extra-semi": 2//禁止多余的冒号
  }
}
