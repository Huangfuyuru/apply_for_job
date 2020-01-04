const express = require('express'),
      router = express.Router,
      qs = require('querystring'),
      url = require('url'),
      bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

const js = require('./notes/js');

router.use('/js',js);