module.exports = {
    // 参考地址stylelint Rules：https://cloud.tencent.com/developer/section/1489630
    processors: [],
    plugins: [],
    extends: ['stylelint-prettier/recommended'],
    rules: {
        // 取消某些规则如下:
        'unit-case': null, // 指定小写或大写的单位
        'rule-empty-line-before': null, // 要求或禁止规则前面有空行。
        'comment-empty-line-before': null, // 要求或禁止在注释前有空行。
        'declaration-block-trailing-semicolon': null, // 要求或禁止在声明块中以分号结尾。
        'selector-type-no-unknown': null // 禁止未知类型选择器。
    }
};