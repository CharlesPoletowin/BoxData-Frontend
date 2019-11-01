<template>
  <div :id="predictAge" style="height: 100%"></div>
</template>

<script>
export default {
  name: 'PredictAge',
  data () {
    return {
      myEcharts: {},
      predictAge: Math.random().toString(),
      list: [[15, 0], [0, 10], [-20, 12], [-30, 15], [-40, 30], [-50, 38], [-60, 40]]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.predictAge))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: '',
        title: {
          text: '预测寿命',
          textStyle: {
            color: '#fffac0',
            baseline: 'bottom'
          },
          left: 'center'
        },
        grid: {
          left: '0%',
          right: '2%',
          bottom: '0%',
          top: '15%',
          show: false,
          containLabel: true
        },
        xAxis: {
          min: -60,
          max: 20,
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#39b3c9'
            }
          },
          axisLabel: {
            color: '#FFFFFF'
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          min: 0,
          max: 40,
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#39b3c9'
            }
          },
          axisLabel: {
            color: '#FFFFFF'
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            id: 'a',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: that.list,
            areaStyle: {
              color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0, color: '#000000'
                },
                {
                  offset: 1, color: '#39b3c9'
                }
              ]
              )
            },
            itemStyle: {
              color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#000000'
              },
              {
                offset: 1, color: '#39b3c9'
              }])
            },
            lineStyle: {
              color: '#39b3c9'
            }
          }
        ]
      })
      this.myEcharts = myChart
    }
  }
}
</script>

<style scoped>

</style>
