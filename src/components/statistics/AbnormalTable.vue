<template>
<div style="text-align: center;">
  <div class="text">异常情况统计</div>
  <table class="Abnormal">
    <tr>
      <td>设备</td>
      <td>时间</td>
      <td>值</td>
    </tr>
    <tr v-for="state in abnormal">
      <td>{{state.monitor}}</td>
      <td>{{state.time}}</td>
      <td>{{state.value}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'AbnormalTable',
  data () {
    return {
      abnormal: [
        { monitor: 'X轴',
          time: '2019-10',
          value: '77' },
        { monitor: 'Y轴',
          time: '2019-10',
          value: '50' },
        { monitor: '速度X',
          time: '2019-10',
          value: '90' },
        { monitor: '速度Y',
          time: '2019-10',
          value: '40' },
        { monitor: '振幅',
          time: '2019-10',
          value: '6' },
        { monitor: '电压',
          time: '2019-10',
          value: '4' },
        { monitor: '温度',
          time: '2019-10',
          value: '16' },
        { monitor: '湿度',
          time: '2019-10',
          value: '0' },
        { monitor: '电流',
          time: '2019-10',
          value: '15' }
      ]
    }
  }
}
</script>

<style scoped>
  .Abnormal {
    /*margin:auto;*/
    margin-top: 0%;
    margin-left: 5%;
    width: 80%;
    /*height: 90%;*/
    border: 0.1px solid white;
    color: white;
    font-size: 8px;
  }
  td{
    border-bottom: 1px dotted white;
  }
  .text{
    text-align: center;
    color: #fffac0;
    font-size: 16px;
    font-weight: bold;
  }
</style>
