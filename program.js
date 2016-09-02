var app = require('express')();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
//views/
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views')
  .createEngine({ transformViews: false }));

require('babel/register')({ ignore: false });

var data = [
  {id: 1, title: 'Shopping', detail: (process.argv[3] || 'Milk')},
  {id: 2, title: 'Hair cut', detail: (process.argv[4] || '13:00')}
];
app.use('/', function(req, res) {
  res.render('index' , {data: data});
});

app.listen(app.get('port'), function() {
  console.log('server created successful: ' + 'localhost:' + app.get('port'));
});
