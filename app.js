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
    "avatar": "http://thirdwx.qlogo.cn/mmopen/vi_32/P1xp3zWqiclAbzCnmiazulWBwKfBUBBZFvVQmKppnz4hQCibMq3SBQShj9t59ypBzVSYsfkMibqmmd53CJz2vP308Q/132",
    "latitude":35.54303,
    "longitude":106.6653,
    "province_id": 35,
    "province": 
    [
      {
        "id": 1,
        "name": "北京市",
        "mes_amount": 1001
      },
      {
        "id": 2,
        "name": "天津市",
        "mes_amount": 10001
      },
      {
        "id": 3,
        "name": "上海市",
        "mes_amount":101
      },
      {
        "id": 4,
        "name": "重庆市",
        "mes_amount": 1
      }
    ],
    "message":
    [
      {
        id:1,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:2,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:3,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:4,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:5,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:6,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:7,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:8,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油2武汉加油1"
      },
      {
        id:9,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油3"
      },
      {
        id:10,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油4"
      },
      {
        id:11,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油5"
      },
      {
        id:12,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油6"
      },
      {
        id:13,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油7"
      },
      {
        id:14,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油8"
      },
      {
        id:15,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油9"
      },
      {
        id:16,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油10"
      }
    ]
  }
  if (pathname === "/api/index") {
    response.end(JSON.stringify(indexMessage));
  } else if (pathname === "/api/index/mes") {
    let {pathname,query} = url.parse(request.url,true);
    console.log(query.last_id);
    response.end(JSON.stringify({
      "message":
    [
      {
        id:1,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": `返回的数据武汉加油1${query.last_id}`
      },
      {
        id:2,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:3,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:4,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:5,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:6,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:7,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1"
      },
      {
        id:8,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油2武汉加油1"
      },
      {
        id:9,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油3"
      },
      {
        id:10,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油4"
      },
      {
        id:11,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油5"
      },
      {
        id:12,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油6"
      },
      {
        id:13,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油7"
      },
      {
        id:14,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油1, 我永远爱您,中国加油8"
      },
      {
        id:15,
        "user_avatar": "http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg",
        "content": "武汉加油9"
      },
      {
        id:16,
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