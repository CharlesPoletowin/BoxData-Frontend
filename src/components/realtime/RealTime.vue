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
      <div class="charts vibrationX">
        <vibrationX :list="vibrationX" ></vibrationX>
      </div>
      <div class="charts vibrationY">
        <vibrationY :list="vibrationY"></vibrationY>
      </div>
      <div class="charts current">
        <current :list="current"></current>
      </div>
      <div class="charts voltage">
        <voltage :list="voltage"></voltage>
      </div>
      <div class="charts temperature">
        <temperature :list="temperature"></temperature>
      </div>
      <div class="charts humidity">
        <humidity :list="humidity"></humidity>
      </div>
    </div>
</template>

<script>
import locationX from 'src/components/realtime/LocationX.vue'
import locationY from './LocationY'
import trail from './Trail'
import speed from './Speed'
import vibrationX from './VibrationX'
import vibrationY from './VibrationY'
import current from './Current'
import temperature from './Temperature'
import humidity from './Humidity'
import voltage from './Voltage'

export default {
  components: {
    vibrationY,
    vibrationX,
    locationX,
    locationY,
    trail,
    speed,
    current,
    temperature,
    humidity,
    voltage
  },
  data () {
    return {
      listX: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      listY: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      trail: [[1, 1, 1], [2, 0, 2], [3, -1, 3], [2, -2, 4], [1, -3, 5]],
      trailAbnormal: [[1, 0, 1], [2, 0, 1]],
      speed: [-1, -1, -1, -1, 0, 1, 1, 1, 1.0, 1, 1, -1, -2, -2, -1, 1, 1, 1, 1, 1, 0, -2, -1, -1, -1],
      vibrationX: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2, -2],
      vibrationY: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2, -2],
      current: [75],
      voltage: [80],
      temperature: [25],
      humidity: [45]
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
      } else if (tem.monitor === 'vibration') {
        this.vibrationX = tem.value
        this.vibrationY = tem.value
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
chartWidth = 13%;
chartHeight = 15%;
interval = 5%;
initialLeft = 1%;
initialTop = 7%;
widthMore = 8%;

.charts {
  padding: 0;
  height: chartHeight;
  width: chartWidth;
  position: absolute;
}

.locationX {
  left: initialLeft;
  top: initialTop;
  width: 13.1%;
}
.locationY {
  left: initialLeft;
  top: initialTop+chartHeight;
  width: 13.1%;
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
  color:#ffdc4a;
  font-size : 9px;
  font-weight: bold;
}
.trail{
  left:initialLeft+chartWidth;
  top:initialTop;
  height: 2*chartHeight;
  /*width: 15%;*/
  z-index: 12;
}
.speed{
  left:initialLeft;
  top:initialTop+2*chartHeight;
  width:2*chartWidth;
  height: 2*chartHeight;
}
.vibrationX{
    left:initialLeft;
    top: initialTop+4*chartHeight
    height: 2*chartHeight;
    width:chartWidth+0.1%;
}
.vibrationY{
    left:initialLeft+chartWidth;
    top: initialTop+4*chartHeight;
    height: 2*chartHeight;
    width:chartWidth;
}
.current{
  left:initialLeft+2*chartWidth;
  top:initialTop+2%;
  width:10%;
  height:20%;
  z-index: 11
}
.voltage{
  left:initialLeft++2*chartWidth+10%;
  top:initialTop+2%
  width:10%;
  height:20%
}
  .temperature{
    left:initialLeft++2*chartWidth+20%;
    top:initialTop+2%
    height:20%
  }
  .humidity{
    left:initialLeft++3*chartWidth+19.9%;
    top:initialTop+2%
    height:20%
  }
</style>
