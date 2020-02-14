const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require('querystring');
let server = http.createServer(function(request,response) {
  console.log(request.url);
  let pathname = url.parse(request.url).pathname;
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  let indexMessage = {
    "id": 1,
    "name": "fileaccent",
    "avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
    "latitude":35.54303,
    "longitude":106.6653,
    "province_id": 0,
    "province": 
    [
      {
        "id": 1,
        "name": "北京市",
        "mes_amount": 1000
      },
      {
        "id": 2,
        "name": "天津市",
        "mes_amount": 3000
      },
      {
        "id": 3,
        "name": "上海市",
        "mes_amount":5000
      }
    ],
    "message":
    [
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油2武汉加油1"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油3"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油4"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油5"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油6"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油7"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油8"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油9"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油10"
      }
    ]
  }
  if (pathname === "/api/index") {
    response.end(JSON.stringify(indexMessage));
  } else if (pathname === "/api/index/mes") {
    response.end(JSON.stringify({
      "message":
    [
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油2"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油3"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油4"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油5"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油6"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油7"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油8"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油9"
      },
      {
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油10"
      }
    ]
    }))
  } else if (pathname === "/api/message") {
    console.log(request);
    response.end(JSON.stringify({
      message: 'ok'
    }));
  }
})
server.listen(8000);
console.log("Server in 8000");