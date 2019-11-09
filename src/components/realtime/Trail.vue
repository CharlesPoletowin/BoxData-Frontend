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
        grid: {
          top: '20%',
          left: '5%',
          right: '5%',
          bottom: '15%'
        },
        // title: {
        //   text: '位置轨迹图',
        //   textStyle: {
        //     color: '#FFFAC0',
        //     baseline: 'bottom',
        //     fontSize: 12
        //   },
        //   left: 'center'
        // },
        xAxis: {
          min: 0,
          max: 310,
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
          min: 0,
          max: 310,
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
              if (data[2] < 1) {
                return 4
              } else if (data[2] > 100) {
                return 12
              } else return (2 * data[2] + 98) / 25
            },
            label: {
              emphasis: {
                show: true,
                formatter: 'normal',
                position: 'top'
              }
            },
            itemStyle: {
              // normal: {
              //   // shadowBlur: 10,
              //   // shadowColor: 'rgba(25, 100, 150, 0.5)',
              //   // shadowOffsetY: 5,
              //   color: new that.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              //     offset: 0,
              //     color: 'rgb(129, 227, 238)'
              //   }, {
              //     offset: 1,
              //     color: 'rgb(25, 183, 207)'
              //   }])
              // },
              color: function (params) {
                if (params.value[2] < 1) {
                  return 'rgba(25, 183, 207, 0.3)'
                } else if (params.value[2] > 100) {
                  return 'rgba(25, 183, 207, 1)'
                } else {
                  let temp = (params.value[2] + 49) / 150
                  let a = 'rgba(25, 183, 207, ' + temp.toString() + ' )'
                  return a
                }
              }
            }
          },
          {
            name: 'abnormal',
            data: that.listb,
            type: 'scatter',
            symbolSize: function (data) {
              if (data[2] < 1) {
                return 4
              } else if (data[2] > 100) {
                return 12
              } else return (2 * data[2] + 98) / 25
            },
            label: {
              emphasis: {
                show: true,
                formatter: 'abnormal',
                position: 'top'
              }
            },
            itemStyle: {
              // normal: {
              //   // shadowBlur: 10,
              //   // shadowColor: 'rgba(120, 36, 50, 0.5)',
              //   // shadowOffsetY: 5,
              //   color: new that.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
              //     offset: 0,
              //     color: 'rgb(251, 118, 123)'
              //   }, {
              //     offset: 1,
              //     color: 'rgb(204, 46, 72)'
              //   }])
              // },
              color: function (params) {
                if (params.value[2] < 1) {
                  return 'rgba(251, 118, 123, 0.3)'
                } else if (params.value[2] > 100) {
                  return 'rgba(251, 118, 123, 1)'
                } else {
                  let temp = (params.value[2] + 49) / 150
                  let a = 'rgba(251, 118, 123, ' + temp.toString() + ' )'
                  return a
                }
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
            }
            // data: [[0, 0], [0, 310], [310, 310], [310, 0], [0, 0]]
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
