// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
      'html',
      'vue'
    ],
    // add your custom rules here
    rules: {
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'eqeqeq': 0, // 始终使用 === 不使用 ==。
      // allow paren-less arrow functions
      'arrow-parens': 0,
      'no-unused-vars': [0],
      // 关闭语句强制分号结尾
      'semi': [2, 'never'],
      'quotes': [2], // 字符串使用单引号，除非是为了避免转义。
      'no-multiple-empty-lines': [0, {'max': 100}], //不要有多个连续空行,空行最多不能超过100行
      //关闭禁止混用tab和空格
      'no-mixed-spaces-and-tabs': [0],
      // 强制在块之前使用一致的空格
      'space-before-blocks': [2, 'always'],
      // 强制在 function的左括号之前使用一致的空格
      //'space-before-function-paren': 0,
      // 强制在圆括号内使用一致的空格
      'space-in-parens': [2, 'never'],
      // 要求操作符周围有空格
      'space-infix-ops': 2,
      // 强制在一元操作符前后使用一致的空格
      'space-unary-ops': [2, {'words': true, 'nonwords': false}],
      // 强制在注释中 // 或 /* 使用一致的空格
      'spaced-comment': [2, 'always', {'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']}],
      // 逗号后面有一个空格
      'comma-spacing': [2], 
      // 驼峰命名
      'camelcase': 0,
      // 缩进使用两个空格。
      "indent": [2], 
      // 扩展native对象
      'no-extend-native': 0, 
      //禁止多余的冒号
      "no-extra-semi": 2,
      'keyword-spacing':["error", { "after": true }], //关键字后面要有一个空格。
      'brace-style': [2], //else 与它的大括号同行。
      'curly': [2], //if 语句如果包含多个语句则使用大括号。
      'block-spacing': ["error", "never"], //单行语句块的内侧要有空格。
      'func-call-spacing':["error", "never"], //函数名字和调用括号之间没有空格。
      'no-constant-condition':0, //在条件句中不要使用常量，循环语句除外。
    }
  }
  