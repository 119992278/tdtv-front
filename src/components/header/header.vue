<template>
    <div class="header">
        <div class="header-left" @click="back">
            <div class="left-icon left-arrow"></div>
        </div>
        <div class="header-title">
            <span>空中电视直播</span>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                
            }
        },
        
    }
</script>

<style scoped>
  .header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background: #fff;
    line-height: 8vh;
    height: 8vh;
  }
  .header-left {
    position: absolute;
    top: 8px;
    left: 3px;
    display: block;
    width: 40px;
  }
 .header-left > .left-icon {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 16px;
    height: 16px;
  }
  .header-left > .left-arrow {
    background-image: url("../../assets/back.png");
    background-size: 100% 100%;
  }
  .header-title {
    margin: 0 100px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 17px;
  }
</style>