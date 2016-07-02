// for navigator language
var lang = window.navigator.language;
// you can change the language
// var lang = 'en';

//change weather params here:
var weatherParams = {
    'q': 'Gig Harbor,Washington',
    'units': 'imperial',
    'appid':'8606389960787055c4f6e57f0b496407',
    'lang': lang,
    'weatherRefresh': 60000,  // duration to refresh the current weather  // 1 min
    'forecastRefresh': 18000000  // duration to refresh the current forecast  // 30 min
};

// compliments:
var messages = {
    'show': true,
    'refresh': 60000,   // duration to display one message (millisec)  // 60 sec
    'data': [
        'Hello!',
        'Namaste!',
        'Its a very beautiful day',
        'Have fun today!',
        'Awesome babe!',
        'Looking good today!',
        'You look nice!',
        'Enjoy your day!'
    ]
};

// feed to display the heandlines in the bottom
var newsfeed = {
    'show': true,
    'url': 'http://news.google.com/news/section?q=news&output=rss',
    'limit': 10,  // number of headlines to pull
    'refresh': 20000  // duration to display one headline (millisec)  // 20 sec
};

// ical feed
var icalFeed = {
    'url': 'http://webtermine.at/?ec3_ical_wien',
    'refresh': 600000  // duration to refresh the calendar (millisec)  // 10 min
};