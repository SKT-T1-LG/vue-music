var obj = {
  toString:function(){
    console.log('toString')
    return Object.prototype.toString.call(this)
  },
  valueOf:function(){
    console.log('valueOf')
    return Object.prototype.valueOf.call(this)
  }
}
 console.log(obj);
 console.log(+obj);
// console.log(obj=={});
// console.log(obj==={})
// console.log(obj=='test')
// console.log(obj==='test')
