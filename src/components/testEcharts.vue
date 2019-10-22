<template>
    <div :id='mydemo' style="height:100%;">
    </div>

</template>

<script>
export default {
  data () {
    return {
      ddata: [13, 23, 54, 34, 46, 76],
      myEcharts: {},
      mydemo: Math.random().toString(),
      option: {
        title: {
          text: 'Demo Echarts',
          textStyle: {
            color: '#e4383c',
            fontSize: 12
          }
        },
        xAxis: {
          name: 'demo',
          nameLocation: "end",
          splitLine: { show: false },
          type: 'value',
          textStyle: {
            fontSize: 8
          }
        },
        yAxis: {
          name: 'what',
          nameLocation: 'center',
          splitLine: { show: false },
          type: 'value'
        },
        series: [{
          data: [1, 10, 20, 30, 50, 70],
          type: 'line',
          smooth: true
        }]
      }
    }
  },
  mounted () {
    let $chartsDOM = document.getElementById(this.mydemo)
    if (!$chartsDOM) return
    let myEcharts = this.$echarts.init($chartsDOM, null, {
      renderer: 'canvas'
    })
    myEcharts.resize()
    window.addEventListener('resize', () => {
      myEcharts.resize()
    })
    myEcharts.setOption(this.option)
    this.myEcharts = myEcharts
    // console.log(this.ddata)
  }
}
</script>

<style scoped lang="stylus">

</style>
