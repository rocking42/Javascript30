// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventRes = inventors.filter((inventor) =>  inventor.year >= 1500 && inventor.year <= 1599);
console.table(inventRes);
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullName = inventors.map((inventor) => {
  return `${inventor.first + " " + inventor.last}`;
});
console.log(fullName);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthOldToYoung = inventors.sort((prev, next) => prev.year - next.year);
console.table(birthOldToYoung);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const allAge = inventors.reduce((a,b) => {
  b = b.passed - b.year;
  return a + b;
}, 0);
console.log(allAge);
// 5. Sort the inventors by years lived
const oldToYoung = inventors.sort((a, b) => {
  // calculate the age
  const old = b.passed - b.year;
  const young = a.passed - b.year;
  // add the values to the object this needs to be done to both to add it to all values
  a.age = old;
  b.age = old;
  // return the sorted values based on the added row
  return a.age - b.age;
});
console.table(oldToYoung);
// // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// // these are performed on the wiki page
// // get the div on the page
// const div2 = document.querySelector(".mw-category")
// // get the links from the div
// const links = div2.querySelectorAll("a");
// // create an array from the nodelist
// const linkArr2 = Array.from(links);
// // map to get the text content
// linkText = linkArr2.map(link => link.textContent);
// // find all that contain de
// linkText.filter((text) => text.includes("de"));
// // written in one line
// const res = Array.from(document.querySelectorAll(".mw-category a")).map(link => link.textContent)
//                                                                    .filter((text) => text.includes("de"));
// 7. sort Exercise
// Sort the people alphabetically by last name
const peepsLast = people.sort((prev, next) => {
  const before = prev.split(", ");
  const after = next.split(", ");
  // return 1 or -1 depending on the place in the alphabet
  // sort works by placing the item base on either 1 or -1
  return before[1] > after[1] ? 1 : -1;
});
console.log(peepsLast);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const count = data.reduce((allVehicles, vehicle) => {
  // check if the object contains vehicle if so inrement it by one
  if (vehicle in allVehicles) {
    allVehicles[vehicle] += 1;
  // If not present add it to the object with a value of one
  } else {
    allVehicles[vehicle] = 1;
  }
  return allVehicles;
  // allVehicles starts as an empty object to pass in the values
}, {});
console.log(count);
