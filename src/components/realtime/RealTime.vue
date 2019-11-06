<template>
    <div>
      <div class="charts locationX">
        <locationX :list="listX" :listb="AblistX"/>
        <div class="words">时间</div>
        <div class="words2">X</div>
      </div>
      <div class="charts locationY">
        <locationY :list="listY" :listb="Ablisty"/>
        <div class="words3">时间</div>
        <div class="words4">Y</div>
      </div>
      <div class="charts trail">
        <trail :list="trail" :listb="trailAbnormal"></trail>
      </div>
      <div class="charts speed">
        <speedX :list="speedx" :listb="Abspeedx"></speedX>
      </div>
      <div class="charts speedy">
        <speedY :list="speedy" :listb="Abspeedy"></speedY>
      </div>
      <div class="charts vibrationX">
        <vibrationX :list="vibrationX" :listb="AbvibrationX"></vibrationX>
      </div>
      <div class="charts vibrationY">
        <vibrationY :list="vibrationY" :listb="AbvibrationY"></vibrationY>
      </div>
      <div class="charts current">
        <current :list="current"></current>
      </div>
      <div class="charts voltage">
        <voltage :list="voltage"></voltage>
      </div>
      <div class="charts temperature">
        <temperature :list="temperature" :listb="abtemperature"></temperature>
      </div>
      <div class="charts humidity">
        <humidity :list="humidity" :listb="abhumidity"></humidity>
      </div>
    </div>
</template>

<script>
import locationX from 'src/components/realtime/LocationX.vue'
import locationY from './LocationY'
import trail from './Trail'
import speedX from './SpeedX'
import speedY from './SpeedY'
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
    speedX,
    speedY,
    current,
    temperature,
    humidity,
    voltage
  },
  data () {
    return {
      listX: [[1, 1], [2, 2], [3, 1], [4, 0], [5, 1], [6, 2]],
      AblistX: [],
      listY: [[1, 1], [2, 2], [3, 1], [4, 0], [5, 1], [6, 2]],
      Ablisty: [],
      trail: [[1, 1, 1], [2, 0, 2], [3, -1, 3], [2, -2, 4], [1, -3, 5]],
      trailAbnormal: [[1, 0, 1], [2, 0, 1]],
      speedx: [],
      Abspeedx: [[1, 10], [2, 8]],
      speedy: [[1, 1], [2, 2], [3, 1], [4, 0], [5, 1], [6, 2]],
      Abspeedy: [],
      vibrationX: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2, -2],
      AbvibrationX: [],
      vibrationY: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2, -2],
      AbvibrationY: [],
      current: [75],
      voltage: [80],
      temperature: [25],
      abtemperature: [],
      humidity: [45],
      abhumidity: []
    }
  },
  props: {
  },
  mounted () {
  },
  sockets: {
    message: function (val) {
      let tem = JSON.parse(val)
      this.temperature = tem.temperature[0][0]
      this.abtemperature = tem.temperature[1][0]
      this.humidity = tem.humidity[0][0]
      this.abhumidity = tem.humidity[1][0]
      this.listX = tem.locationx[0]
      this.AblistX = tem.locationx[1]
      this.listY = tem.locationy[0]
      this.Ablisty = tem.locationy[1]
      this.trail = tem.location[0]
      this.trailAbnormal = tem.location[1]
      this.vibrationX = tem.vibration[0]
      this.AbvibrationX = tem.vibration[1]
      this.vibrationY = tem.vibration[0]
      this.AbvibrationY = tem.vibration[1]
      this.speedx = tem.speedx[0]
      this.Abspeedx = tem.speedx[1]
      this.speedy = tem.speedy[0]
      this.Abspeedy = tem.speedy[1]
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
  width:chartWidth;
  height: 2*chartHeight;
}
  .speedy{
    left:initialLeft+chartWidth;
    top:initialTop+2*chartHeight;
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
