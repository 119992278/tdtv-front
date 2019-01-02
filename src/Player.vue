<template>
<div>
      <div class="md-subhead">
        <span>HLS Live / 直播</span>
      </div>
      <div class="item">
        <div class="player">
          <video-player class="vjs-custom-skin" 
                        :options="playerOptions" 
                        @ready="playerReadied">
          </video-player>
        </div>
      </div>
      </div>
</template>

<script>
    import Vue from 'vue'
    import videoPlayer from 'vue-video-player'
  // export
  export default {
    data() {
      return {
        playerOptions: {
          // videojs and plugin options
          height: '360',
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }},
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
        }
      }
    },
    components: {
      videoPlayer
    },
    methods: {
      playerReadied(player) {
        var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
        player.tech_.hls.xhr.beforeRequest = function(options) {
          // console.log(options)
          return options
        }
      }
    }
  }
</script>