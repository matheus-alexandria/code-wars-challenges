function arrayDiff(a, b) {
  const result = [];
  var pres = false;
  
  for(var i = 0; i < a.length; i++) {
    pres = false;
    
    for(var j = 0; j < b.length; j++) {
      if(a[i] === b[j]) {
        pres = true;
      }
    }
    
    if(!pres) {
      result.push(a[i]);
    }
  }
  
  return result;
}

// Ideia pegue das soluções dentro do Kata, filtra todos os elementos que não existem em B, mt inteligente
function arrayDiff2(a,b) {
  return a.filter((e) => !b.includes(e));
}

// Ideia de solução também das soluções do site, mais rústicas que outras que usaram da mesma ideia mas exemplifica melhor
function arrayDiff3(a,b) {
  // O que está acontecendo resumidamente na segunda aplicação desse método
  // var arr = new Array();
    
  // for(var i = 0; i < a.length; i++){
  //     if(b.indexOf(a[i]) < 0){
  //         arr.push(a[i]);
  //     }
  // }

  // return arr;

  return a.filter((e) => { return b.indexOf(e) === -1 })
}

console.log(arrayDiff2([3,4], [4]));
console.log(arrayDiff3([3,4], [4]));