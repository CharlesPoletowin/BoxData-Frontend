<template>
  <div
    :id='myChartId'
    style="height:100%;"
    class="q-pa-md"
  >
  </div>
</template>

<script>
export default {
  data () {
    return {
      myEcharts: {},
      myChartId: Math.random().toString(),
      app: {
        count: 11
      },
      setIntervalId: -1,
      option: {
        visualMap: [{
          show: false,
          type: 'continuous',
          dimention: 2,
          seriesIndex: 0,
          min: 0,
          max: 1000
        }],
        title: {
          text: '实时位置数据'
        },
        xAxis: {
          splitLine: { show: false },
          type: 'value',
          min: 0,
          max: 1000
        },
        yAxis: {
          splitLine: { show: false },
          type: 'value',
          min: 0,
          max: 1000
        },
        series: [{
          data: [
            [-1, 3, 4],
            [1, -3, 1000],
            [3, 5, 5],
            [-1, 6, 4]
          ],
          type: 'line',
          smooth: true
        }]
      }
    }
  },
  props: ['bgColor'],
  mounted () {
    let $chartsDOM = document.getElementById(this.myChartId)
    if (!$chartsDOM) return
    // 使用svg渲染器，获得更好的性能
    let myEcharts = this.$echarts.init($chartsDOM, null, {
      renderer: 'canvas'
    })
    myEcharts.resize()
    window.addEventListener('resize', () => {
      myEcharts.resize()
    })
    myEcharts.setOption(this.option)
    this.myEcharts = myEcharts
    setInterval(() => {
      let data = [
        Math.round(Math.random() * 1000), Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)
      ]
      this.option.series[0].data.push(data)
      if (this.option.series[0].data.length >= 3) { this.option.series[0].data.shift() }
      this.myEcharts.setOption(this.option)
    }, 2100)
  }
}
</script>

<style lang="stylus" scoped></style>
