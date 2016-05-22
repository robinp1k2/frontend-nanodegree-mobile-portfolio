"use strict";function getAdj(e){var a=["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"],r=["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"],n=["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"],i=["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"],t=["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"],o=["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"],s=["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"],l=["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"],c=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"],d=["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];switch(e){case"dark":return a;case"color":return r;case"whimsical":return n;case"shiny":return i;case"noisy":return t;case"apocalyptic":return o;case"insulting":return s;case"praise":return l;case"scientific":return c;default:return d}}function getNoun(e){var a=["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"],r=["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"],n=["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"],i=["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"],t=["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"],o=["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"],s=["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"],l=["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"],c=["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"],d=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"],u=["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];switch(e){case"animals":return a;case"profession":return r;case"fantasy":return n;case"music":return i;case"horror":return t;case"gross":return o;case"everyday":return s;case"jewelry":return l;case"places":return c;case"scifi":return d;default:return u}}function generator(e,a){var r=getAdj(e),n=getNoun(a),i=parseInt(Math.random()*r.length),t=parseInt(Math.random()*n.length),o="The "+capitalizer(r[i])+" "+capitalizer(n[t]);return o}function logAverageFrame(e){var a,r=e.length,n=0;for(a=r-1;a>r-11;a-=1)n+=e[a].duration;console.log("Average time to generate last 10 frames: "+n/10+"ms")}function updatePositions(){frame+=1,window.performance.mark("mark_start_frame");var e,a,r=document.getElementsByClassName("mover"),n=document.body.scrollTop/1250;for(e=0;e<r.length;e+=1)a=Math.sin(n+e%5),r[e].style.transform="translateX("+(r[e].basicLeft+100*a-600)+"px) translateZ(0)";if(window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10===0){var i=window.performance.getEntriesByName("measure_frame_duration");logAverageFrame(i)}}function onLoad(e){onLoad.loaded?window.setTimeout(e,0):window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent&&window.attachEvent("onload",e)}var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"];var capitalizer=function(e){return e=e[0].toUpperCase()+e.slice(1)},adjCategory=["dark","color","whimsical","shiny","noisy","apocalyptic","insulting","praise","scientific"],nounCategory=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"],randomName=function(){var e=parseInt(Math.random()*adjCategory.length),a=parseInt(Math.random()*nounCategory.length);return generator(adjCategory[e],nounCategory[a])},selectRandomMeat=function(){var e=pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)];return e},selectRandomNonMeat=function(){var e=pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)];return e},selectRandomCheese=function(){var e=pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)];return e},selectRandomSauce=function(){var e=pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)];return e},selectRandomCrust=function(){var e=pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)];return e},ingredientItemizer=function(e){return"<li>"+e+"</li>"},makeRandomPizza=function(){var e,a,r,n="",i=Math.floor(4*Math.random()),t=Math.floor(3*Math.random()),o=Math.floor(2*Math.random());for(e=0;i>e;e+=1)n+=ingredientItemizer(selectRandomMeat());for(a=0;t>a;a+=1)n+=ingredientItemizer(selectRandomNonMeat());for(r=0;o>r;r+=1)n+=ingredientItemizer(selectRandomCheese());return n+=ingredientItemizer(selectRandomSauce()),n+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(e){var a,r,n,i,t,o;return a=document.createElement("div"),r=document.createElement("div"),n=document.createElement("img"),i=document.createElement("div"),a.classList.add("randomPizzaContainer"),a.style.width="33.33%",a.style.height="325px",a.id="pizza"+e,r.classList.add("col-md-6"),n.src="images/pizza.png",n.classList.add("img-responsive"),r.appendChild(n),a.appendChild(r),i.classList.add("col-md-6"),t=document.createElement("h4"),t.innerHTML=randomName(),i.appendChild(t),o=document.createElement("ul"),o.innerHTML=makeRandomPizza(),i.appendChild(o),a.appendChild(i),a},resizePizzas=function(e){function a(e){switch(e){case"1":return void(document.querySelector("#pizzaSize").innerHTML="Small");case"2":return void(document.querySelector("#pizzaSize").innerHTML="Medium");case"3":return void(document.querySelector("#pizzaSize").innerHTML="Large");default:console.log("bug in changeSliderLabel")}}function r(e){var a,r;switch(e){case"1":a=25;break;case"2":a=33.3;break;case"3":a=50;break;default:a=33.3,console.log("bug in sizeSwitcher")}var n=document.querySelectorAll(".randomPizzaContainer");for(r=0;r<n.length;r+=1)n[r].style.width=a+"%"}window.performance.mark("mark_start_resize"),a(e),r(e),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var n=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+n[n.length-1].duration+"ms")},frame=0;window.addEventListener("scroll",function(){window.requestAnimationFrame(updatePositions)});var makePizzaShop=function(){var e,a=24,r="";for(window.performance.mark("mark_start_generating"),e=2;a>e;e+=1)r=document.getElementById("randomPizzas"),r.appendChild(pizzaElementGenerator(e));window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var n=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+n[0].duration+"ms");var i,t,o=20,s=8,l=256;for(i=0;o>i;i+=1)t=document.createElement("img"),t.className="mover",t.src="images/pizza_73.jpg",t.basicLeft=i%s*l,t.style.top=Math.floor(i/s)*l+"px",document.querySelector("#movingPizzas1").appendChild(t);updatePositions()};onLoad.loaded=!1,onLoad(makePizzaShop()),onLoad.loaded=!0;