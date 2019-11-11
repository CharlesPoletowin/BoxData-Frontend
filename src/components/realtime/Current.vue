<template>
  <div :id="current" style="height:100%;width: 100%"></div>
</template>

<script>
export default {
  name: 'Current',
  data () {
    return {
      myEcharts: {},
      current: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.current))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: '',
        series:
        // 外围刻度
          [
            {
              type: 'gauge',
              radius: '100%', // 1行3个
              center: ['50%', '70%'],
              splitNumber: -1,
              min: 0,
              max: 100,
              startAngle: 180,
              endAngle: 0,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 1.5,
                  shadowBlur: 0,
                  color: [
                    [
                      1,
                      new that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(1,192,229,0.2)'
                      },
                      {
                        offset: 0.4,
                        color: 'rgba(1,192,229,1)'
                      },
                      {
                        offset: 0.6,
                        color: 'rgba(1,192,229,1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(1,192,229,0.2)'
                      }
                      ])
                    ]
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)',
                  width: 2
                },
                length: 0,
                splitNumber: 10
              },
              splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                  color: 'rgba(255,255,255,0.5)'
                }
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: true,
                length: '1%'
              },
              detail: {
                show: 0
              }
            },

            // 内侧指针、数值显示 彩带
            {
              name: 'current',
              type: 'gauge',
              radius: '76%',
              center: ['50%', '70%'],
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 100,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 19,
                  color: [
                    [
                      1,
                      new that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#0032af'
                      },
                      {
                        offset: 0.5,
                        color: '#ffdc4a'
                      },
                      {
                        offset: 1,
                        color: '#f64e01'
                      }
                      ])
                    ]
                  ]
                }
              },
              title: {
                offsetCenter: [0, '-160%'],
                color: '#FFFAC0',
                fontSize: 12
              },
              axisTick: {
                show: 0
              },
              splitLine: {
                show: 0
              },
              axisLabel: {
                show: 0
              },
              pointer: {
                show: true,
                length: '150%',
                width: 1
              },
              detail: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: '#FFF'
                }
              },
              data: [{
                value: that.list, name: '电流'
              }],
              z: 9
            },

            // 内侧彩带闭环
            {
              type: 'gauge',
              radius: '45%',
              center: ['50%', '70%'],
              splitNumber: 4,
              min: 0,
              max: 100,
              startAngle: 180,
              endAngle: 0,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 3,
                  shadowBlur: 0,
                  color: [
                    [
                      1,
                      new that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#0032af'
                      },
                      {
                        offset: 0.5,
                        color: '#ffdc4a'
                      },
                      {
                        offset: 1,
                        color: '#f64e01'
                      }
                      ])
                    ]
                  ]
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: 0
              },
              detail: {
                show: 0
              }
            },

            //  外测带数据彩带
            {
              type: 'gauge',
              radius: '85%',
              center: ['50%', '70%'],
              splitNumber: 0, // 刻度数量
              startAngle: 180,
              endAngle: 0,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 3,
                  color: [
                    [
                      that.list / 100,
                      new that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#5c53de'
                      },
                      {
                        offset: 1,
                        color: '#18c8ff'
                      }
                      ])
                    ],
                    [1, 'transparent']
                  ]
                }
              },
              // 分隔线样式。
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              axisTick: {
                show: false
              },
              pointer: {
                show: false
              },
              title: {
                show: false
              },
              // 仪表盘详情，用于显示数据。
              detail: {
                show: false
              },
              data: [{
                value: that.list
              }]
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
    }
  },
  props: ['list']
}
</script>

<style lang="stylus" scoped>

</style>
