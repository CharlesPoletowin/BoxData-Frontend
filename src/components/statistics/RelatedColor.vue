<template>
<div :id="relatedColor" style="height:100%"></div>
</template>

<script>
export default {
  name: 'RelatedColor',
  data () {
    return {
      myEcharts: {},
      relatedColor: Math.random().toString()
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById(this.relatedColor))
      myChart.resize()
      window.addEventListener('resize', () => {
        myChart.resize()
      })
      let that = this
      myChart.setOption({
        backgroundColor: '#0E204A',
        title: {
          text: '关联色彩盘',
          left: 'center',
          textStyle: {
            color: '#fffac0'
          }
        },
        grid: {
          left: '8%',
          top: '25%',
          right: '1%',
          bottom: 0
        },
        'tooltip': {
          'show': true
        },
        'xAxis': {
          'position': 'top',
          'name': '月份',
          'type': 'category',
          'data': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '合计'],
          'axisLabel': {
            color: '#FFFFFF',
            interval: 0,
            fontWeight: 'light',
            fontSize: 4,
            margin: 4
          },
          'splitArea': {
            'show': true
          },
          'axisLine': {
            'show': false
          },
          'axisTick': {
            'show': false
          }
        },
        'yAxis': {
          'nameLocation': 'end',
          'type': 'category',
          'data': ['0', '1', '2', '3', '4', '5', '6'],
          'axisLine': {
            'show': false
          },
          'axisTick': {
            'show': false
          },
          'axisLabel': {
            color: '#FFFFFF',
            interval: 0,
            fontWeight: 'light',
            fontSize: 4,
            'rich': {
              'red': {
                'color': '#f00'
              }
            }
          },
          'splitArea': {
            'show': true
          }
        },
        'visualMap': {
          'min': 0,
          'max': 31,
          'calculable': false,
          'orient': 'horizontal',
          'right': '-7%',
          'top': '5',
          itemWidth: 5,
          itemHeight: 100,
          'color': ['#0032af', '#39b3c9', '#FFFFFF']
        },
        'series': [{
          'name': '异常次数',
          'type': 'heatmap',
          'data': [
            [0, 0, 18],
            [0, 1, 13],
            [0, 2, 5],
            [0, 3, 15],
            [0, 4, 16],
            [0, 5, 17],
            [0, 6, 5],
            [1, 0, 180],
            [1, 1, 15],
            [1, 2, 1],
            [1, 3, 16],
            [1, 4, 17],
            [1, 5, 18],
            [1, 6, 1],
            [2, 0, 50],
            [2, 1, 16],
            [2, 2, 2],
            [2, 3, 17],
            [2, 4, 18],
            [2, 5, 5],
            [2, 6, 2],
            [3, 0, 80],
            [3, 1, 17],
            [3, 2, 13],
            [3, 3, 18],
            [3, 4, 5],
            [3, 5, 8],
            [3, 6, 13],
            [4, 0, 30],
            [4, 1, 18],
            [4, 2, 15],
            [4, 3, 5],
            [4, 4, 8],
            [4, 5, 30],
            [4, 6, 15],
            [5, 0, 180],
            [5, 1, 5],
            [5, 2, 16],
            [5, 3, 8],
            [5, 4, 30],
            [5, 5, 18],
            [5, 6, 16],
            [6, 0, 50],
            [6, 1, 8],
            [6, 2, 17],
            [6, 3, 30],
            [6, 4, 18],
            [6, 5, 5],
            [6, 6, 17],
            [7, 0, 21],
            [7, 1, 30],
            [7, 2, 18],
            [7, 3, 18],
            [7, 4, 5],
            [7, 5, 1],
            [7, 6, 18],
            [8, 0, 21],
            [8, 1, 18],
            [8, 2, 5],
            [8, 3, 5],
            [8, 4, 1],
            [8, 5, 2],
            [8, 6, 5],
            [9, 0, 3],
            [9, 1, 5],
            [9, 2, 8],
            [9, 3, 1],
            [9, 4, 2],
            [9, 5, 13],
            [9, 6, 8],
            [10, 0, 4],
            [10, 1, 1],
            [10, 2, 30],
            [10, 3, 2],
            [10, 4, 13],
            [10, 5, 15],
            [10, 6, 30],
            [11, 0, 2],
            [11, 1, 30],
            [11, 2, 17],
            [11, 3, 13],
            [11, 4, 15],
            [11, 5, 16],
            [11, 6, 17]
          ],
          'label': {
            'normal': {
              'show': false
            }
          },
          'itemStyle': {
            'normal': {
              'borderColor': 'rgba(255, 255, 255, 0.8)'
            },
            'emphasis': {
              'shadowBlur': 10,
              'shadowColor': 'rgba(255, 255, 255, 0.5)'
            }
          }
        }]
      })
      this.myEcharts = myChart
    }
  },
  props: []
}
</script>

<style scoped>

</style>
