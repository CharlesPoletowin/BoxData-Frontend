<template>
  <q-page class="flex flex-center">
    <div class='glSimulator'>
    </div>
    <div class='charts gl'>
      <plainData />
    </div>
    <div class="charts location">
      1234
    </div>
    <div class="charts speed">
      <!-- <scrollData /> -->
      <testEcharts />
    </div>
    <div class="charts gauge">
      <websocket />
    </div>
    <div class="charts vibrate">
    </div>
    <div class="charts abnormals">
    </div>
    <div class="charts health">
    </div>
    <div class="charts relation">
    </div>
    <div class="charts life">
    </div>

  </q-page>
</template>

<script>
import plainData from 'src/components/PlainData.vue'
// import scrollData from 'src/components/ScrollData.vue'
import testEcharts from 'src/components/testEcharts.vue'
import websocket from 'src/components/websocket.vue'
export default {
  name: 'PageIndex',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    plainData,
    // scrollData
    testEcharts,
    websocket

  },
  computed: {
  },
  methods: {
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
chartWidth = 20%;
chartHeight = 15%;
interval = 5%;
initialLeft = 3%;
initialTop = 5%;
widthMore = 8%;

.glSimulator {
  height: 100vh;
  width: 100vw;
  background: grey;
  position: absolute;
}

.charts {
  padding: 0;
  height: 15%;
  width: chartWidth;
  background: rgba(0, 117, 196, 0.8);
  position: absolute;
}

.gl {
  height: 50%;
  width: 50%;
  left: 10%;
}

.location {
  left: initialLeft;
  top: initialTop;
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

.abnormals {
  left: initialLeft;
  bottom: initialTop;
  width: chartWidth + widthMore;
}

.health {
  left: initialLeft + chartWidth + widthMore + interval;
  bottom: initialTop;
  width: chartWidth + widthMore;
}

.relation {
  left: initialLeft + 2 * (chartWidth + widthMore + interval);
  bottom: initialTop;
  width: chartWidth + widthMore;
}

.life {
  left: 70%;
  height: 30%;
}
</style>
