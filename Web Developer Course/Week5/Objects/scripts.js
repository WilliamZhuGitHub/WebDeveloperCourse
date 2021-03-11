const myTruck = {
  make: "Chevy",
  model: "Silverado",
  year: 2015,
  color: "silver",
  powerWindows: true,
  bluetooth: false
}

const post = {
  id: "2304092340",
  author: "jbastean",
  text: "a",
  comments: [
    {author: "user1" , text: "me too!"},
    {author: "user2" , text: "me too!"},
    {author: "user3" , text: "me too!"},
    {author: "user4" , text: "me too!"},
  ]
}

//using this inside object method is refering to owner object
const dog = {
  name: "max",
  age: 1,
  speak: function () {
    console.log("Woof woof");
  },

  sayName: function () {
    console.log("My name is " + this.name);
  },

  data: ["yes", "okay"],
  print: function () {
    this.data.forEach(comment) => {
      console.log(comment);
    });

  }



}
