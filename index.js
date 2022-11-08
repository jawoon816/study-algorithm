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
function solution(n){
  let answer;
  answer=Math.ceil(n/12);
  return answer;
}

console.log(solution(178));