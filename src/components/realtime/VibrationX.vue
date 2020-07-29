<template>
  <div :id='vibration' style="height:100%;"></div>
</template>

<script>
export default {
  name: 'VibrationX',
  data () {
    return {
      myEcharts: {},
      vibration: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.vibration))
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
          right: '13%',
          bottom: '7%'
        },
        // title: {
        //   text: '振幅X,Y轴',
        //   textStyle: {
        //     color: '#FFFAC0',
        //     baseline: 'bottom',
        //     fontSize: 14
        //   },
        //   left: 'left'
        // },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#53fdfe',
              width: 1
            },
            position: 'bottom'
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
            // margin: 2,
            // color: '#d1e6eb',
            // interval: 0,
            // fontWeight: 'lighter',
            // fontSize: 8
          },
          name: '时间',
          nameGap: 1,
          nameTextStyle: {
            color: '#d1e6eb',
            fontWeight: 'bold',
            fontSize: 10
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          // min: -2,
          // max: 2,
          // data: [-2, -1, 0, 1, 2],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#53fdfe',
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 2,
            color: '#d1e6eb',
            interval: 'auto',
            fontWeight: 'lighter',
            fontSize: 10
          },
          name: 'X',
          nameGap: 0,
          nameTextStyle: {
            color: '#d1e6eb',
            fontWeight: 'bold',
            fontSize: 10
          }
        },
        toolbox: {
          show: false,
          left: 'center',
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        // visualMap: {
        //   show: false,
        //   top: 10,
        //   right: 10,
        //   pieces: [
        //     // { gt: -2,
        //     //   lte: -1,
        //     //   color: '#53fdfe'
        //     // },
        //     {
        //       gt: -3,
        //       lt: -1,
        //       color: '#cc0033'
        //     }, {
        //       gte: -1,
        //       lte: 1,
        //       color: '#ffde33'
        //     },
        //     {
        //       gt: 1,
        //       lte: 3,
        //       color: '#cc0033'
        //     }
        //     // {
        //     //   gt: 1,
        //     //   lte: 2,
        //     //   color: '#660099'
        //     // }
        //     //   {
        //     //   gt: 300,
        //     //   color: '#7e0023'
        //     // }
        //   ],
        //   outOfRange: {
        //     color: '#FFFFFF'
        //   }
        // },
        series: [
          {
            name: 'VibrationX',
            type: 'line',
            data: that.list,
            markLine: {
              symbol: 'none',
              silent: true,
              data: [
                {
                  yAxis: -1
                },
                {
                  yAxis: 0
                },
                {
                  yAxis: 1
                }
              ],
              lineStyle: {
                type: 'dotted',
                color: 'rgba(220,220,220,1)'
              },
              label: {
                show: false
              }
            },
            itemStyle: {
              color: '#25e1f4'
            }
          },
          {
            name: 'AbVibrationX',
            type: 'scatter',
            data: that.listb,
            symbolSize: 8,
            itemStyle: {
              color: '#f64e01'
            }
          }
        ]
      })
      // this.myEcharts = myChart
    }
  },
  watch: {
    list: {
      handler: function (val, oldVal) {
        this.drawLine()
      },
      deep: true
    },
    listb: {
      handler: function (val, oldVal) {
        if (val.length) {
          this.drawLine()
          this.$store.commit('sendmessage/shakeIt')
        }
      },
      deep: true
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    listb: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
