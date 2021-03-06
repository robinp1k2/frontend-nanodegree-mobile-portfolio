"use strict";
/*
Welcome to the 60fps project! Your goal is to make Cam's Pizzeria website run
jank-free at 60 frames per second.

There are two major issues in this code that lead to sub-60fps performance. Can
you spot and fix both?


Built into the code, you'll find a few instances of the User Timing API
(window.performance), which will be console.log()ing frame rate data into the
browser console. To learn more about User Timing API, check out:
http://www.html5rocks.com/en/tutorials/webperformance/usertiming/

Creator:
Cameron Pittman, Udacity Course Developer
cameron *at* udacity *dot* com
*/

//declare globals
var items;
var numMovingPizzas = 0;
var basicLeftFactor = [];
var sliderLabel = document.getElementById("pizzaSize");
var pizzaElements;

// more globals:  help from www.html5rocks.com - Leaner, meaner, faster animations...
var latestKnownScrollY = 0;
var ticking;


// As you may have realized, this website randomly generates pizzas.
// Here are arrays of all possible pizza ingredients.
var pizzaIngredients = {};
pizzaIngredients.meats = [
    "Pepperoni",
    "Sausage",
    "Fennel Sausage",
    "Spicy Sausage",
    "Chicken",
    "BBQ Chicken",
    "Chorizo",
    "Chicken Andouille",
    "Salami",
    "Tofu",
    "Bacon",
    "Canadian Bacon",
    "Proscuitto",
    "Italian Sausage",
    "Ground Beef",
    "Anchovies",
    "Turkey",
    "Ham",
    "Venison",
    "Lamb",
    "Duck",
    "Soylent Green",
    "Carne Asada",
    "Soppressata Picante",
    "Coppa",
    "Pancetta",
    "Bresola",
    "Lox",
    "Guanciale",
    "Chili",
    "Beef Jerky",
    "Pastrami",
    "Kielbasa",
    "Scallops",
    "Filet Mignon"
];
pizzaIngredients.nonMeats = [
    "White Onions",
    "Red Onions",
    "Sauteed Onions",
    "Green Peppers",
    "Red Peppers",
    "Banana Peppers",
    "Ghost Peppers",
    "Habanero Peppers",
    "Jalapeno Peppers",
    "Stuffed Peppers",
    "Spinach",
    "Tomatoes",
    "Pineapple",
    "Pear Slices",
    "Apple Slices",
    "Mushrooms",
    "Arugula",
    "Basil",
    "Fennel",
    "Rosemary",
    "Cilantro",
    "Avocado",
    "Guacamole",
    "Salsa",
    "Swiss Chard",
    "Kale",
    "Sun Dried Tomatoes",
    "Walnuts",
    "Artichoke",
    "Asparagus",
    "Caramelized Onions",
    "Mango",
    "Garlic",
    "Olives",
    "Cauliflower",
    "Polenta",
    "Fried Egg",
    "Zucchini",
    "Hummus"
];
pizzaIngredients.cheeses = [
    "American Cheese",
    "Swiss Cheese",
    "Goat Cheese",
    "Mozzarella Cheese",
    "Parmesean Cheese",
    "Velveeta Cheese",
    "Gouda Cheese",
    "Muenster Cheese",
    "Applewood Cheese",
    "Asiago Cheese",
    "Bleu Cheese",
    "Boursin Cheese",
    "Brie Cheese",
    "Cheddar Cheese",
    "Chevre Cheese",
    "Havarti Cheese",
    "Jack Cheese",
    "Pepper Jack Cheese",
    "Gruyere Cheese",
    "Limberger Cheese",
    "Manchego Cheese",
    "Marscapone Cheese",
    "Pecorino Cheese",
    "Provolone Cheese",
    "Queso Cheese",
    "Roquefort Cheese",
    "Romano Cheese",
    "Ricotta Cheese",
    "Smoked Gouda"
];
pizzaIngredients.sauces = [
    "Red Sauce",
    "Marinara",
    "BBQ Sauce",
    "No Sauce",
    "Hot Sauce"
];
pizzaIngredients.crusts = [
    "White Crust",
    "Whole Wheat Crust",
    "Flatbread Crust",
    "Stuffed Crust"
];

// Name generator pulled from http://saturdaykid.com/usernames/generator.html
// Capitalizes first letter of each word
var capitalizer = function (s) {
    s = s[0].toUpperCase() + s.slice(1);
    return s;
};

// Pulls adjective out of array using random number sent from generator
//    per jslint.org "Don't declare variables in a switch."
function getAdj(x) {
    var dark = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
    var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta", "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
    var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing", "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy", "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", "brainwashed"];
    var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy", "metallic"];
    var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling", "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
    var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying", "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
    var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous", "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed", "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", "horrible", "syncophantic", "unhelpful", "bootlicking"];
    var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful", "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous", "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", "majestic", "grand", "stunning"];
    var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
    var scientific_default = scientific;
    switch (x) {
    case "dark":
        return dark;
    case "color":
        return colors;
    case "whimsical":
        return whimsy;
    case "shiny":
        return shiny;
    case "noisy":
        return noisy;
    case "apocalyptic":
        return apocalyptic;
    case "insulting":
        return insulting;
    case "praise":
        return praise;
    case "scientific":
        return scientific;
    default:
        return scientific_default;
    }
}

// Pulls noun out of array using random number sent from generator
//    per jslint.org "Don't declare variables in a switch."
function getNoun(y) {
    var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
    var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic", "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot", "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
    var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
    var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone", "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor", "singer"];
    var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath", "fiend", "satanist", "moon", "fullMoon"];
    var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", "fluid", "moisture", "garbage", "trash", "bug"];
    var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV", "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen", "garden", "school", "wallet", "bottle"];
    var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin", "costume", "ornament", "treasure"];
    var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood", "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery", "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
    var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
    var scifi_default = scifi;
    switch (y) {
    case "animals":
        return animals;
    case "profession":
        return professions;
    case "fantasy":
        return fantasy;
    case "music":
        return music;
    case "horror":
        return horror;
    case "gross":
        return gross;
    case "everyday":
        return everyday;
    case "jewelry":
        return jewelry;
    case "places":
        return places;
    case "scifi":
        return scifi;
    default:
        return scifi_default;
    }
}

// types of adjectives for pizza titles
//"noisy" was misspelled
var adjCategory = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"];

// types of nouns for pizza titles
// Missing some of the nouns
var nounCategory = ["animals", "profession", "everyday", "fantasy", "music", "gross", "horror", "jewelry", "places", "scifi"];

// Generates random numbers for getAdj and getNoun functions and returns a new pizza name
function generator(aCat, nCat) {
    var adjectives = getAdj(aCat);
    var nouns = getNoun(nCat);
    var randomAdjCatIndex = parseInt(Math.random() * adjectives.length);
    var randomNounCatIndex = parseInt(Math.random() * nouns.length);
    var name = "The " + capitalizer(adjectives[randomAdjCatIndex]) + " " + capitalizer(nouns[randomNounCatIndex]);
    return name;
}

// Chooses random adjective and random noun
var randomName = function () {
    var randomNumberAdj = parseInt(Math.random() * adjCategory.length);
    var randomNumberNoun = parseInt(Math.random() * nounCategory.length);
    return generator(adjCategory[randomNumberAdj], nounCategory[randomNumberNoun]);
};

// These functions return the string of a random ingredient from each respective category of ingredients.
var selectRandomMeat = function () {
    var randomMeat = pizzaIngredients.meats[Math.floor(Math.random() * pizzaIngredients.meats.length)];
    return randomMeat;
};

var selectRandomNonMeat = function () {
    var randomNonMeat = pizzaIngredients.nonMeats[Math.floor(Math.random() * pizzaIngredients.nonMeats.length)];
    return randomNonMeat;
};

var selectRandomCheese = function () {
    var randomCheese = pizzaIngredients.cheeses[Math.floor(Math.random() * pizzaIngredients.cheeses.length)];
    return randomCheese;
};

var selectRandomSauce = function () {
    var randomSauce = pizzaIngredients.sauces[Math.floor(Math.random() * pizzaIngredients.sauces.length)];
    return randomSauce;
};

var selectRandomCrust = function () {
    var randomCrust = pizzaIngredients.crusts[Math.floor(Math.random() * pizzaIngredients.crusts.length)];
    return randomCrust;
};

var ingredientItemizer = function (iStr) {
    return "<li>" + iStr + "</li>";
};

// Returns a string with random pizza ingredients nested inside <li> tags
var makeRandomPizza = function () {
    var pizza = "";
    var numberOfMeats = Math.floor(Math.random() * 4);
    var numberOfNonMeats = Math.floor(Math.random() * 3);
    var numberOfCheeses = Math.floor(Math.random() * 2);
    var i;
    var j;
    var k;

    for (i = 0; i < numberOfMeats; i = i + 1) {
        pizza = pizza + ingredientItemizer(selectRandomMeat());
    }

    for (j = 0; j < numberOfNonMeats; j = j + 1) {
        pizza = pizza + ingredientItemizer(selectRandomNonMeat());
    }

    for (k = 0; k < numberOfCheeses; k = k + 1) {
        pizza = pizza + ingredientItemizer(selectRandomCheese());
    }
    pizza = pizza + ingredientItemizer(selectRandomSauce());
    pizza = pizza + ingredientItemizer(selectRandomCrust());

    return pizza;
};

// returns a DOM element for each pizza
var pizzaElementGenerator = function (pid) {
    var pizzaContainer;             // contains pizza title, image and list of ingredients
    var pizzaImageContainer;        // contains the pizza image
    var pizzaImage;                 // the pizza image itself
    var pizzaDescriptionContainer;  // contains the pizza title and list of ingredients
    var pizzaName;                  // the pizza name itself
    var ingredients_ul;             // the list of ingredients

    pizzaContainer = document.createElement("div");
    pizzaImageContainer = document.createElement("div");
    pizzaImage = document.createElement("img");
    pizzaDescriptionContainer = document.createElement("div");

    pizzaContainer.classList.add("randomPizzaContainer");
    pizzaContainer.style.width = "389px";
    pizzaContainer.style.height = "325px";
    pizzaContainer.id = "pizza" + pid;                // gives each pizza element a unique id
    pizzaImageContainer.classList.add("col-md-6");

    pizzaImage.src = "images/pizza.png";
    pizzaImage.classList.add("img-responsive");
    pizzaImageContainer.appendChild(pizzaImage);
    pizzaContainer.appendChild(pizzaImageContainer);


    pizzaDescriptionContainer.classList.add("col-md-6");

    pizzaName = document.createElement("h4");
    pizzaName.innerHTML = randomName();
    pizzaDescriptionContainer.appendChild(pizzaName);

    ingredients_ul = document.createElement("ul");
    ingredients_ul.innerHTML = makeRandomPizza();
    pizzaDescriptionContainer.appendChild(ingredients_ul);
    pizzaContainer.appendChild(pizzaDescriptionContainer);

    return pizzaContainer;
};

// Changes the value for the size of the pizza above the slider
//  Moved this function outside of resizePizzas
//  Instead of using "querySelector" here a global "sliderLabel" is defined at the top of the code
function changeSliderLabel(newSize) {
    switch (newSize) {
    case "1":
        sliderLabel.innerHTML = "Small";
        return;
    case "2":
        sliderLabel.innerHTML = "Medium";
        return;
    case "3":
        sliderLabel.innerHTML = "Large";
        return;
    default:
        console.log("bug in changeSliderLabel");
    }
}

// Iterates through pizza elements on the page and changes their widths
//   Moved this function outside of resizePizzas.
//   Removed the functions "determineDx" and "sizeSwitcher" and instead set to use fixed pixel sizes
function changePizzaSizes(newSize) {
    var newWidth;
    var i;
    switch (newSize) {
    case "1":
        newWidth = "292px"; // was 25
        break;
    case "2":
        newWidth = "389px"; // was 33.3
        break;
    case "3":
        newWidth = "585px"; // was 50
        break;
    default:
        newWidth = "389px"; // was 33.3
        console.log("bug in sizeSwitcher");
    }
    for (i = 0; i < pizzaElements.length; i = i + 1) {
        pizzaElements[i].style.width = newWidth;
    }
}
// resizePizzas(size) is called when the slider in the "Our Pizzas" section of the website moves.
var resizePizzas = function (size) {
    //perf start
    window.performance.mark("mark_start_resize");   // User Timing API function

    changeSliderLabel(size);
    changePizzaSizes(size);

    //perf end
    // User Timing API is awesome
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    var timeToResize = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + timeToResize[timeToResize.length - 1].duration + "ms");
};

// Iterator for number of times the pizzas in the background have scrolled.
// Used by updatePositions() to decide when to log the average time per frame //doesn't need to be global
var frame = 0;

// Logs the average amount of time per 10 frames needed to move the sliding background pizzas on scroll.
// times is the array of User Timing measurements from updatePositions()
function logAverageFrame(times) {
    var numberOfEntries = times.length;
    var sum = 0;
    var i;
    for (i = numberOfEntries - 1; i > numberOfEntries - 11; i = i - 1) {
        sum = sum + times[i].duration;
    }
    console.log("Average time to generate last 10 frames: " + sum / 10 + "ms");
}

// The following code for sliding background pizzas was pulled from Ilya's demo found at:
// https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html

// Moves the sliding background pizzas based on scroll position
function updatePositions() {
    //perf start
    frame = frame + 1;
    window.performance.mark("mark_start_frame");
    /* original code
    var items = document.querySelectorAll('.mover');
    for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }
    */
    
    /*  coach suggestion:
    var phase = []; 
    for (var i = 0; i < 5; i++) {
        phase.push(Math.sin(scrollTop / 1250 + i) * 100);
    }
    for (var i = 0, max = items.length; i < max; i++) {
        items[i].style.left = items[i].basicLeft + phase[i%5] + 'px';
    }
    */
    
    /* my original:
    var currentScrollY = latestKnownScrollY;
    var phase;
    var phaseFactor = currentScrollY / 1250;
    var i;
    for (i = 0; i < numMovingPizzas; i = i + 1) {
        phase = Math.sin(phaseFactor + (i % 5));
    */

    var currentScrollY = latestKnownScrollY;
    var phase = [];
    var i;

    // Set up array of pre-calculated values so not doing Math in loop where style is being set.
    for (i = 0; i < 5; i = i + 1) {
        phase.push(basicLeftFactor[i % 5] + (100 * (Math.sin(currentScrollY / 1250 + (i % 5)))) - 600);
    }
    
    // numMovingPizzas is a global variable that is set in makePizzaShop.
    for (i = 0; i < numMovingPizzas; i = i + 1) {
        //for "position: absolute" instead of "fixed" in css - not working
        //items[i].style.transform = "translate3d(" + (items[i].basicLeft + (100 * phase) - 600) + "px, " + currentScrollY + "0px, 0px)";

        //for "will-change: transform" and "transform: translate3d(0,0,0)" in css - tried this...
        //items[i].style.transform = "translate3d(" + (basicLeftFactor[i % 6] + (100 * phase) - 600) + "px, 0px, 0px)";
        //console.log("items[i].basicLeft: " + i + ", " + items[i].basicLeft + ", basicLeftFactor: " + basicLeftFactor[i % 6]);

      	//for "will-change: transform" in css
        //   basicLeftFactor is a global array set in makePizzaShop.
        //   Take the Math call out of the loop by creating a phase array.
        //   my original: 
        //   items[i].style.transform = "translateX(" + (basicLeftFactor[i % 6] + (100 * phase) - 600) + "px)";
        items[i].style.transform = "translateX(" + phase[i % 5] + "px)";
    }
    //Allow another animation frame to start
    ticking = false;

    //perf end
    // User Timing API to the rescue again. Seriously, it's worth learning.
    // Super easy to create custom metrics.
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
        var timesToUpdatePosition = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(timesToUpdatePosition);
    }
}

// runs updatePositions on scroll
function whenScroll() {
    // only do something if not currently running requestAnimationFrame
    if (!ticking) {
        latestKnownScrollY = window.scrollY;
        ticking = true;
        requestAnimationFrame(updatePositions);
    }
}

//Initialize web page with all generated elements
function makePizzaShop() {
    console.log("makePizzaShop");
    //Set the number of custom pizzas on the menu.  (keeping original value of 100)
    var numCustomPizzas = 100;
    var iPizza;

    //perf start - measure_pizza_generation
    window.performance.mark("mark_start_generating"); // collect timing data

    var pizzasDiv = document.getElementById("randomPizzas");
    // This for-loop actually creates and appends all of the pizzas when the page loads
    for (iPizza = 2; iPizza < numCustomPizzas; iPizza = iPizza + 1) {
        pizzasDiv.appendChild(pizzaElementGenerator(iPizza));
    }
    // Store the pizza menu items in a global variable so don't have to query for this later
    pizzaElements = document.getElementsByClassName('randomPizzaContainer');

    //perf end - measure_pizza_generation
    // User Timing API again. These measurements tell you how long it took to generate the initial pizzas
    window.performance.mark("mark_end_generating");
    window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
    var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
    console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");

    //perf start - measure_moving_pizza_generation
    window.performance.mark("mark_start_generating"); // collect timing data

    // Generates the sliding pizzas when the page loads.
    var cols = 8;
    var s = 256;
    // Calculated number of moving pizzas needed for display on the page (coach's tip!)
    numMovingPizzas = (Math.floor(window.innerHeight / s) + 1) * cols;
    //console.log("window.innerHeight: " + window.innerHeight + ", numMovingPizzas: " + numMovingPizzas);
    
    // Taking Math.floor calculation out of theloop.
    // Created an array entry corresponding to the number of columns that is a multiple of "s":
    //basicLeftFactor = [0, 256, 512, 768, 1024, 1280, 2560, 5120];
    var i;
    for (i = 0; i < cols; i = i + 1) {
        basicLeftFactor.push(s * i);
    }

    var movingPizzas1Div = document.getElementById("movingPizzas1");
    for (i = 0; i < numMovingPizzas; i = i + 1) {
        var elem = document.createElement('img');
        elem.className = 'mover';
        elem.src = "images/pizza_73.jpg"; //new image of the right size
        //elem.basicLeft = (i % cols) * s;
        elem.basicLeft = basicLeftFactor[i % cols];
        elem.style.top = (Math.floor(i / cols) * s) + 'px';
        movingPizzas1Div.appendChild(elem);
        //console.log("moverxy: " + elem.basicLeft + ", " + elem.style.top);
    }
    //Get a handle to the movers after they are created!
    items = document.getElementsByClassName('mover');
    //console.log(items);

    //perf end - measure_moving_pizza_generation
    window.performance.mark("mark_end_generating");
    window.performance.measure("measure_moving_pizza_generation", "mark_start_generating", "mark_end_generating");
    timeToGenerate = window.performance.getEntriesByName("measure_moving_pizza_generation");
    console.log("Time to generate moving pizzas on load: " + timeToGenerate[0].duration + "ms");

    //set initial scroll position and update moving pizzas
    window.requestAnimationFrame(updatePositions);

    //set scroll event listener
    window.addEventListener('scroll', whenScroll, false);
    //allow whenScroll function to run.
    ticking = false;
}

// Generates the sliding pizzas when the page loads.
//   Make all the custom elements once the page is loaded.
//   I put it all into one function "makePizzaShop"
/*
document.addEventListener('DOMContentLoaded', function() {
    makePizzaShop();
});
*/
function onLoad(f) {
    //If document is already loaded
    if (onLoad.loaded) {
        //queue f to be run as soon as possible
        window.setTimeout(f, 0);
    } else if (window.addEventListener) {
        //standard event registration method
        window.addEventListener("load", f, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", f);
    }
}
onLoad.loaded = false;
onLoad(makePizzaShop());
onLoad.loaded = true;
