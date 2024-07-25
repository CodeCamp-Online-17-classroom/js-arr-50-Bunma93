// write code here
const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];

let score = 0;

for (let num of scores) {
    score += (num.score*num.weight);
}

console.log(score);