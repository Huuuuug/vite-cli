module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
  // jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
  printWidth: 100, // 一行多长，超过的会换行
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid(能省略括号的时候就省略)| always(总是有括号)
}
