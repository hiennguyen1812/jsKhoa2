const Findsort = (arr) => {
    const temp = arr.sort((a,b)=>b-a)
    return temp[1];
}
console.log(Findsort([2,3,5,7,6]))