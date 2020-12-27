const sum = function(a, b) {
    return parseInt(a) + parseInt(b)
}
const subtract = function(a, b) {
    return parseInt(a) - parseInt(b)
}
// 设置哪些方法可以被其他 js 调用
module.exports = {
    sum,
    subtract
}