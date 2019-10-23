<template>
  <div :id='speed' style="height:100%;"></div>
</template>

<script>
export default {
  name: 'Speed',
  data () {
    return {
      myEcharts: {},
      speed: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine: function () {
      let myChart = this.$echarts.init(document.getElementById(this.speed))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: 'rgba(14,32,74,1)',
        grid: {
          top: '15%',
          left: '5%',
          right: '7%',
          bottom: '7%'
        },
        title: {
          text: '速度折线',
          textStyle: {
            color: '#FFC300',
            baseline: 'bottom',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          min: 1,
          max: 30,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
          // type: 'value',
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
          min: -3,
          max: 3,
          data: [-3, -2, -1, 0, 1, 2],
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
            margin: 2,
            color: '#d1e6eb',
            interval: 'auto',
            fontWeight: 'lighter',
            fontSize: 10
          },
          name: '速度',
          nameGap: 5,
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
            { gt: -2,
              lte: -1,
              color: '#53fdfe'
            },
            {
              gt: -1,
              lte: -0.5,
              color: '#096'
            }, {
              gt: -0.5,
              lte: 0,
              color: '#ffde33'
            }, {
              gt: 0,
              lte: 0.50,
              color: '#ff9933'
            }, {
              gt: 0.5,
              lte: 1,
              color: '#cc0033'
            },
            {
              gt: 1,
              lte: 2,
              color: '#660099'
            }
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
          name: 'Speed',
          type: 'line',
          data: that.list,
          markLine: {
            symbol: 'none',
            silent: true,
            data: [
              {
                yAxis: -2
              },
              {
                yAxis: -1
              },
              {
                yAxis: 0
              },
              {
                yAxis: 1
              },
              {
                yAxis: 2
              }
            ],
            lineStyle: {
              type: 'dotted',
              color: 'rgba(220,220,220,1)'
            }
          }
        }
      })
    }
  },
  props: ['list']
}
</script>

<style scoped>

</style>
