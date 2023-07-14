const express = require('express');
const app = new express();
const path = require('path');
app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/createnew', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'createnew.html'));
});

app.listen(3000, () => {
  console.log('App listening on port 3000')
});











// $(".post-wrapper").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow:$('.next'),
//     prevArrow:$('.prev'),
//   });
