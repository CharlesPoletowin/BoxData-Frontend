<template>
  <q-page class="flex flex-center">
    <div class='glSimulator'>
    </div>
<!--    <div class='charts gl'>-->
<!--      <plainData />-->
<!--    </div>-->
    <div>
      <realtime />
    </div>
    <div>
      <statistics></statistics>
    </div>
    <!-- <div class="charts locationX">
      1234
    </div>
    <div class="charts locationY">
      5678
    </div> -->
<!--    <div class="charts speed">-->
<!--      &lt;!&ndash; <scrollData /> &ndash;&gt;-->
<!--&lt;!&ndash;      <testEcharts />&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="charts gauge">-->
<!--    </div>-->
<!--    <div class="charts vibrate">-->
<!--    </div>-->
<!--    <div class="charts abnormals">-->
<!--    </div>-->
<!--    <div class="charts health">-->
<!--    </div>-->
<!--    <div class="charts relation">-->
<!--    </div>-->
<!--    <div class="charts life">-->
<!--    </div>-->

  </q-page>
</template>

<script>
// import plainData from 'src/components/PlainData.vue'
// import scrollData from 'src/components/ScrollData.vue'
// import testEcharts from 'src/components/testEcharts.vue'
import realtime from 'src/components/realtime/RealTime.vue'
import statistics from 'src/components/statistics/Statistics'
export default {
  name: 'PageIndex',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // plainData,
    // scrollData
    // testEcharts,
    realtime,
    statistics
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
.glSimulator {
  height: 100vh;
  width: 100vw;
  background: grey;
  position: absolute;
}

</style>
