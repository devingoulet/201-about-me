'use strict'

// arrays : useful for containing like things
// var first = 'vanilla'
// var second = 'mint-chip'
// var third = 'moose tracks'

// var userIceCream = prompt('ice cream?')

// if(userIceCream === first || userIceCream === second || userIceCream === third){
//     alert('we love the same icecream');
// }

// var icecreamILike = ['vanilla', 'mint-chip', 'moose tracks', 'chocolate chip cookie'];
// icecreamILike[0]; 
// aray access notation, it will be === 'vanilla'

// if(icecreamILike[0] === userIceCream || icecreamILike[1] === userIceCream){
//     alert('yay');
// }
 
// do {
//     var numbertheyPicked = ('number?');
// } while (!numbertheyPicked);

// var age = 0; // incrementor assignment
// while(age < 60){// conditional
    // alert('a decade has passed you are now ' + age);
    // age = age + 1;
    // age ++;// incrementation
// }
// i stands for INDEX, incrementor
// for (var i = 0; < 6; i++){
//     alert('a year has now passed you are now ' + i);
// } 
var Welcome;
var livedinArizona;
var workHistory;
var videoGames;
var stayinWashington;
var goRunning;
var howmanyCities;
var totalQuestionsRight = 0;
var totalNumberofQuestions = 7;
var guessCount = 0;
var guessCountB = 0;
var favoriteMovies;

Welcome = prompt('Welcome to my personal quiz, please proceed.');
alert('enjoy!' + Welcome)

var livedinArizona = prompt('Have I ever lived in Arizona? Yes or No').toLowerCase();
if(livedinArizona === 'yes') {
    alert('Boom, you got it!')
    totalQuestionsRight++;
} else if (livedinArizona === 'no') {
    alert(livedinArizona + ' Boo! Wrong!')
}
var workHistory = prompt('Did I work at Vans? Yes or No').toLowerCase();
if(workHistory === 'yes') {
    alert('You got it right! Are you the FBI?')
    totalQuestionsRight++;
} else if (workHistory === 'no') {
    alert(workHistory + ' Wrong! leave this website!')
}
var videoGames = prompt('Do I play video games? Yes or No').toLowerCase();
if(videoGames === 'yes') {
    alert('You got it right, how interesting...')
    totalQuestionsRight++;
} else if (videoGames === 'no') {
    alert(videoGames + ' Wrong! Away with you!')
}
var stayinWashington = prompt('Will I stay in Washington? Yes or No').toLowerCase();
if(stayinWashington === 'yes') {
    alert('How did you know I hate the rain?') 
    totalQuestionsRight++;
} else if (stayinWashington === 'no') {
    alert(stayinWashington + ' Dude, who do you know here? Clearly no one!')
}
var goRunning = prompt('Do I like to run? Yes or No').toLowerCase();
if(goRunning === 'yes') {
    alert('Nice, dude you got it. Lets go for a run then?')
    totalQuestionsRight++;
} else if (goRunning === 'no') {
    alert(goRunning + ' This is a joke, to the gulag with you!')
}

do {
    var howmanyCities = parseInt(prompt('How many cities have I lived in? 1 - 4'));
    if(howmanyCities === 4) {
        alert('Nice dude, its creepy you know that!')
        totalQuestionsRight++;
        break;
    } else if(howmanyCities < 4) {
        alert('Too low, boo!')
    } else if (howmanyCities > 4) {
        alert('Boo! too high!')
    } else {
        alert('Just forget it')
    } guessCount++
} while (guessCount < 4);
favoriteMovies = ['Blow', 'Drive', 'A Place Beyond the Pines','The Great Escape', 'Ferris Buellers Day Off','Mojave',
'The Back to the Future Trilogy','Once Upon a Time in Hollywood','The OG Oceans 11 and the New Ones']
console.log('anything')

do {
    console.log('something else')
    var favoriteMoviesQuestion = prompt('Guess my favorite movie dude.');
    if (favoriteMoviesQuestion === favoriteMovies[0] || 
    favoriteMoviesQuestion === favoriteMovies[1] || 
    favoriteMoviesQuestion === favoriteMovies[2] ||
    favoriteMoviesQuestion === favoriteMovies[3] ||
    favoriteMoviesQuestion === favoriteMovies[4] || 
    favoriteMoviesQuestion === favoriteMovies[5] ||
    favoriteMoviesQuestion === favoriteMovies[6] ||
    favoriteMoviesQuestion === favoriteMovies[7] ||
    favoriteMoviesQuestion === favoriteMovies[8] ||
    favoriteMoviesQuestion === favoriteMovies[9]) {
        alert ('Nice you got it!');
        break;
        totalQuestionsRight++;
    } else {
        alert ('Take another guess');
 }
guessCountB ++; 
} while (guessCountB < 8);
        alert ('Nice, you managed to get ' + totalQuestionsRight + ' out of' + totalNumberofQuestions);

// var userName = prompt('What is your name?');
// alert('Thanks for stopping by ' + userName + '!')

// var livedinArizona =  prompt('Have I ever lived in Arizona '
// + userName + '?' + ' Y or N').toUpperCase();
// if(livedinArizona === 'Y') {
//     alert('Correct ' + userName + ' I did live there!');
// } else {
//     alert('Close, but no cigar ' + ' I did live there.');
// }

// var workHistory = prompt('Did I work at vans ' + userName + ' Y or N').toUpperCase();
// if(workHistory === 'Y') {
//     alert('Bingo, ' + 'my friend' + ' I used to sell shoes.')
// } else {
//     alert('Not this time kiddo, ' + ' come back later.')
// }

// var videoGames = prompt('Do I game ' + userName + ' Y or N').toUpperCase();
// if(videoGames === 'Y') {
//     alert('Once again you got it, ' + ' I do play videogames!')
// } else {
//     alert('Whatre you new? ' + userName + ' come back when you know me.')
// }

// var stayinWashington = prompt('Do I plan to stay in Washington ' + 'Y or N').toUpperCase();
// if(stayinWashington === 'Y') {
//     alert('How do you know so much about me? ' + userName + ' please, proceed.')
// } else {
//     alert('You think I like the rain? ' + userName + ' take a hike.')
// }

// var goRunning = prompt('Do I like to go for runs ' + 'Y or N').toUpperCase();
// if(goRunning === 'Y') {
//     alert('Ok, you passed ' + userName + ' now get outta here!')
// } else {
//     alert('I have had enough' + ' so long ' + userName);