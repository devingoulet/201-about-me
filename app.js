'use strict'

var userName = prompt('What is your name?');
alert('Thanks for stopping by ' + userName + '!')

var livedinArizona =  prompt('Have I ever lived in Arizona '
+ userName + '?' + ' Y or N').toUpperCase();
if(livedinArizona === 'Y') {
    alert('Correct ' + userName + ' I did live there!');
} else {
    alert('Close, but no cigar ' + ' I did live there.');
}

var workHistory = prompt('Did I work at vans ' + userName + ' Y or N').toUpperCase();
if(workHistory === 'Y') {
    alert('Bingo, ' + 'my friend' + ' I used to sell shoes.')
} else {
    alert('Not this time kiddo, ' + ' come back later.')
}

var videoGames = prompt('Do I game ' + userName + ' Y or N').toUpperCase();
if(videoGames === 'Y') {
    alert('Once again you got it, ' + ' I do play videogames!')
} else {
    alert('Whatre you new? ' + userName + ' come back when you know me.')
}

var stayinWashington = prompt('Do I plan to stay in Washington ' + 'Y or N').toUpperCase();
if(stayinWashington === 'Y') {
    alert('How do you know so much about me? ' + userName + ' please, proceed.')
} else {
    alert('You think I like the rain? ' + userName + ' take a hike.')
}

var goRunning = prompt('Do I like to go for runs ' + 'Y or N').toUpperCase();
if(goRunning === 'Y') {
    alert('Ok, you passed ' + userName + ' now get outta here!')
} else {
    alert('I have had enough' + ' so long ' + userName)
}