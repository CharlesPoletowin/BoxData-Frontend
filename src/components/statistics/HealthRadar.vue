<template>
  <div :id="HealthRadar" style="height:100%"></div>
</template>

<script>
export default {
  name: 'HealthRadar',
  data () {
    return {
      myEcharts: {},
      HealthRadar: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.HealthRadar))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      var indicator = [
        {
          text: '小型车',
          max: 6000
        },
        {
          text: '中型车',
          max: 5000
        },
        {
          text: '大型车',
          max: 5000
        },
        {
          text: '货车',
          max: 5000
        //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },
        {
          text: '特种车',
          max: 5000
        },
        {
          text: '贵宾车',
          max: 5000
        }
      ]
      var legendData = ['车辆数', '设计车位']
      myChart.setOption({
        backgroundColor: '',
        title: {
          text: '健康状况',
          textStyle: {
            color: '#fffac0',
            baseline: 'bottom'
          },
          left: 'center'
        },
        color: ['#25e1f4'],
        legend: {
          orient: 'vertical',
          icon: 'circle', // 图例形状
          show: false,
          bottom: 35,
          right: 40,
          itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 14,
            color: '#00E4FF'
          }
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 12
            },
            show: false
          },
          nameGap: 3,
          radius: '100%',
          center: ['35%', '50%'],
          indicator: indicator,
          splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
              color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)']// 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
          axisLine: { // 指向外圈文本的分隔线样式
            lineStyle: {
              color: '#153269'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#113865', // 分隔线颜色
              width: 1 // 分隔线线宽
            }
          }
        },
        series: [{
          type: 'radar',
          symbolSize: 8,
          // symbol: 'angle',
          data: [{
            value: [3200, 3000, 3400, 2000, 3900, 2000],
            name: legendData[1],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#25e1f4'
                  // shadowColor: '#4BFFFC',
                  // shadowBlur: 10,
                },
                shadowColor: '#4BFFFC',
                shadowBlur: 10
              }
            },
            lineStyle: {
              color: '#25e1f4',
              width: 0.7
            },
            areaStyle: {
              color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0, color: '#25e1f4'
                },
                {
                  offset: 1, color: '#0032af'
                }
              ]
              )
            },
            symbolSize: 2
          }]
        }]
      })
      this.myEcharts = myChart
    }
  }
}
</script>

<style scoped>

</style>
