
let myChart = echarts.init(document.getElementById('china-map'));

let grobal = JSON.parse(window.sessionStorage.getItem('grobal'));

let colorList = ['#29454c', '#4c6b73', '#819d9e','#b2ced8', '#ced3e0', '#eeeeee'];

let provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];

let provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
// 初始化echarts
initQRcode(); // 初始化二维码

initEcharts();

sessionStorage.setItem("need-refresh", true);
window.onload = function () {
  setTimeout(() => {
    convert2canvas();
  }, 500); // 无法取消echarts散点的动画,通过延迟截屏,来截取红点
}

function initQRcode() { // 初始化
  console.log(grobal);
  var img = new Image();
  // 关键点，设置crossOriginal属性
  img.setAttribute('crossOrigin', 'anonymous');
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  img.src = grobal.avatar;
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  }
  // let portaitImg = canvas.convertToImage(canvas, canvas.width, canvas.height);
  // portaitImg.style.cssText = 
  // 'width:100%;height:100%;'
  // ;
  // document.querySelector('.portait').removeChild(canvas);
  // document.querySelector('.portait').append(portaitImg);
  // document.querySelector('.portait').append(document.querySelector('.portait img'));
  // //document.querySelector('.portait > img').setAttribute('src', grobal.avatar);
  document.querySelector('.message').innerHTML = `<div>我在${grobal.province}</div><div>我为湖北加油! 我为中国加油!</div>`;
  console.log(window.location);
  let QRcode =  new QRCode(document.querySelector(".QRcode"),{
                                                              text: window.location.href.split('?')[0].replace('share.html', 'index.html'),// 项目首目录记得改掉
                                                              colorDark: '#000000',
                                                              colorLight: '#ffffff',
                                                              correctLevel: QRCode.CorrectLevel.H
                                                            });
  let canvaQRcode = document.querySelector('.QRcode > canvas');
  let imgQRcode = Canvas2Image.convertToImage(canvaQRcode, canvaQRcode.width, canvaQRcode.height);
  imgQRcode.style.cssText = `
    width:14.27vw;
    height:14.27vw;
    display:block;
  `
  console.log(imgQRcode);
  document.querySelector('.QRcode').removeChild(canvaQRcode);
  document.querySelector('.QRcode').append(imgQRcode);
  document.querySelector('.QRcode').removeChild(document.querySelector('.QRcode img'));

}
function initEcharts() {
  let option = {
    series: [
      {
        name: '中国',
        data: grobal.option,
        type: 'map',
        mapType: 'china',
        roam: false,//是否开启鼠标缩放和平移漫游
        top: "3%",//组件距离容器的距离
        zoom:1.1,
        selectedMode : 'single',
        label: {
          normal: {
            show: false,//显示省份标签
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
            borderColor: '#c8c2c6',//区域边框颜色
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
            borderColor: '#c8c2c6',
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
        },
        markPoint: { //图表标注。
          symbol: 'circle',
          symbolSize: 7,//图形大小
          label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              }
          },
          itemStyle: {
            normal: {
              color: 
              (function () {
                if(grobal.province_id !== 35 && grobal.province !== "海外") {
                  return '#3FA0A7'
                } else {
                  return 'rgba(0, 0, 0, 0)'
                }
              })(),
              border: '1px solid #fff',
              borderColor:
              (function () {
                if(grobal.province_id !== 35 && grobal.province !== "海外") {
                  return '#ced3e0'
                } else {
                  return 'rgba(0, 0, 0, 0)'
                }
              })(),

            }
          },
          data: (function () {
            let coordArr = [];
            coordArr.push({coord: [grobal.longitude, grobal.latitude]});
            return coordArr;
          })()
        }
      }
    ]
  };
  myChart.setOption(option);
  myChart.off("click");
}
function convert2canvas() {
  // 获取需要转化的dom对象 直接使用$('.wrap')选取的为jquery对象 无法继续操作
  var cntElem = document.body;
  var shareContent = cntElem; //需要截图的包裹的（原生的）DOM 对象
  var width = shareContent.offsetWidth; //获取dom 宽度
  var height = shareContent.offsetHeight; //获取dom 高度
  var canvas = document.createElement("canvas"); //创建一个canvas节点
  var scale = 2; //定义任意放大倍数 支持小数
  canvas.width = String(+width * scale); //定义canvas 宽度 * 缩放
  canvas.height = String(+height * scale); //定义canvas高度 *缩放
  console.log(canvas.width, canvas.height);
  //放大后再缩小提高清晰度
  canvas.getContext("2d").scale(scale, scale);
  //document.body.append(canvas);
  console.log(width)
  console.log(height)
  // 设置html2canvas方法的配置
  var opts = {
    scale: scale, // 添加的scale 参数
    canvas: canvas, //自定义 canvas
    allowTaint: true, //允许画布上有跨域图片 不建议使用 后面详细补充
    // logging: true, //日志开关，便于查看html2canvas的内部执行流程
    width: width, //dom 原始宽度
    height: height,
    dpi: 4, // 设置像素点,增加清晰度
    useCORS: true, // 【重要】开启跨域配置
    scale:1 // 设置倍率
  };
  // 开始转化为canvs对象
  html2canvas(shareContent, opts).then(function(canvas) {

    var context = canvas.getContext('2d');
    // 【重要】关闭抗锯齿
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    // 【重要】默认转化的格式为png,也可设置为其他格式
    let imgUrl = canvas.toDataURL('jpg'); // 将图片在放大的canvas画出后,要导入url,不然图片只有一部分
    var img = document.createElement('img');
    img.src=imgUrl;
    img.style.cssText = `
    width:100vw;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    z-index:999;
    opacity:0;
    `
    document.body.append(img);
    console.log(img);
  })
}
