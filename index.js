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

function solution(arr) {
  let answer = [];
  let sum = 0, min = Number.MAX_SAFE_INTEGER;
  for(let x of arr) {
    if(x%2 === 1) {
      sum+=x;
      if(x<min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

let arr = [12,77,38,41,53,92,85]
console.log(solution(arr));
