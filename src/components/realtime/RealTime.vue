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
import current from './Current'
import temperature from './Temperature'
import humidity from './Humidity'
import voltage from './Voltage'

export default {
  components: {
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
      listY: [[10, 10], [20, 20], [3, 1], [4, 0], [5, 1], [6, 2]],
      Ablisty: [],
      trail: [[10, 10, 1], [20, 20, 10], [30, 30, 25], [40, 40, 50], [50, 50, 100]],
      trailAbnormal: [[60, 60, 1], [70, 70, 75]],
      speedx: [],
      Abspeedx: [[1, 10], [2, 8]],
      speedy: [[1, 1], [2, 2], [3, 1], [4, 0], [5, 1], [6, 2]],
      Abspeedy: [],
      vibrationX: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 2, -2, -2],
      AbvibrationX: [],
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
      this.humidity = tem.noise[0][0]
      this.abhumidity = tem.noise[1][0]
      this.listX = tem.locationx[0]
      this.AblistX = tem.locationx[1]
      this.listY = tem.locationy[0]
      this.Ablisty = tem.locationy[1]
      this.trail = tem.location[0]
      this.trailAbnormal = tem.location[1]
      this.vibrationX = tem.vibration[0]
      this.AbvibrationX = tem.vibration[1]
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
  top:initialTop+2*chartHeight+2.5%;
  width: 11%;
  height: 2*chartHeight;
}
  .speedy{
    left:initialLeft+ 11%;
    top:initialTop+2*chartHeight+2.5%;
    height: 2*chartHeight;
    width: 11%;
  }
.vibrationX{
    left:initialLeft;
    top: initialTop+4*chartHeight+2.5%
    height: 2*chartHeight;
    width: 2*chartWidth;
}
.current{
  left:initialLeft+2*chartWidth+2%;
  top:initialTop+2.5%;
  width:10%;
  height:20%;
  z-index: 11
}
.voltage{
  left:initialLeft++2*chartWidth+12%;
  top:initialTop+2.5%
  width:10%;
  height:20%
}
  .temperature{
    left:initialLeft++2*chartWidth+25%;
    top:initialTop+4%
    height:15%
    width: 10%
    /*background-color #C10015*/
  }
  .humidity{
    left:initialLeft++2*chartWidth+35%;
    top:initialTop+4%
    height:15%
    width: 10%
    /*background-color #9C27B0*/
  }
</style>
