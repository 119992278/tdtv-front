<template>
    <div>
        <video-player class="video-player vjs-custom-skin" 
            ref="videoPlayer"
            @ready="playerReadied" 
            @play="onPlayerPlay($event)" 
            @pause="onPlayerPause($event)"
            @canplaythrough="onPlayerCanplaythrough($event)"
            :playsinline="true" 
            :options="playerOptions" 
            >
        </video-player>
    </div>

</template>

<script>
import "video.js/dist/video-js.css";
import "videojs-flash";
import { videoPlayer } from "vue-video-player";
//引入hls.js
import "videojs-contrib-hls.js/src/videojs.hlsjs";
export default {
    name: "baseVideoPlayer",
    components: {
        videoPlayer //注册组件
    },
    props: {
        playerOptions: {
            type: Object,
            default() {
                return {
                    // playerOptions: {
                    //     //playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    //     autoplay: true, //如果true,浏览器准备好时开始回放。
                    //     // muted: false, // 默认情况下将会消除任何音频。
                    //     loop: false, // 导致视频一结束就重新开始。
                    //     preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    //     language: "zh-CN",
                    //     aspectRatio: "4:2", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    //     fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    //     notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    //     controlBar: {
                    //         timeDivider: true,
                    //         // durationDisplay: true,
                    //         remainingTimeDisplay: false,
                    //         fullscreenToggle: true //全屏按钮
                    //     }
                    // }
                };
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player;
        }
    },
    methods: {
        onPlayerPlay() {
            this.$emit("playerPlay");
        },
        onPlayerPause() {
            this.$emit("playerPause");
        },
        onPlayerCanplaythrough() {
            this.$emit("playerCanplaythrough");
        },
        playerReadied(player) {
            // document.getElementById("playerBtn").click();
            // document.getElementsByClassName("vjs-tech")[0].play();
            // console.log(document.getElementsByClassName("vjs-tech")[0]);
        }
    },
    mounted() {}
};
</script>
<style lang='stylus' scoped>
>>>.vjs-big-play-button {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 2em;
    width: 2em;
    line-height: 2em;
}
</style>
