<template>
  <div :id='speedy' style="height:100%;"></div>
</template>

<script>
export default {
  name: 'Speed',
  data () {
    return {
      myEcharts: {},
      speedy: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine: function () {
      let myChart = this.$echarts.init(document.getElementById(this.speedy))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: '',
        grid: {
          top: '15%',
          left: '5%',
          right: '10%',
          bottom: '7%'
        },
        title: {
          text: '速度折线',
          textStyle: {
            color: '#FFFAC0',
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
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#ffdc4a',
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
          nameGap: 0,
          nameTextStyle: {
            color: '#d1e6eb',
            fontWeight: 'bold',
            fontSize: 8
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
          // min: -3,
          max: 15,
          // data: [-3, -2, -1, 0, 1, 2],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#ffdc4a',
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 1,
            color: '#d1e6eb',
            interval: 'auto',
            fontWeight: 'lighter',
            fontSize: 8
          },
          name: 'y',
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
        series: [
          {
            name: 'SpeedY',
            type: 'line',
            data: that.list,
            showAllSymbol: false,
            showSymbol: false,
            markLine: {
              symbol: 'none',
              silent: true,
              label: {
                show: false
              },
              data: [
                {
                  yAxis: -1
                },
                {
                  yAxis: 1
                }
              ],
              lineStyle: {
                type: 'dotted',
                color: 'rgba(220,220,220,1)'
              }
            },
            lineStyle: {
              normal: {
                color: '#ffdc4a'
              }
            }
          },
          {
            name: 'AbnormalSpeedY',
            type: 'line',
            data: that.listb,
            showAllSymbol: false,
            showSymbol: false,
            markLine: {
              symbol: 'none',
              silent: true,
              label: {
                show: false
              },
              data: [
                {
                  yAxis: -1
                },
                {
                  yAxis: 1
                }
              ],
              lineStyle: {
                type: 'dotted',
                color: 'rgba(220,220,220,1)'
              }
            },
            lineStyle: {
              normal: {
                color: '#f64e01'
              }
            }
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
    },
    listb: {
      handler: function (val, oldVal) {
        this.drawLine()
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
