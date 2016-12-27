// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
let comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
const now = new Date();
const currentYear = now.getFullYear();
// Array.prototype.some() // is at least one person 19 or older?
const oneOver19 = people.some((person) => person.year >= (currentYear - 19));
// Array.prototype.every() // is everyone 19 or older?
const allOver19 = people.every((person) => person.year >= (currentYear - 19));
console.log(oneOver19, allOver19);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const superComment = comments.find(comment => comment.id === 823423);
console.log(superComment);
// Array.prototype.findIndex()
// Find the comment with this ID
const superIndex = comments.findIndex(comment => comment.id === 823423);
// delete the comment with the ID of 823423
comments = [...comments.slice(0, superIndex - 1), ...comments.slice(superIndex + 1)];
console.table(comments);
