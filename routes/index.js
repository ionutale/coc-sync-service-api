var express = require('express');
var router = express.Router();
const clashApi = require('clash-of-clans-api')


let client = clashApi({
  request: {
    proxy: `http://148.251.160.242:80`,
  },
  token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI4Yjg1ZDhhLWMxNWYtNDU4Ni05YzA1LWJjN2FlOWEwYjcyYiIsImlhdCI6MTU4MDMyNzAxOSwic3ViIjoiZGV2ZWxvcGVyL2IxYTVhZTUwLTcxMWUtZWMwNy1mY2JlLWFhYTZlYzA0YTMwNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE0OC4yNTEuMTYwLjI0MiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.C2u4gOvaC1w3t3x9aZPHK-CTCcQHGuU8g3o9_ECkk4BLSbltuRY4GTZZLjnnsLC_rLrKpniJ-lOsLJ-cELsrhw`
});

const normalizeTag = (tag)  => /^#./.test(tag) ? `${tag}` : `#${tag}`


/* GET home page. */
router.get('/', async function(req, res, next) {
  const response = await client.playerByTag(normalizeTag('YQP0P9PP'))

  res.status(200).json(response);
});

module.exports = router;
