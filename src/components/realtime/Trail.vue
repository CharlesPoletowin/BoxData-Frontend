<template>
  <div :id='trail' style="height:100%;"></div>
</template>

<script>
export default {
  name: 'trail',
  data () {
    return {
      myEcharts: {},
      trail: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.trail))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: '',
        title: {
          text: '位置轨迹图',
          textStyle: {
            color: '#FFFAC0',
            baseline: 'bottom',
            fontSize: 12
          },
          left: 'center'
        },
        xAxis: {
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLine: {
            onZero: false,
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dashed'
            }
          },
          axisLine: {
            onZero: false,
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          scale: true
        },
        series: [
          {
            name: 'normal',
            data: that.list,
            type: 'scatter',
            symbolSize: function (data) {
              return 1000 / (data[2] + 200)
            },
            label: {
              emphasis: {
                show: true,
                formatter: 'normal',
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new that.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(129, 227, 238)'
                }, {
                  offset: 1,
                  color: 'rgb(25, 183, 207)'
                }])
              }
            }
          },
          {
            name: 'abnormal',
            data: that.listb,
            type: 'scatter',
            symbolSize: function (data) {
              return 1000 / (data[2] + 200)
            },
            label: {
              emphasis: {
                show: true,
                formatter: 'abnormal',
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new that.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                  offset: 0,
                  color: 'rgb(251, 118, 123)'
                }, {
                  offset: 1,
                  color: 'rgb(204, 46, 72)'
                }])
              }
            }
          },
          {
            name: 'actual',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              type: 'dotted',
              width: 1,
              opacity: 0.9,
              color: '#FFFFFF'
            },
            data: [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 0]]
          }
        ]
      })
      this.myEcharts = myChart
    }
  },
  watch: {
    list: {
      handler: function (val, oldVal) {
        this.drawLine()
      },
      deep: true
    }
  },
  props: ['list', 'listb']
}
</script>

<style scoped>

</style>
