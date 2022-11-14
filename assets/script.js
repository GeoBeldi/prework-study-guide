/*var topics = "HTML, CSS, Git, JavaScript";
console.log(topics);*/
var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    // x = x+1 MEANS x++;
    console.log(topics[x]);
  }
}
function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics we learnt through Prework:");
listTopics();

console.log("Which topic should we study first?");
selectTopic();

/*var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);*/
