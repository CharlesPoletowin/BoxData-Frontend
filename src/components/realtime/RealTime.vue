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
      <div class="charts trail">
        <trail :list="trail" :listb="trailAbnormal"></trail>
      </div>
      <div class="charts speed">
        <speed :list="speed"></speed>
      </div>
    </div>
</template>

<script>
import locationX from 'src/components/realtime/locationX.vue'
import locationY from './locationY'
import trail from './Trail'
import speed from './Speed'
export default {
  components: {
    locationX,
    locationY,
    trail,
    speed
  },
  data () {
    return {
      listX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      listY: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      trail: [[1, 1, 1], [2, 0, 2], [3, -1, 3], [2, -2, 4], [1, -3, 5]],
      trailAbnormal: [[1, 0, 1], [2, 0, 1]],
      speed: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1.0, 0.75, 0.75, 0.25, -2, -2, 1, 1, 1, 1, 1, 1, 0, -2, -1, -1, -1]
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
      } else if (tem.monitor === 'trail') {
        this.trail = tem.value
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
chartWidth = 12%;
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
  /*width: 12%;*/
}
.locationY {
  left: initialLeft;
  top: initialTop+chartHeight;
  /*width: 12%;*/
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
.trail{
  left:initialLeft+chartWidth;
  top:initialTop;
  height: 2*chartHeight;
  width: 15%;
}
.speed{
  left:initialLeft;
  top:initialTop+2*chartHeight;
  width:27%;
  height: 2*chartHeight;
}
</style>
