<template>
    <div class='overall'>
        <yheader></yheader>
        <div id='advert' class="advertising">
            <img :src="adFullScreen" alt="广告图片">
            <div class='txt' @click='closeScreenAd'>
                广告
                <span id="xptimecount">{{fullAdCount}}</span>
                s后关闭
            </div>
        </div>
        <div class='liveShow'>
                <div class='onShowPanel'>
                    <!-- 直播广告  -->
                   <video id='h5video' class='h5video' controls preload loop muted>
                        <source :src="adVideoSource" type="video/mp4">
                        您的浏览器不支持 video 标签。
                    </video>
                    <!-- 直播频道 -->
                    <base-video-player id='videoPlayer' class='videoPlayer' ref="iptvPlayer" 
                        :playerOptions="playerOptions" 
                        @playerPlay="onPlayerPlay" 
                        @playerPause="onPlayerPause" 
                        @canplay="onPlayerCanplay"
                        @playerCanplaythrough="onPlayerCanplaythrough"
                    ></base-video-player>
            </div>
             <!-- 频道列表 -->
            <div class="onShowList">
                <p class="title">TV直播频道</p>
                <div class="picWrap">
                    <ul class="picBox" v-if="playList" >
                    <li v-for="(item,index) in playList" :key="index" @click="toogleVideo(item, index)">
                        <img class="poiPics" :src="imageUrl + item.src + '.png'">
                        <div class="wrap"></div>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 底部广告 -->
        <div class='adbuttom'>
            <img class='dynamic' :src="adGifImg" alt="底部广告">
            <img :src="adButtomImg" alt="底部广告">
        </div>
    </div>
</template>

<script>
import yheader from '@/components/header/header.vue'
import BaseVideoPlayer from "@/components/base/baseVideoPlayer";
import TVIMGCover from "../../../static/image/TVIMGCover.jpg";
import adResource from '@/lib/index.js'
export default {
    name: 'Live',
    components: {
                yheader,
                BaseVideoPlayer,
    },
    data() {
        return {
            fullAdCount:8, //全屏广告倒计时,默认8秒
            adVideoCount:30, //视频广告倒计时,默认30秒
            imageUrl:'http://t.live.cntv.cn/imagehd/', // cctv地址
            adFullScreen:adResource.fullScreenImg,
            adVideoSource:adResource.videoSource,
            adButtomImg:adResource.buttomImg,
            adGifImg:adResource.gifImg,
            countTimer:null,
            playList: [
                {
                    src:'cctv1_01',
                    type: "application/x-mpegURL",
                    play_url: "http://ivi.bupt.edu.cn/hls/cctv1.m3u8"
                },{
                    src:'cctv2_01',
                    type: "application/x-mpegURL",
                    play_url: "http://ivi.bupt.edu.cn/hls/cctv2.m3u8"
                },{
                    src:'cctv3_01',
                    type: "application/x-mpegURL",
                    play_url: "http://ivi.bupt.edu.cn/hls/cctv3.m3u8"
                },{
                    src:'cctv4_01',
                    type: "application/x-mpegURL",
                    play_url: "http://ivi.bupt.edu.cn/hls/cctv4.m3u8"
                },{
                    src:'cctv6_01',
                    type: "application/x-mpegURL",
                    play_url: "http://ivi.bupt.edu.cn/hls/cctv6.m3u8"
                }
                ],
                    playerOptions: {
                        autoplay: false, //如果true,浏览器准备好时开始回放。
                        loop: false, // 导致视频一结束就重新开始。
                        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: "zh-CN",
                        aspectRatio: "4:2", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [ //默认播放视频源
                            {
                                withCredentials: false,
                                type: "application/x-mpegURL",
                                src:"http://ivi.bupt.edu.cn/hls/cctv3.m3u8",
                            }
                        ],
                        poster: TVIMGCover, //封面地址
                        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        controlBar: {
                            timeDivider: true,
                            // durationDisplay: true,
                            remainingTimeDisplay: false,
                            fullscreenToggle: false //全屏按钮
                        }
                    },
        }
    },
    created() {

    },
    mounted() {
            this.toCountFullAd()
    },
    computed: {
        player() {
            return this.$refs.iptvPlayer.$refs.videoPlayer.player;
        }
    },
    methods: {
        //手动关闭全屏广告
        closeScreenAd() {
            if(this.fullAdCount === 0){
                document.getElementById('advert').style.top = '-100%'
                setTimeout(() => {
                    document.getElementById('advert').style.display = 'none'
                    this.toPlayAdVideo()
                },1000)
            }
        },
        //切换视频源
        toogleVideo(item){
            //this.onPlayerCanplay()
            this.player.pause();
            this.playerOptions.sources[0].src = item.play_url;
            let self = this;
            setTimeout(() => {
                this.player.play();
            }, 500);
        },
        //播放视频广告
        toPlayAdVideo(){
            console.log('播放视频广告')
            let last = 0
            let h5video = document.getElementById("h5video");
            h5video.play()
            h5video.ontimeupdate = function () { //禁止拖动滚动条
                var current = h5video.currentTime;
                if(current - last > 2) {
                    h5video.currentTime = last;
                } else {
                last = current;
                }
            }
            this.countTimer = setInterval(()=> {
                this.adVideoCount -- 
                if(this.adVideoCount === 0){
                   console.log('视频广告结束')
                   clearTimeout(this.countTimer)
                   h5video.pause() 
                   document.getElementById('h5video').style.display = 'none'
                   this.toPlayLiveVideo()
                }
            }, 1000);  
        },
        //播放直播数据
        toPlayLiveVideo(){
            console.log('播放直播数据')
            document.getElementById('videoPlayer').style.display = 'block'
        },
        //计算全屏广告
        toCountFullAd(){
            this.countTimer = setInterval(()=> {
                this.fullAdCount --
                if(this.fullAdCount === 0){
                    clearTimeout(this.countTimer)
                    this.closeScreenAd()
                }
            }, 1000);  
        },
        onPlayerPlay(){
            console.log("play");
        },
        onPlayerPause(){
            console.log("pause");
        },
        onPlayerCanplaythrough(){
            console.log("onPlayerCanplaythrough");
        },
        onPlayerCanplay(){
            console.log('取消播放')
        }
    }
}
</script>

<style lang="scss">
.overall{
    overflow: hidden;
}
.advertising{
    z-index: 99;
    position: absolute;
    width: 100%;
    z-index: 99999;
    left: 0px;
    top: 0px;
    transition: top .4s .1s;
    img{
        width:100%;
        height:100vh;
    }
    .txt{
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
}
.liveShow{
    background-image: url("../../../static/image/defaultbg.png");
    background-size: 100% 100%;
    height: 92vh;
    position:relative;
    color:#fff;
    overflow: hidden;
    padding:0 10px;
    .onShowPanel{
        margin-top:18vh;
        img{
            width: 100%;
            height: 155px;
            border-radius:10px;
        }
        .h5video{
            width: 100%;
            height:25vh;
        }
        .videoPlayer{
            display:none;
        }
    }
    .picBox {
        display: flex;
        width:95vw;
        img{
            width: 90px;
            height:55px;
            border-radius:2px;
        }
    }
}
.adbuttom{
    position:absolute;
    bottom:0;
    img{
        width: 100vw;
        height: 30vh;
    }
    .dynamic{
        position: absolute;
        height: 10vh;
    }
}
.onShowList{
  position:absolute;
  top:48vh;
    li{
        border:1px solid #bbb6b6;
        margin:0 3px;
        width: 90px;
        height: 54px;
        background:#fff;
        border-radius:4px;
    }
    .title{
        text-align: left;
        margin-bottom: 4px;
    }
    .picWrap{
        width:100%;
        overflow-x: auto;
    }
}
</style>
