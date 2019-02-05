function inArray(array1, array2){
  let result = []

  for (let i = 0; i < array1.length; i++) {
    let ele = array1[i]
    for (let j = i + 1; j < array2.length; j++) {
      let ele2 = array2[j]
      if (ele1.includes(ele2)) {
        result.push(ele1)
      }
    }
  }
  return result
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2), ["live", "strong"])

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2), ["arp", "live", "strong"])

a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2), [])
