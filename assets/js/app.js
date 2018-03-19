let menuToggle = document.querySelector('.toggle-menu');
let firstLine = document.querySelector('.first');
let secondLine = document.querySelector('.second');
let thirdLine = document.querySelector('.third');
let menu = document.querySelector('#main-nav');
let logo = document.querySelector('#img-logo');

$(function() {
  $('.list').click(function() {
    firstLine.classList.toggle('rotate-first');
    secondLine.classList.toggle('hide-second');
    logo.classList.toggle('hide-second');
    thirdLine.classList.toggle('rotate-third');
    menu.classList.toggle('display-menu');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });
});

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  firstLine.classList.toggle('rotate-first');
  secondLine.classList.toggle('hide-second');
  logo.classList.toggle('hide-second');
  thirdLine.classList.toggle('rotate-third');
  menu.classList.toggle('display-menu');
});



$('#btn').click(() => {
  let name = $('#name').val();
  let email = $('#email').val();
  let subject = $('#subject').val();
  let msg = $('#msg').val();
  $('#name').val('');
  $('#email').val('');
  $('#subject').val('');
  $('#msg').val('');
  sendEmail(name, email, subject, msg);

})


function sendEmail(name, email, subject, msg) {
  var data = new FormData();
  data.append("json", JSON.stringify({
    from: `${name} <biancayanez89@gmail.com>`,
    to: 'biancayanez89@gmail.com',
    subject: subject,
    text: `Email: ${email}
  Mensaje: ${msg}`
  }));

  fetch('https://portfolioserver.azurewebsites.net/sendEmail', {
      method: 'post',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'https://byanezzz.github.io'
      }),
      body: JSON.stringify({
        from: `${name} <biancayanez89@gmail.com>`,
        to: email,
        subject: subject,
        text: `Email: ${email}
      Mensaje: ${msg}`
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
    });
}


/* const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    clientId: '699633191907-rput4noket6r470050fld91ahr3kj9hu.apps.googleusercontent.com',
    clientSecret: '92qZhFE7XhG1WcKQkp3036GH',
    refreshToken: '1/7IgLG6yGhqY_R5R214yoc12M_xFjc5LC4DJh75ff3Ds' 
  }
})

var mailOptions = {
  from: 'My Name <biancayanez89@gmail.com>',
  to: 'jgta1987@gmail.com',
  subject: 'Nodemailer test',
  text: 'Hello World!!'
}

transporter.sendMail(mailOptions, function(err, res) {
  if (err) {
    console.log('Error');
  } else {
    console.log('Email Sent');
  }
}) */