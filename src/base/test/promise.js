// new Promise 时会立即被调用


// let p = new Promise((resolve, reject) => {
//   console.log("start")
//   resolve("123")
// })
// p.then((res) => {
//   console.log("success", res);
// }, (reason => {
//
// })


function Promise(executor) {
  let self = this
  self.value=undefined
  self.reason=undefined
  self.status='pending'
  self.onResolevedCallbacks = []; // 存放所有成功的回调
  self.onRejectedCallbacks = []; // 存放所有失败的回调

  function resolve(value){
    if(self.status == 'pending'){
      self.value = value
      self.status == 'resolved'
      self.onResolevedCallbacks.forEach(fn => fn())
    }
  }

  function reject(reason){
    if(self.status == 'pending'){
      self.reason = reason
      self.status == 'rejected'
      self.onRejectedCallbacks.forEach(fn => fn())
    }
  }

  executor(resolve, reject)
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this
  let p2 = new Promise((resolve, reject) => {
    if(self.status=='resolved'){
      let x = onFulfilled(self.value)
    }
    if(self.status=='rejected'){
      let x = onFulfilled(self.reason)
    }
    if(self.status=='pending'){
      self.onResolevedCallbacks.push(function () {
        onFulfilled(self.value)
      })
      self.onRejectedCallbacks.push(function () {
        onRejected(self.reason)
      })
    }
  })
  return p2
}


p = new Promise((resolve,reject) => {
  reject(232)
  resolve(123)

})
p.then(data => {
  console.log(data);
  throw err
}).then(data => {
  console.log(data);
}).catch(e => {
  console.log("we1"+e);
})


































//
//
// function Promise(executor) {
//   const self = this
//
//   self.status = 'pending'
//   self.value = ''
//   self.reason = ''
//
//   function resolve(value){
//     if(self.status === 'pending'){
//       self.status = 'resolve'
//       self.value = value
//     }
//
//   }
//   executor(resolve, reject)
// }
//
// Promise.prototype.then = function (onFulfilled, onRejected) {
//   if(self.status === 'resolve'){
//     onFulfilled(self.value)
//   }
//   if(self.status === 'pending'){
//
//   }
// }
