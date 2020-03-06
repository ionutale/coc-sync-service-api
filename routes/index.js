var express = require('express');
var router = express.Router();
const clashApi = require('clash-of-clans-api')


let client = clashApi({
  // request: {
  //   proxy: `http://148.251.160.242:80`,
  // },
  token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFhM2FjODFhLWMzNzktNDBkOS04YzRkLTg4N2FhZDk0OGExNSIsImlhdCI6MTU4MzUyMjg0MSwic3ViIjoiZGV2ZWxvcGVyL2IxYTVhZTUwLTcxMWUtZWMwNy1mY2JlLWFhYTZlYzA0YTMwNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM3LjE2My40MS4xNjgiLCIzNS4yMzQuMTA4LjE1NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.ufJ3v1yFLtHOH_LKSlFYTbH1cEmKmgiCokSLfPiWz81D4jB1R3UtVLEHpfLY83qtVSlJdYuSQ4f4nQ6NVDv5xg`
});

const normalizeTag = (tag)  => /^#./.test(tag) ? `${tag}` : `#${tag}`


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await client.playerByTag(normalizeTag('YQP0P9PP'))
    res.status(200).json(response);
    
  } catch (error) {
    console.log(error)
    res.status(200).send(error.message);
  }

});

module.exports = router;
