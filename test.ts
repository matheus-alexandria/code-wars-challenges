// let say = function(name: string) {
//   return { say: `Welcome ${name}` };
// }

// console.log(say('Turing'))

const a = [1, 2]
let c = 1;
let b = { a: ++c }
a[2] = 10
a.splice(1,1)
console.log(a)

setTimeout(() => {
  console.log("a")
}, 0)
console.log("b")

interface sa {
  mul(a: number): any;
}
class asd implements sa {
  mul(a: number) {
    return a;
  }
  a() {

  }
}

let sda = {y: 1}
Object.freeze(sda);
sda.y = 2
console.log(sda)

interface Point3 extends asd {
  
}