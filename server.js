var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne: {
        title: 'Article One | Anurag Bhattacharya',
        heading: 'Article One',
        date: '16th August, 2017',
        content: 'This is the content for article one'
    
    },

    articleTwo: {
        title: 'Article Two | Anurag Bhattacharya',
        heading: 'Article Two',
        date: '17th August, 2017',
        content: `<p>This article is meant for writing random content. This is purely meant for learning application developement and               holds no significance as of now. Yet this is my first article content that I am writing and this is really important           for me. I had the wish to start my own blog. Well I have already written three lines of useless junk that is to               trashed even before a single glance can be paid to it. I think I have written enough copy for now. I am gone.</p>
                
                  <p>This article is meant for writing random content. This is purely meant for learning application developement and holds no significance as of now. Yet this is my first article content that I am writing and this is really important for me. I had the wish to start my own blog. Well I have already written three lines of useless junk that is to trashed even before a single glance can be paid to it. I think I have written enough copy for now. I am gone.</p>
                
                  <p>This article is meant for writing random content. This is purely meant for learning application developement and holds no significance as of now. Yet this is my first article content that I am writing and this is really important for me. I had the wish to start my own blog. Well I have already written three lines of useless junk that is to trashed even before a single glance can be paid to it. I think I have written enough copy for now. I am gone</p>
    `
    },

    articleThree: {
        title: 'Article Three | Anurag Bhattacharya',
        heading: 'Article Three',
        date: '18th August, 2017',
        content: `<p>This article is meant for writing random content. This is purely meant for learning application developement and               holds no significance as of now. Yet this is my first article content that I am writing and this is really important           for me. I had the wish to start my own blog. Well I have already written three lines of useless junk that is to               trashed even before a single glance can be paid to it. I think I have written enough copy for now. I am gone.</p>
                
                  <p>This article is meant for writing random content. This is purely meant for learning application developement and holds no significance as of now. Yet this is my first article content that I am writing and this is really important for me. I had the wish to start my own blog. Well I have already written three lines of useless junk that is to trashed even before a single glance can be paid to it. I think I have written enough copy for now. I am gone.</p>
                
                  <p>This article is meant for writing random content. This is purely meant for learning application developement and holds no significance as of now. Yet this is my first article content that I am writing and this is really important for me. I had the wish to start my own blog. Well I have already written three lines of useless junk that is to trashed even before a single glance can be paid to it. I think I have written enough copy for now. I am gone</p>
    `
    },
};

function createTemplate(data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `<!DOCTYPE html>
    <html>
        <head>
            <title>${title}</title>
                
            <link href="/ui/style.css" rel="stylesheet" type='text/css' />
        </head>
        <body>
            <div class='container'>
                <a href='/'>Home</a>
                <hr/>
                <h2>
                    ${heading}
                </h2>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

var names = [];
app.get('/submitName', function (req,res){
    //request query looks like /submitName/?name=xxxx
    //extracting the value of name from the request
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function(req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
