(function () {

  document.getElementById('button').addEventListener('click', function () { // 收集数据, 跳转到share
    let postMessageParams = {
      content: document.querySelector('.input-box > input').value || '武汉加油',
      province_id: +grobal.province_id
    }
    if(/@和谐:\d+/.test(postMessageParams.content)) {
      request('/index/correctMes?province_id=' + postMessageParams.province_id + '&key=2020武汉加油', {
        credentials: 'include',
      })
      .then((data) => {
        console.log(data);
        console.log('删除成功!')
      })
      continue;
    }
    if (grobal.province_id && postMessageParams.content.length < 22) {
      request('api/message', {
        method: 'POST',
        credentials: 'include',
        body: `content=${postMessageParams.content}&province_id=${postMessageParams.province_id}`,
        headers: {
          "Content-Type":"application/x-www-form-urlencoded"
        }
      })
      .then((data) => {
        console.log(data);
        document.querySelector('.input-box > input').value="";
        window.
        location = './share.html';
        window.sessionStorage.setItem('grobal', JSON.stringify(grobal));
      })
    } else {
      if (postMessageParams.content.length >= 22) {
        let div = document.createElement('div');
        div.style.cssText = `
        padding:2vw;
        font-size:3vw;
        color:white;
        background-color:black;
        position:absolute;
        bottom:5vw;
        left:50%;
        transform:translate(-50%, -50%);
        border-radius:2vw;
        `;
        div.innerHTML='字数太多了哦';
        document.body.append(div);
        setTimeout(() => {
          document.body.removeChild(div);
        }, 2000);
      }
      console.log('正在获取省份中');
    }
  })
  // 中国地图部分
  let myChart = echarts.init(document.getElementById('china-map'));
  let colorList = ['#29454c', '#4c6b73', '#819d9e','#b2ced8', '#ced3e0', '#eeeeee'];
  let seriesData = [{
    name: '北京',
    value: 0
  }, {
    name: '天津',
    value: 0
  }, {
    name: '上海',
    value: 0
  }, {
    name: '重庆',
    value: 0
  }, {
    name: '河北',
    value: 0
  }, {
    name: '河南',
    value: 0
  }, {
    name: '云南',
    value: 0
  }, {
    name: '辽宁',
    value: 0
  }, {
    name: '黑龙江',
    value: 0
  }, {
    name: '湖南',
    value: 0
  }, {
    name: '安徽',
    value: 0
  }, {
    name: '山东',
    value: 0
  }, {
    name: '新疆',
    value: 0
  }, {
    name: '江苏',
    value: 0
  }, {
    name: '浙江',
    value: 0
  }, {
    name: '江西',
    value: 0
  }, {
    name: '湖北',
    value: 0
  }, {
    name: '广西',
    value: 0
  }, {
    name: '甘肃',
    value: 0
  }, {
    name: '山西',
    value: 0
  }, {
    name: '内蒙古',
    value: 0
  }, {
    name: '陕西',
    value: 0
  }, {
    name: '吉林',
    value: 0
  }, {
    name: '福建',
    value: 0
  }, {
    name: '贵州',
    value: 0
  }, {
    name: '广东',
    value: 0
  }, {
    name: '青海',
    value: 0
  }, {
    name: '西藏',
    value: 0
  }, {
    name: '四川',
    value: 0
  }, {
    name: '宁夏',
    value: 0
  }, {
    name: '海南',
    value: 0
  }, {
    name: '台湾',
    value: 0
  }, {
    name: '香港',
    value: 0
  }, {
    name: '澳门',
    value: 0
  }, {
    name: '南沙诸岛',
    value: 0
  }];
  let findProvinceId = [
    {id: 1, name: "北京市"},
    {id: 2, name: "天津市"},
    {id: 3, name: "上海市"},
    {id: 4, name: "重庆市"},
    {id: 5, name: "河北省"},
    {id: 6, name: "山西省"},
    {id: 7, name: "辽宁省"},
    {id: 8, name: "吉林省"},
    {id: 9, name: "黑龙江省"},
    {id: 10, name: "江苏省"},
    {id: 11, name: "浙江省"},
    {id: 12, name: "安徽省"},
    {id: 13, name: "福建省"},
    {id: 14, name: "江西省"},
    {id: 15, name: "山东省"},
    {id: 16, name: "河南省"},
    {id: 17, name: "湖北省"},
    {id: 18, name: "湖南省"},
    {id: 19, name: "广东省"},
    {id: 20, name: "海南省"},
    {id: 21, name: "四川省"},
    {id: 22, name: "贵州省"},
    {id: 23, name: "云南省"},
    {id: 24, name: "陕西省"},
    {id: 25, name: "甘肃省"},
    {id: 26, name: "青海省"},
    {id: 27, name: "台湾省"},
    {id: 28, name: "内蒙古"},
    {id: 29, name: "广西"},
    {id: 30, name: "西藏"},
    {id: 31, name: "宁夏"},
    {id: 32, name: "新疆"},
    {id: 33, name: "香港"},
    {id: 34, name: "澳门"},
    {id: 35, name: "海外"}
  ]

  window.addEventListener("pageshow", function(){
    if(sessionStorage.getItem("need-refresh")){
        location.reload();
        sessionStorage.removeItem("need-refresh");
    }
  });

  setStyle();

  initEcharts(); // 初始化
  function setStyle () {
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;
    document.querySelector('.foot-box').style.marginTop = `calc(${clientHeight}px - 182vw)`;
    document.querySelector('.barrage-box').style.top = `${+clientWidth / 100 * 55}px`
  }
  // 初始化echarts
  function initEcharts() {
    let tmpSeriesData = seriesData;
    let option = {
      title: {
        text: '',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c}人助力'
      },
      visualMap: {  
        show : true,  
        x: 'left',  
        y: '50%',
        itemWidth:10,
        itemHeight:10,
        textStyle: {
          fontSize:10
        },
        splitList: [
          {start: 5000, end:Infinity},{start: 1001, end: 5000},  
          {start: 101, end: 1000},{start: 11, end: 100}, {start: 1, end: 10},
          {start: 0, end: 0}
        ],  
        color: colorList  
      },
      series: [
        {
          name: '中国',
          type: 'map',
          mapType: 'china',
          roam: false,//是否开启鼠标缩放和平移漫游
          data: tmpSeriesData,
          top: "3%",//组件距离容器的距离
          zoom:1.1,
          selectedMode : 'single',
          label: {
            normal: {
              show: true,//显示省份标签
              textStyle:{
                color: '#636260',
                fontSize: 6,
                fontWeight: 'bold',
              }//省份标签字体样式
            },
            emphasis: {//对应的鼠标悬浮效果
              show: false,
              textStyle: {
                color: '#000'
              }
            }
          },
          itemStyle: {
            normal: {
              borderWidth: .5,//区域边框宽度
              borderColor: '#e1e596',//区域边框颜色
              color: 
                function (params) { // 设置颜色
                  let itemValue = params.data.value;
                  let index = 0;
                  if (itemValue > 5000) index = 0;
                  else if (itemValue > 1000) index = 1;
                  else if (itemValue > 100) index =2;
                  else if (itemValue > 10) index = 3;
                  else if (itemValue > 0) index = 4;
                  else index = 5;
                  return colorList[index];
                }
            },
            emphasis: {
              borderWidth: .5,
              borderColor: '#e1e596',
              color:
                function (params) { // 设置颜色
                  let itemValue = params.data.value;
                  let index = 0;
                  if (itemValue > 5000) index = 0;
                  else if (itemValue > 1000) index = 1;
                  else if (itemValue > 100) index =2;
                  else if (itemValue > 10) index = 3;
                  else if (itemValue > 0) index = 4;
                  else index = 5;
                  return colorList[index];
                }
            }
          }
        }
      ]
    };
    myChart.setOption(option);

    myChart.off("click");
  }


  // 请求部分
  let rootUrl = 'https://whcomeon.100steps.top/'; // http://llzhisu.cn:8080/   http://localhost:8000/  https://whcomeon.100steps.top/
  let encoded_uri = window.location.href;
  let id = '';
  let grobal = {
    avatar: '',
    rootUrl: '',
    province: '',
    province_id: '',
    latitude: 0,
    longitude: 0,
    last_id:0,
    option: '',
  };
  let messages = [

  ];
  let getLoactionErr = function getLoactionErrFunction () {
    getLoactionErrFunction.index = 0;
    if (getLoactionErrFunction.index === 3) {
      alert('获取地区信息失败,请刷新网页!');
      location = window.location.href;
    }
    request('index/reLocation', {
      //credentials: 'include'
    }).then((res) => {
      return res.json()
    })
    .then((data) => {
      if (data.province_id !== 0) {
        grobal.latitude = data.latitude;
        grobal.longitude = data.longitude;
        grobal.province_id = data.province_id;
      } else {
        getLoactionErrFunction.index++;
        getLoactionErrFunction();
      }
    })
  }
  
  request('api/index',{ // 对 fetch 的封装
    credentials: 'include',
  }) // 首页内容请求
  .then((data) => {
    console.log(data);
    grobal.avatar = data.avatar; // 保存头像 id
    id = data.id;
    if (data.province_id !== 0) {
      grobal.latitude = data.latitude;
      grobal.longitude = data.longitude;
      grobal.province_id = data.province_id;
    } else {
      console.log('error!');
      getLoactionErr();
    }
    grobal.latitude = data.latitude;
    grobal.longitude = data.longitude;
    grobal.province_id = data.province_id;
    grobal.last_id = data.message[data.message.length - 1].id;
    findProvinceId.map((item) => {
      if( item.id === grobal.province_id) {
        grobal.province = item.name;
      }
    })
    console.log(grobal);
    let option = data.province.map((item) => { // 把省去掉不然有些数据,无法获取
      let name;
      if (/省/.test(item.name)) {
        name = item.name.replace('省','');
      } else if (/市/.test(item.name)) {
        name = item.name.replace('市','');
      } else {
        name = item.name
      }
      return {
        name: name,
        value: item.mes_amount
      }
    })
    console.log(option);
    grobal.option = option;
    let total = option.reduce((total,item) => {
      return total + +item.value;
    },0);
    document.querySelector('.relay').innerHTML = `共 ${total} 人接力`
    myChart.setOption({
      series:[{
        name: '中国',
        data: option,
        itemStyle: {
          normal: {
            areaColor: 
              function (params) { // 设置颜色
                let itemValue = params.data.value;
                let index = 0;
                if (itemValue > 10000) index = 0;
                else if (itemValue > 1000) index = 1;
                else if (itemValue > 100) index =2;
                else if (itemValue > 10) index = 3;
                else index = 4;
                return colorList[index];
              }
          },
          emphasis: {
            borderWidth: .5,
            borderColor: '#0550c3',
            color: function (params) { // 设置颜色
                let itemValue = params.data.value;
                let index = 0;
                if (itemValue > 10000) index = 0;
                else if (itemValue > 1000) index = 1;
                else if (itemValue > 100) index =2;
                else if (itemValue > 10) index = 3;
                else index = 4;
                return colorList[index];
              }
          }
        },
      }]
    });
    myChart.off("click");

    setBarrage(data.message); // 设置弹幕
     
  })

  function request (url, setting={}) {
    return fetch(rootUrl + url, setting)
    .then((res)=> {
      if (res.status === 401) {
        console.log('重新登录');
        window.location = rootUrl + `/auth/jump?redirect=${encoded_uri}`;
      } else {
        return res.json();
      }
    })
    .catch(err=> {
      console.log(err);
    })
  }

  function setBarrage (message) {
    messages = messages.concat(message);
    let barrage = document.querySelectorAll('.barrage'); // 输入弹幕
    function parseDom(arg) {
  　　 var objE = document.createElement("div");
  　　 objE.innerHTML = arg;
      let obj = objE.children;
  　　 return objE.children;
    };
    for (let i = 0; i < 4; i++) {
      //barrage[i].removeChild(document.querySelectorAll('.barrage-item'));
      if(i%2) {
        document.querySelectorAll('.barrage')[i].innerHTML = `
        <div>
          
        </div>
        `;
      } else {
        document.querySelectorAll('.barrage')[i].innerHTML = `
        <div>
          <div class="barrage-item" style="background-color: rgba(0,0,0,0)"></div>
        </div>
        `;
      }
      console.log('数据清空!');
      console.log(document.querySelectorAll('.barrage')[i]);
    }
    for (let i = 0;i < messages.length; i++) {
      barrage[i % 4].children[0].append(...parseDom(`
        <div class="barrage-item">
          <div class="portait"><img src="${message[i].user_avatar}"/></div>
          <div class="text">${message[i].content}</div>
        </div>
      `))
    }
    messages.splice(0,16);
    console.log(messages);
    console.log(document.querySelectorAll('.barrage-item'));
    setTimeout(() => {
      request(`api/index/mes?last_id=${grobal.last_id}`, {
        credentials: 'include',
      }) // 首页弹幕轮询
      .then((data) => {
        console.log(data);
        console.log(data.message);
        grobal.last_id = data.message[data.message.length - 1].id;
        message = data.message;
        console.log(message);
        setBarrage(message);
      })
    }, 28000)
  }
})();