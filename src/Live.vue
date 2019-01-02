<template>
    <div>
        <yheader></yheader>
        <div id='advert' class="advertising">
            <img src="../static/image/ad.jpeg" alt="广告图片">
            <div class='txt' @click="closeAd">
                广告
                <span id="xptimecount">0</span>
                s后关闭
            </div>
        </div>
        <div class='liveShow'>
            <!-- 正在直播频道 -->
            <div class='onShow'>
                <!-- <img src="../static/image/plug-in_bg1.jpeg" alt=""> -->
                <video width='100%' height='100%' src="rtsp://119.39.49.116:554/ch00000090990000001214.sdp?vcdnid=001" controls="controls">
                您的浏览器不支持 video 标签。
                </video>
            </div>
             <!-- 直播频道列表 -->
            <div class="onShowList">
                <p class="title">TV直播频道</p>
                <div class="picWrap">
                    <ul class="picBox">
                    <li v-if="poiDetailPics" v-for="(item,index) in poiDetailPics" :key="index" @click="toPics(index)">
                        <img class="poiPics" :src="imageUrl + item + '.png'">
                        <div class="wrap"></div>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import yheader from './components/header/header.vue'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Live',
  components: {
      yheader,
      videoPlayer
  },
  data() {
      return {
          poiDetailPics: ['cctv1_01','cctv1_02','cctv1_03','cctv1_04'],
          imageUrl:'http://t.live.cntv.cn/imagehd/'
      }
  },
  methods: {
      closeAd() {
          document.getElementById('advert').style.display = 'none'
      },
      toPics(){
          console.log(111)
      }
  },
}
</script>

<style>
.advertising{
    position: absolute;
    width: 100%;
    z-index: 99999;
    left: 0px;
    top: 0px;
    /* display:none; */
}
.advertising img{
    width:100%
}
.advertising .txt{
    position: absolute;
    z-index: 100000;
    width: 120px;
    height: 30px;
    background-color: #333;
    right: 10px;
    top: 10px;
    text-align: center;
    line-height: 30px;
    color: #FFF;
    font-size: 16px;
}
.liveShow{
    background-image: url("../static/image/adbackgroud.png");
    background-size: 100% 100%;
    height: 92vh;
    position:relative;
    color:#fff;
    overflow: hidden;
    padding:0 10px;
}
.liveShow .onShow{
    margin-top:35%;

}
.liveShow .onShow img{
    width: 100%;
    height: 155px;
    border-radius:10px;
}
.liveShow .picBox {
    display: flex;
}
.liveShow .picBox img{
    width: 90px;
    height:55px;
    border-radius:2px;
    
}
.onShowList{
    position:absolute;
    top:52%
}
.onShowList .title{
    text-align: left;
    margin-bottom: 4px;
}
.onShowList .picWrap{
    width:100%;
    overflow-x: auto;
}
.onShowList li{
    margin:0 3px;
    width: 90px;
    height: 50px;
    background: rgb(102, 102, 102);
}
</style>
