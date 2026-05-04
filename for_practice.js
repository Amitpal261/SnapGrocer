// let string = 'i am amit pal';
// let count =0;
// function Upper(string){
//     for (const key in string) {
//      if (string[key]=="i") {
//         count++
//      }
      
//     }
// }
// Upper(string);
// console.log(count);
// let obj ={}
// let arr = [1,2,4,23,3,3,3,1,1,1,3,3];
// const a = [...new Set(arr)] 
// let count = 0;
// let max = 0
// let maxValue = 0;
// function Upper(arr){
// for (let j= 0; j< a.length; j++) {
//       for (let i = 0; i < arr.length; i++) {
//          if (arr[i] == a[j]) {
//             obj[arr[i]] = ++count 
//         }
        
//     } count =0;
// }
// }
// Upper(arr);

// for (const key in obj) {
//     if (max<obj[key]){
//       max= obj[key];
//       maxValue = key
//     }
// }
// console.log("This your most occurence value :",maxValue);

//  let arr = [1,2,3,3,3,4,3,4,4,4,4,4,4,3];
//  const [a,b,c,...d]=arr
//  console.log();
 

// let arr = ["1","2"];
// arr.map((v,i)=>(
//    console.log(parseInt(v))   
// ))
// let a =1;
// let arr = [0,10,12];
// for (let i= 0; i < arr.length; i++) {
//     a =Math.floor(Math.random()+1)*arr[i]
// }


// console.log(a);
// let obj ={}
// let arr = "Aammmmmmmmmmmiirrrr";
// const a = [...new Set(arr)]; // console.log(a);
// let count = 0;

// function Upper(arr){
// for (let j= 0; j< a.length; j++) {
//       for (let i = 0; i < arr.length; i++) {
//          if (arr[i] == a[j]) { // console.log(arr[i]," ",a[j]);            
//             obj[arr[i]] = ++count // console.log("A");
//         }
        
//     } count =0;
// }
// }

// Upper(arr);
// console.log(obj);

// let string = 'i am amit pal';
// function Upper(string){
//     let s = string.split(" ");
//    let newString = s.map((v)=>(
//       v[0].toUpperCase() + v. slice(1)))
//      console.log(newString.join(" "));
// }
// Upper(string);

// let s = "Amit"
// let newS =s.split("")
// console.log(newS);

// for (let index = 0; index < s.length; index++) {
//      let temp = s[0];
//      newS[s.length-1] = temp;
//     //   console.log(temp);
//      s[0] =s[s.length-1]
//     //   console.log(s[0]);
//      s[s.length-1] =temp;
//     //  newS[1,s[s.length-2]] = 
//     //   console.log(s[s.length-1] ); 
//       newS[0] = s[s.length-1] 
     
// }

// console.log(newS);
 


// let arr1 = [1,2,0,3,0,4,0,5];
// let newArr =[]
// let ZeroArr = []
// arr1.map((v ,i)=>{
//   if (v===0) {
//       ZeroArr.push(v)
//   }
//   else
//     newArr.push(v)
  
// })

// console.log([...newArr,...ZeroArr]);



let arr = [0,0,0,1,0,0,6,7,8,0,0,9,99,99,0,5,0,3,0,232323,987,0,0,0,0,0,0,0,0,0,5];
let j=0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    [arr[j], arr[i]] = [arr[i], arr[j]];  
    j++;
  }
}
console.log(arr);
