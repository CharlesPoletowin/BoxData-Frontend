<template>
<div style="text-align: center;">
<!--  <div class="text">异常情况统计</div>-->
  <table class="Abnormal">
    <tr>
      <td>时间</td>
      <td>设备</td>
      <td>值</td>
    </tr>
    <tr v-for="state in abnormal">
      <td>{{state.time}}</td>
      <td>{{state.monitor}}</td>
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
        { monitor: '速度',
          time: '2019-10-25',
          value: '77' },
        { monitor: '轨迹',
          time: '2019-10-28',
          value: '50' },
        { monitor: '振幅',
          time: '2019-10-30',
          value: '90' },
        { monitor: '电机',
          time: '2019-11-02',
          value: '40' },
        { monitor: '环境',
          time: '2019-11-04',
          value: '6' }
        // { monitor: '电压',
        //   time: '2019-10',
        //   value: '4' },
        // { monitor: '温度',
        //   time: '2019-10',
        //   value: '16' },
        // { monitor: '湿度',
        //   time: '2019-10',
        //   value: '0' },
        // { monitor: '电流',
        //   time: '2019-10',
        //   value: '15' }
      ]
    }
  }
}
</script>

<style scoped>
  .Abnormal {
    /*margin:auto;*/
    margin-top: 2%;
    margin-left: 5%;
    margin-bottom: 0;
    width: 80%;
    /*height: 90%;*/
    border: 1px solid white;
    color: white;
    font-size: 12px;
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
