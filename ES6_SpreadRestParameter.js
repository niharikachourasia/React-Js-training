/*  let numbers=[1,2,3,4];
newNumbers=[...numbers,6];
console.log(newNumbers) 
 */

/* let numbers=[23,45,65,2,10,54];
console.log(Math.max(...numbers))
//console.log(Math.max(23,34,56,12))
//... is providing an array and from that array it will find out the maximum array */

//rest parameter:
function sumArray(...arrsum){
    var result=0;
    for(let i=0;i<arrsum.length;i++){
        result+=arrsum[i]
    }
    return result

}
console.log(sumArray(12,34,45))