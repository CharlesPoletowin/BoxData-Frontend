<template>
  <div :id="temperature" style="height:100%"></div>
</template>

<script>
export default {
  name: 'temperature',
  data () {
    return {
      myEcharts: {},
      temperature: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.temperature))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: '',
        title: {
          text: '温度',
          textStyle: {
            color: '#fffac0',
            baseline: 'bottom',
            fontSize: 12
          },
          left: 'center'
        },
        grid: {
          left: 0,
          top: '20%',
          bottom: '0',
          right: '50%'
        },
        tooltip: {
          show: false,
          formatter: '{b} <br> {c}'

        },
        yAxis: [{
          min: 0,
          max: 50,
          position: 'left',
          offset: 0,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            formatter: function (value, index) {
              return value - 20
            }
          // color:'#fff',
          },
          splitLine: {
            show: false
          // color:'#fff',
          },
          splitNumber: 10
        }],
        xAxis: [{
          type: 'category',
          data: ['温度'],
          axisTick: {
          // color:'#fff',
            show: false
          },
          axisLine: {
          //  color:'#fff',
            show: false
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }

        }],
        series: [
          {
            name: ' ',
            type: 'bar',
            barWidth: 22,
            silent: true,

            itemStyle: {
              color: 'rgba(0,0,0,0)',
              borderColor: '#53fdfe',
              borderWidth: 1,
              barBorderRadius: [4, 4, 4, 4]
            },
            barGap: '-90%',

            // barCategoryGap: '60%',
            data: [100]
          },
          {
            name: ' ',
            type: 'bar',
            barWidth: 18,
            label: {

              show: true,
              position: 'right',
              color: '#53fdfe',
              fontWeight: 'bold',
              fontSize: 18,
              formatter: function (o) {
                return o.value + '℃'
              }

            },
            data: [{
              value: that.list[0],
              itemStyle: {
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(93,253,254,0.2)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(93,253,254,0.8)'
                    }
                  ]
                }
              }
            }]
          },
          {
            name: 'abnormal',
            type: 'bar',
            barWidth: 18,
            label: {

              show: true,
              position: 'right',
              color: 'rgba(246,78,1)',
              fontWeight: 'bold',
              fontSize: 14,
              formatter: function (o) {
                return o.value + '℃异常!'
              }

            },
            data: [{
              value: that.listb[0],
              itemStyle: {
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(246,78,1,0.4)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(246,78,1,0.8)'
                    }
                  ]
                }
              },
              barGap: '-100%'
            }]
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
