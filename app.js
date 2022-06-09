
const fruit = ['banana', 'orange', 'apple', 'kiwi']
const fruit2 = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']

console.log("_-_-_-_-_-_-_preliminary_-_-_-_-_-_-_")
for (i = 0; i <= 9; i++) {
    console.log(i)
    
}

for (k = 0; k < fruit.length; k++){
    console.log(fruit[k])
}



for (j = 9; j >= 0; j--) {
    console.log(j)
}

console.log("_-_-_-_-_-_-_Bronze_-_-_-_-_-_-_")

const nums = [];

for (m = 0; m <= 9; m++){
nums.push(m);
console.log(nums);
}

for (u = 0;u <= 100; u++) {
    console.log(u)
}

function everyOther(array){
    var tempFruitArray = []
    for (var l = 1; l < array.length; l +=2){
        tempFruitArray.push(array[l])
    }
    return tempFruitArray.join(", ")
}
console.log(everyOther(fruit2))
console.log("_-_-_-_-_-_-_Silver_-_-_-_-_-_-_")

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  console.log("-----names-----")
  for (n = 0; n < peopleArray.length; n++) {
    console.log(peopleArray[n].name)
  }
console.log("-----occupations-----")
  function sortingFunc (peopleArray) {
    const namesArr = []
    const occupationsArr = []
    for (h = 0; h < peopleArray.length;h++) {
        namesArr.push(peopleArray[h].name)
        occupationsArr.push(peopleArray[h].occupation)
    }
    return namesArr.join(", "), occupationsArr.join(", ")
  }
  console.log(sortingFunc(peopleArray))
  console.log("---every other arr---")

  function sortingFuncTwo (peopleArray) {
      const namesArrTwo = []
      const occupationsArrTwo = []

      for (o = 0; o < peopleArray.length; o++) {
      if (o % 2 === 0){
          namesArrTwo.push(peopleArray[o].name);
          console.log(namesArrTwo);
        }
    }
    for(p = 0; p < peopleArray.length; p++) {
            if (p % 2 === 0) {
            occupationsArrTwo.push(peopleArray[p].occupation);
            console.log(occupationsArrTwo);
                }
    }
    return namesArrTwo.join(", "), occupationsArrTwo.join(", ")
  }
console.log(sortingFuncTwo(peopleArray))
console.log("_-_-_-_-_-_-_Gold_-_-_-_-_-_-_")



