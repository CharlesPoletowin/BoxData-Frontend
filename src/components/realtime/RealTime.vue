<template>
    <div>
      <div class="charts locationX">
        <locationX :list="listX" />
        <div class="words">时间</div>
        <div class="words2">X</div>
      </div>
      <div class="charts locationY">
        <locationY :list="listY"/>
        <div class="words3">时间</div>
        <div class="words4">Y</div>
      </div>
    </div>
</template>

<script>
import locationX from 'src/components/realtime/locationX.vue'
import locationY from './locationY'
export default {
  components: {
    locationX,
    locationY
  },
  data () {
    return {
      listX: [],
      listY: []
    }
  },
  props: {
  },
  mounted () {
  },
  sockets: {
    message: function (val) {
      let tem = JSON.parse(val)
      if (tem.monitor === 'locationx') {
        this.listX = tem.value
      } else if (tem.monitor === 'locationy') {
        this.listY = tem.value
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
chartWidth = 15%;
chartHeight = 15%;
interval = 5%;
initialLeft = 1%;
initialTop = 7%;
widthMore = 8%;

.charts {
  padding: 0;
  height: chartHeight;
  width: chartWidth;
  background: rgba(0, 200, 200, 0.8);
  position: absolute;
}

.locationX {
  left: initialLeft;
  top: initialTop;
  width: 10%;
}
.locationY {
  left: initialLeft;
  top: initialTop+chartWidth;
  width: 10%;
}
.speed {
  left: initialLeft + chartWidth + interval;
  top: initialTop;
}

.vibrate {
  left: initialLeft + 2 * (chartWidth + interval);
  top: initialTop;
}

.gauge {
  left: initialLeft + 3 * (chartWidth + interval);
  top: initialTop;
}
.words{
    position:absolute;
    bottom:0;
    right:0;
    color:#d1e6eb;
    font-size : 9px;
    font-weight: bold;
}
.words2{
  position:absolute;
  top:0;
  left:0;
  color:#53fdfe;
  font-size : 9px;
  font-weight: bold;
}
.words3{
  position:absolute;
  bottom:0;
  right:0;
  color:#d1e6eb;
  font-size : 9px;
  font-weight: bold;
}
.words4{
  position:absolute;
  top:0;
  left:0;
  color:#f0f;
  font-size : 9px;
  font-weight: bold;
}
</style>
