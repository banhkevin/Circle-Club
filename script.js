var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "prisoner", "child", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["love", "feel", "kiss", "grope", "punch", "slap", "tickle", "tongue kiss", "butt kiss", "lick"];
adjectives = ["beautiful", "uggo", "professional", "lovely", "dumb", "rough", "soft", "hot", "throbbing", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
firstName = ["Mad", "Service", "Shadow", "Pirate", "Hot", "Frigid", "Growling", "Bronze", "Razor", "Cunning"];
lastName = ["Gator", "Rhino", "Crocodile", "Spider", "Anaconda", "Alligator", "Wolf", "Slug", "Armadillo", "Frog"];


function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);

  var content = "There are so many " + adjectives[rand1] + " people in this " + adjectives[rand2] + " club! They all showed me how to " + verbs[rand4] + " and " + verbs[rand2] + " circles " + adverbs[rand3] + ". I can't wait to " + verbs[rand2] + " the " + nouns[rand1] + " circle.";
  var fullName = " - " + firstName[rand1] + " " + lastName[rand4];
 
  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;" + fullName;
};


function memberName1() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var fullName =  firstName[rand1] + " " + lastName[rand2];

    document.getElementById('name1').innerHTML = fullName;
};

function memberName2() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var fullName =  firstName[rand1] + " " + lastName[rand2];

  document.getElementById('name2').innerHTML = fullName;
};

function memberName3() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var fullName =  firstName[rand1] + " " + lastName[rand2];

  document.getElementById('name3').innerHTML = fullName;
};

function memberName4() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var fullName =  firstName[rand1] + " " + lastName[rand2];

  document.getElementById('name4').innerHTML = fullName;
};

function quote1() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
  
    var content = "I'm always excited coming to the club because I " + verbs[rand1] + " the " + nouns[rand2] + " at this club almost daily!";
   
    document.getElementById('quote1').innerHTML = "&quot;" + content + "&quot;";
  };

function quote2() {
var rand1 = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);

var content = "Pwease sir, let me get on my knees and then you can " + verbs[rand1] + " me " + adverbs[rand2] + " :3";

document.getElementById('quote2').innerHTML = "&quot;" + content + "&quot;";
};

function quote3() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    
    var content = "Please find me and " + verbs[rand1] + " me " + adverbs[rand2] + " in front of the Cirlce Queen.";
    
    document.getElementById('quote3').innerHTML = "&quot;" + content + "&quot;";
    };

function quote4() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var fullName =  firstName[rand1] + " " + lastName[rand2];

    
    var content = "If you are here for a good time, talk to " + fullName + ", they're going to " + verbs[rand2] + " you.";
    
    document.getElementById('quote4').innerHTML = "&quot;" + content + "&quot;";
    };