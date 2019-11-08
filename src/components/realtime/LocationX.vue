<template>
  <div :id='locationX' style="height:100%;"></div>

</template>

<script>
export default {
  data () {
    return {
      myEcharts: {},
      locationX: Math.random().toString()
    }
  },
  mounted () {
    this.drawline()
  },
  methods: {
    drawline () {
      let myChart = this.$echarts.init(document.getElementById(this.locationX))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        title: {
          text: '位置XY轴图',
          textStyle: {
            color: '#FFFAC0',
            baseline: 'bottom',
            fontSize: 12
          },
          left: 'center'
        },
        backgroundColor: '',
        grid: {
          top: '25%',
          left: '5%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [{
          // name: '时间',
          nameLocation: 'end',
          show: true,
          type: 'value',
          boundaryGap: true,
          axisLine: { // 坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#53fdfe',
              width: 0.5
            }
          },
          axisLabel: {
            show: false,
            // 坐标轴刻度标签的相关设置
            textStyle: {
              color: '#d1e6eb',
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        yAxis: [{
          // name: 'X',
          nameLocation: 'center',
          type: 'value',
          // min: 0,
          show: true,
          // max: 200,
          splitNumber: 4,
          position: 'left',
          splitLine: {
            show: false,
            lineStyle: {
              color: '#d1e6eb'
            }
          },
          axisLine: {
            onZero: false,
            show: true,
            lineStyle: {
              color: '#53fdfe',
              width: 0.5
            }
          },
          axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
              color: '#d1e6eb'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: 'normal',
            type: 'line',
            showAllSymbol: false,
            symbolSize: 1,
            lineStyle: {
              normal: {
                color: '#53fdfe' // 线条颜色
              }
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,1)'
              }
            },
            tooltip: {
              show: false
            },
            markLine: {
              symbol: 'none',
              silent: true,
              data: [
                {
                  yAxis: 300
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
            areaStyle: { // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#25e1f4'
                },
                {
                  offset: 1,
                  color: '#010921'
                }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: that.list
            // data: [15, 20, 25, 36, 70, 90, 37, 40, 50, 45, 45]
          },
          {
            name: 'abnormal',
            type: 'line',
            showAllSymbol: false,
            symbolSize: 4,
            lineStyle: {
              normal: {
                color: '#f64e01' // 线条颜色
              }
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,1)'
              }
            },
            tooltip: {
              show: false
            },
            data: that.listb
          }
        ]
      })
      this.myEcharts = myChart
    }
  },
  watch: {
    list: {
      handler: function (val, oldVal) {
        this.drawline()
      },
      deep: true
    },
    listb: {
      handler: function (val, oldVal) {
        this.drawline()
        if (val.length) {
          this.$store.commit('sendmessage/xlocate')
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
