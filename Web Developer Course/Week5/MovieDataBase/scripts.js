const movies = [
  {
    title: "title1",
    hasSeen: true,
    stars: 1
  },
  {
    title: "title2",
    hasSeen: true,
    stars: 2
  },
  {
    title: "title3",
    hasSeen: true,
    stars: 3
  },
  {
    title: "title4",
    hasSeen: false,
    stars: 4
  },
  {
    title: "title5",
    hasSeen: false,
    stars: 5
  }
];

movies.forEach((titles) => {
  if(titles.hasSeen === true){
    console.log("You have seen: " + titles.title + ", you rated it: " + titles.stars + " stars")
   }
   else{
     console.log("You have not seen: " + titles.title)
   }
  //console.log(titles)
 });
