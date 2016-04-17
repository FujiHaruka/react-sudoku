var jjj = 'kkk'
var obj = {
  jjj,
  1: 2,
  hoge: function () {
    console.log('hoge')
  }
}

var obj2 = Object.assign(obj, {
  fuga () {
    return 10
  },
  fuge() {
    return this.fuga() * 2
  }
})

console.log(obj2.fuga())
console.log(obj2.fuge())
