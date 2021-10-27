// 引入添加前缀插件
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [ autoprefixer ]
};

// 或者
// module.exports = {
//     plugins: [
//         require('autoprefixer')({
//             // 应该使用Autoprefixer [删除过时的]前缀,默认值为true。
//             remove: false 
//         })
//     ]
// };