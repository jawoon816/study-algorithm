function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] !== s[n - i - 1]) answer = "NO";
  }
  return answer;
}

let str = "gdooG";
console.log(solution(str));
