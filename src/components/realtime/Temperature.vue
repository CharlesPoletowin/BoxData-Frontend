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
        backgroundColor: '#0E204A',
        title: {
          text: '温度',
          textStyle: {
            color: '#FFC300',
            baseline: 'bottom',
            fontSize: 12
          },
          left: 'right'
        },
        grid: {
          left: 0,
          top: '20%',
          bottom: '5%',
          right: 0
        },
        tooltip: {
          show: false,
          formatter: '{b} <br> {c}'

        },
        yAxis: [{
          min: 0,
          max: 80,
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
                      offset: 0,
                      color: 'rgba(93,253,254,0.8)'
                    }
                  ]
                }
              }
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
    }
  },
  props: ['list']
}
</script>

<style scoped>

</style>
