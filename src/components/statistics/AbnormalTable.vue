<template>
<div style="text-align: center;background-color: #0E204A">
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
        { monitor: 'pressure',
          time: '2019-10-29',
          value: '77' },
        { monitor: 'temperature',
          time: '2019-10-28',
          value: '50' },
        { monitor: 'moisture',
          time: '2019-10-28',
          value: '90' },
        { monitor: 'location',
          time: '2019-10-27',
          value: '40' },
        { monitor: 'location',
          time: '2019-10-27',
          value: '-15' },
        { monitor: 'speed',
          time: '2019-10-26',
          value: '0.6' },
        { monitor: 'vibration',
          time: '2019-10-25',
          value: '15' }
      ]
    }
  }
}
</script>

<style scoped>
  .Abnormal {
    margin:auto;
    margin-top: 2%;
    width: 90%;
    height: 100%;
    border: 1px solid white;
    background-color: #0E204A;
    color: white;
    font-size: 10px;
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
