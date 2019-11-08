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
      list: [[0, 60], [10, 59], [20, 55], [30, 48], [40, 40], [45, 35], [50, 20], [55, 0]],
      listb: [[0, 60], [10, 58], [20, 52], [30, 44]],
      listc: [[30, 44], [40, 34], [45, 22], [50, 0]],
      showdata: [[30, 44]],
      destroyed: [[50, 0], [55, 0]]
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
        // title: {
        //   text: '预测寿命',
        //   textStyle: {
        //     color: '#fffac0',
        //     baseline: 'bottom'
        //   },
        //   left: 'right'
        // },
        grid: {
          left: '8%',
          right: '5%',
          bottom: '5%',
          top: '15%',
          show: false,
          containLabel: true
        },
        xAxis: {
          name: '时间',
          nameGap: 0,
          nameTextStyle: {
            color: '#d1e6eb',
            fontWeight: 'bold',
            fontSize: 8
          },
          min: 0,
          max: 60,
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#39b3c9'
            }
          },
          axisLabel: {
            show: false,
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
          name: '设备健康状况',
          nameGap: 0,
          nameTextStyle: {
            color: '#d1e6eb',
            fontWeight: 'bold',
            fontSize: 8
          },
          min: 0,
          max: 80,
          type: 'value',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#39b3c9'
            }
          },
          axisLabel: {
            show: false,
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
            id: 'predict',
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
          },
          {
            id: 'Real',
            type: 'line',
            smooth: true,
            symbol: 'none',
            markLine: {
              symbol: 'none',
              silent: true,
              lineStyle: {
                color: '#FFFFFF',
                type: 'dotted'
              },
              label: {
                show: false
              },
              data: [
                {
                  xAxis: 9
                },
                {
                  xAxis: 25
                },
                {
                  xAxis: 45
                }
              ]
            },
            data: that.listb,
            lineStyle: {
              color: '#ffdc4a'
            }
          },
          {
            id: 'RealPredict',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: that.listc,
            lineStyle: {
              color: '#ffdc4a',
              type: 'dotted'
            }
          },
          {
            type: 'scatter',
            id: 'Now',
            symbol: 'triangle',
            label: {
              show: true,
              distance: 1,
              color: '#FFFFFF',
              formatter: () => 'now',
              position: [10, 10]
            },
            data: this.showdata,
            symbolSize: 10,
            itemStyle: {
              color: '#f64e01'
            }
          },
          {
            type: 'scatter',
            id: 'destroyed',
            symbol: 'diamond',
            label: {
              show: true,
              distance: 1,
              color: '#FFFFFF',
              formatter: () => 'end',
              position: [10, -10]
            },
            data: this.destroyed,
            symbolSize: 10,
            itemStyle: {
              color: '#f64e01'
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
