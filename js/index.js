(function () {
  let myChart = echarts.init(document.getElementById('china-map'));

  let colorList = ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea'];

  let seriesData = [{
    name: '北京',
    value: 100000
  }, {
    name: '天津',
    value: 1000
  }, {
    name: '上海',
    value: 7000
  }, {
    name: '重庆',
    value: 8000
  }, {
    name: '河北',
    value: 60
  }, {
    name: '河南',
    value: 60
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
    value: 60
  }, {
    name: '安徽',
    value: 0
  }, {
    name: '山东',
    value: 60
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
    value: 60
  }, {
    name: '广西',
    value: 60
  }, {
    name: '甘肃',
    value: 0
  }, {
    name: '山西',
    value: 60
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
    value: 597
  }, {
    name: '青海',
    value: 0
  }, {
    name: '西藏',
    value: 0
  }, {
    name: '四川',
    value: 60
  }, {
    name: '宁夏',
    value: 0
  }, {
    name: '海南',
    value: 60
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
{id: 4, name: "河北省"},
{id: 5, name: "山西省"},
{id: 6, name: "辽宁省"},
{id: 7, name: "吉林省"},
{id: 8, name: "黑龙江省"},
{id: 9, name: "江苏省"},
{id: 10, name: "浙江省"},
{id: 11, name: "安徽省"},
{id: 12, name: "福建省"},
{id: 13, name: "江西省"},
{id: 14, name: "浙江省"},
{id: 15, name: "江西省"},
{id: 16, name: "山东省"},
{id: 17, name: "河南省"},
{id: 18, name: "湖北省"},
{id: 19, name: "湖南省"},
{id: 20, name: "广东省"},
{id: 21, name: "海南省"},
{id: 22, name: "四川省"},
{id: 23, name: "贵州省"},
{id: 24, name: "云南省"},
{id: 25, name: "陕西省"},
{id: 26, name: "甘肃省"},
{id: 27, name: "青海省"},
{id: 28, name: "台湾省"},
{id: 29, name: "内蒙古"},
{id: 30, name: "广西"},
{id: 31, name: "西藏"},
{id: 32, name: "宁夏"},
{id: 33, name: "新疆"},
{id: 34, name: "香港"},
{id: 35, name: "澳门"}
]

  initEcharts(); // 初始化

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
        splitList: [   
          {start: 10000, end:Infinity},{start: 1000, end: 9999},  
          {start: 100, end: 999},{start: 10, end: 99},  
          {start: 0, end: 10},  
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
                color: '#000',
                fontSize: 8,
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
              borderColor: '#0550c3',//区域边框颜色
              color: 
                function (params) { // 设置颜色
                  let itemValue = params.data.value;
                  let colorList = ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea'];
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
              color:
                function (params) { // 设置颜色
                  let itemValue = params.data.value;
                  let colorList = ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea'];
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
        }
      ]
    };
    myChart.setOption(option);

    myChart.off("click");
  }


  // 请求部分
  let rootUrl = 'http://127.0.0.1:8080';
  let encoded_uri = encodeURIComponent(rootUrl + '/index.html');
  let id = '';
  let grobal = {
    avatar: '',
    rootUrl: '',
    province: '',
    province_id: '',
    latitude: 0,
    longitude: 0
  };
  window.grobal = grobal;
  window.grobal.rootUrl = rootUrl;
  function request (url, setting={}) {
    return fetch(rootUrl + url, setting)
    .then((res)=> {
      if (res.status === 401) {
        window.location = rootUrl + `/auth/jump?redirect=${encoded_uri}`;
      } else {
        return res.json();
      }
    })
    .catch(err=> {
      console.log(err);
    })
  }
  // request('') // 请求测试
  // .then((data) => {
  //   console.log(data);
  // })
  // request('/auth/fake/{id}') // 测试接口
  // .then((data) => {
  //   console.log(data);
  // })
  request('/api/index') // 首页内容请求
  .then((data) => {
    console.log(data);
    window.grobal.avatar = data.avatar;
    let option = data.province.map((item) => {
      return {
        name: item.name,
        value: item.mes_amount
      }
    })
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
                let colorList = ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea'];
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
                let colorList = ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea'];
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
    
    initEcharts(); // 重新初始化

    let barrage = document.querySelectorAll('.barrage');
    for (let i = 0;i < data.message.length; i++) {
      barrage[i % 4].children[0].innerHTML += data.message[i].content;
    }
    let style = document.styleSheets[0]; // 通过在chrome 中打开,找到样式表,来手动插入样式
    style.insertRule(`
    .barrage > p {
      animation: ${barrage[0].children[0].innerHTML.length / 2}s wordsLoop linear infinite normal;
    }
    `, 11);
    // for (let i = 0; i < barrage.length; i++) { // 没用 ? why
    //   barrage[i].children[0].style.animation = +barrage[0].children[0].innerHTML.length / 2 + 's' + 'wordsLoop linear infinite normal';
    // }
    let geocoder = new qq.maps.Geocoder({ // 调用腾讯地图 API 将经纬度转化为 省份
      complete: function(res) {
          console.log(res); 
          let province = res.detail.addressComponents.province;
          window.grobal.province = province;
          window.grobal.province_id = findProvinceId.findIndex((item) => {
            return item.name === province; 
          })
          console.log(window.grobal);
      }
    })
    let latLng = new qq.maps.LatLng(data.latitude, data.longitude);
    geocoder.getAddress(latLng);
    [window.grobal.latitude, window.grobal.longitude] = [data.latitude, data.longitude];
  })
  request('/api/index/mes') // 首页弹幕轮询
  .then((data) => {
    console.log(data);
    console.log(data.message);
    let barrage = document.querySelectorAll('.barrage');
    for (let i = 0;i < data.message.length; i++) {
      barrage[i % 4].children[0].innerHTML += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data.message[i].content;
    }
  })
  document.querySelector('.button').onclick = function () {
    let postMessageParams = {
      content: document.querySelector('.input-box > input').value || '奥里给',
      province_id: window.grobal.province_id
    }
    if (window.grobal.province_id) {
      request('/api/message', {
        method: 'POST',
        body: JSON.stringify(postMessageParams)
      })
      .then((data) => {
        console.log(data);
        location = '/share.html';
        window.sessionStorage.setItem('grobal', JSON.stringify(window.grobal));
      })
    } else {
      console.log(正在获取省份中);
    }
  }
})();