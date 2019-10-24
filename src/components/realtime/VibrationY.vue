<template>
  <div :id='vibration' style="height:100%;"></div>
</template>

<script>
export default {
  name: 'VibrationY',
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
        backgroundColor: 'rgba(14,32,74,1)',
        grid: {
          top: '20%',
          left: '5%',
          right: '13%',
          bottom: '7%'
        },
        // title: {
        //   text: '振幅X,Y轴',
        //   textStyle: {
        //     color: '#FFC300',
        //     baseline: 'bottom',
        //     fontSize: 14
        //   },
        //   left: 'left'
        // },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          min: 1,
          max: 15,
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          // type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#E9967A',
              width: 1
            },
            position: 'bottom'
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 2,
            color: '#d1e6eb',
            interval: 0,
            fontWeight: 'lighter',
            fontSize: 8
          },
          name: '时间',
          nameGap: 1,
          nameTextStyle: {
            color: '#d1e6eb',
            fontWeight: 'bold',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          min: -2,
          max: 2,
          data: [-2, -1, 0, 1, 2],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#E9967A',
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 2,
            color: '#E9967A',
            interval: 'auto',
            fontWeight: 'lighter',
            fontSize: 10
          },
          name: 'Y',
          nameGap: 0,
          nameTextStyle: {
            color: '#E9967A',
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
        // dataZoom: [{
        //   startValue: '2014-06-01'
        // }, {
        //   type: 'inside'
        // }],
        visualMap: {
          show: false,
          top: 10,
          right: 10,
          pieces: [
            // { gt: -2,
            //   lte: -1,
            //   color: '#53fdfe'
            // },
            {
              gt: -3,
              lt: -1,
              color: '#cc0033'
            }, {
              gte: -1,
              lte: 1,
              color: '#ffde33'
            },
            {
              gt: 1,
              lte: 3,
              color: '#cc0033'
            }
            // {
            //   gt: 1,
            //   lte: 2,
            //   color: '#660099'
            // }
            //   {
            //   gt: 300,
            //   color: '#7e0023'
            // }
          ],
          outOfRange: {
            color: '#FFFFFF'
          }
        },
        series: {
          name: 'VibrationY',
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
          }
        }
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
  props: ['list']
}
</script>

<style scoped>

</style>
