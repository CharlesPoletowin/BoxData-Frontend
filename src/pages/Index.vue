<template>
  <q-page class="flex flex-center">
    <div class='glSimulator'>
      <h53d></h53d>
    </div>
    <div style="position:absolute; width: 100VW; height: 100VH; ">
      <div >
        <realtime />
      </div>
      <div>
        <statistics></statistics>
      </div>

    </div>

  </q-page>
</template>

<script>
import realtime from 'src/components/realtime/RealTime.vue'
import statistics from 'src/components/statistics/Statistics'
import h53d from '../components/h53d'
export default {
  name: 'PageIndex',
  components: {
    realtime,
    statistics,
    h53d
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
  position: absolute;
}
  .title1{
    position:absolute
    top:0%
    left:40%
    font-weight: bold
    font-size: 30px
    color: #fffac0
  }

</style>
