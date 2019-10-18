import echarts from 'echarts'

export default async ({ Vue }) => {
  Vue.prototype.$echarts = echarts
}
