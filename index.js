// 1.세 수 중 최솟값
// function solution(a, b, c){
//   if(a<b && a<c) {
//     return a;
//   } else if (b<a && b<c){
//     return b;
//   } else if (c<a && c<b) {
//     return c;
//   }
// } 
// function solution(a, b, c){
//   let answer;
//   if(a<b) answer =a;
//   else answer=b;
//   if(c<answer) answer = c;
//   return answer;
// } 

// console.log(solution(6, 5, 11));

// 2.삼각형 판별하기
// 가장 긴 한 변의 길이 < 나머지 변의 길이의 합
// function solution(a, b, c){
//   if(a>b && a>c && a<c+b) {
//     return 'YES'
//   } else if (b>a && b>c && b<a+c) {
//     return 'YES'
//   } else if (c>a && c>b && c<a+b) {
//     return  'YES'
//   } else {
//     return "NO"
//   }
// }

// function solution(a, b, c){
//   let answer="YES", max;
//   let sum = a+b+c;
//   if(a>b) max = a;
//   else max = b;
//   if(c>max) max = c;
//   if(sum-max<=max) answer = 'NO';
//   return answer;
// }

// console.log(solution(13, 33, 17));

// 3.연필개수
// function solution(n){
//   let answer;
//   answer=Math.ceil(n/12);
//   return answer;
// }

// console.log(solution(178));

//4.1부터 N까지 합 출력하기
// function solution(n){
//   let answer=0;
//   for(let i=1; i<=n; i++){
//       answer=answer+i;
//   }
  
//   return answer;
// }

// console.log(solution(10));

// 5.최솟값 구하기
// function solution(arr){  
//   let answer, min = Number.MAX_SAFE_INTEGER;//최솟값을 가장 큰 수로 설정하기
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }

// let arr=[5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));


//6. 홀수
// function solution(arr) {
//   //1.홀수 =>2로 나눈 나머지가 0이 아닌 것
//   //2.홀수 합 =>reduce?
//   //3.최소값 =>for문?
//   let answer =[];
//   let a = arr.filter((i)=>i%2 !==0);
//   let b = a.reduce((x,y)=>x+y);
//   let min = a[0];
//   for(let i = 0; i<a.length; i++) {
//     if(a[i]<min) min = a[i];
//   }
//   answer.push(b)
//   answer.push(min)
//   return answer;
// }

// function solution(arr) {
//   let answer = [];
//   let sum = 0, min = Number.MAX_SAFE_INTEGER;
//   for(let x of arr) {
//     if(x%2 === 1) {
//       sum+=x;
//       if(x<min) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }

// let arr = [12,77,38,41,53,92,85]
// console.log(solution(arr));

//7. 10부제
// function solution(day, arr){
//   let answer=0;
//   let a = [];
//   for(let x of arr){
//    let b = (x-day)%10 === 0
//   if(b===true){
//     a.push(b)
//     answer = a.length;
//   }
//   }
//   return answer;
// }

// function solution(day, arr){
//   let answer=0;
//   for(let x of arr) {
//     if(x%10 === day) answer++
//   }
//   return answer;
// }

// arr=[12,20,54,30,87,91,30];
// console.log(solution(0, arr));

// 8. 일곱난쟁이
// function solution(arr){
//   let answer=arr;
//   let b = 0;
//   let c = 0;
//   let a = arr.reduce((x,y)=>x+y,0)
//   for(let i = 0; i < arr.length; i++){
//     for(let j =1; j < arr.length; j++){
//      if(a - (arr[i]+arr[j]) === 100) {
//       b = arr[i];
//       c = arr[j];
//      }
//     }
//   }
//   answer = arr.filter((item)=>item !== b && item !== c)
//   return answer;
// }

// function solution(arr){
//   let answer=arr;
//   let a = arr.reduce((x,y)=>x+y,0)
//   for(let i = 0; i < arr.length; i++){
//     for(let j =1; j < arr.length; j++){
//      if(a - (arr[i]+arr[j]) === 100) {
//       arr.splice(j,1);
//       arr.splice(i,1);
//      }
//     }
//   }
//   return answer;
// }

// let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));

// 9.A를 #으로
// function solution(s){
//   let answer="";
//   answer=s.replaceAll("A","#")
//   return answer;
// }
// function solution(s){
  //   let answer="";
  //   answer=s.replace(/A/g, '#');
  //   return answer;
  // }

// function solution(s){
//   let answer="";
//   for(let x of s) {
//     if(x === "A") answer+='#'
//     else answer+=x;
//   }
//   return answer;
// }

// let str="BANANA";
// console.log(solution(str));

// 10.문자찾기
// function solution(s, t){
//   let answer = 0;
//   for(let x of s){
//     if(x===t){
//       answer++
//     }
//   }
//   return answer;
// }

function solution(s, t){
  let answer = s.split(t).length-1
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'G'));

