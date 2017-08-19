var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne: {
    title: 'Article One:Mayank Dobriyal';
    heading:'Article One';
    date:'18 August,2017';
    content:` <p>
                      this is Article One
                  </p>
                  <p>
                      gulla chutiya hai gulla chutiya hai gulla chutiya hai gulla chutiya tha aur gulla chutiya rhega
                  </p>
                  <p>
                      sab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun maisab ke sab chutiye hai kaha bhadwo ke beech mai fas gya hun mai'
                   </p>
            `;
}
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;

var htmlTemplate =`
        <html>
        <head>
         <title>
          ${title}
         </title>
        
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
         <div class="container">
          <div>
           <a href="/">Home</a>
           <hr/>
          </div>
          <h3>
              ${heading}
          </h3>
          <div>
              ${date}
          </div>
          <div>
              ${content}
            </div>
        </div>
        </body>
        
        </html>
  `; 
  return htmlTemplate;
} 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
 res.sendFile(path.join(__dirname,'ui','article-one.html'));
});

app.get('/article-two',function(req,res){
 res.send(createTemplate(articleOne0);
});
app.get('/article-three',function(req,res){
 res.send('Article one requested and will be served here');
});
app.get('/page-three',function(req,res){
    res.send('this is page three requested and ustice will be served  so page thrre wil be requested here this is new webapp nod server spo just shut up ');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
