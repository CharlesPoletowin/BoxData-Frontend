<template>
<div>
  <div class="charts RelatedColor">
    <RelatedColor></RelatedColor>
  </div>
  <div class="charts Abnormal">
    <AbnormalTable></AbnormalTable>
  </div>
  <div class="charts River">
    <River></River>
  </div>
  <div class="charts Prediction">
    <div class="PredictWords1">稳定运行期</div>
    <div class="PredictWords2">异常发生期</div>
    <div class="PredictWords3">多种异常复现期</div>
    <div class="PredictWords4">故障多发期</div>
    <PredictAge></PredictAge>
  </div>
  <div class="charts HealthRadar">
    <HealthRadar></HealthRadar>
  </div>
</div>
</template>

<script>
import RelatedColor from './RelatedColor'
import AbnormalTable from './AbnormalTable'
import River from './River'
import PredictAge from './PredictAge'
import HealthRadar from './HealthRadar'
export default {
  name: 'Statistics',
  components: {
    RelatedColor,
    AbnormalTable,
    River,
    PredictAge,
    HealthRadar
  }
}
</script>

<style lang="stylus" scoped>
  chartWidth = 13%;
  chartHeight = 15%;
  interval = 5%;
  initialLeft = 1%;
  initialTop = 7%;
  widthMore = 8%;
  .charts {
    padding: 0;
    height: chartHeight;
    width: chartWidth;
    position: absolute;
  }
.RelatedColor{
  left:initialLeft+2*chartWidth;
  top: initialTop+4*chartHeight;
  height: 2*chartHeight;
  width: 2*chartWidth;
}
  .Abnormal{
    left:initialLeft+4*chartWidth;
    top: initialTop+4*chartHeight;
    height: 2*chartHeight;
    width: 1.5*chartWidth;
  }
  .River{
    left:initialLeft+5.5*chartWidth;
    top: initialTop+4*chartHeight;
    height: 2*chartHeight;
    width: 2*chartWidth;
  }
  .Prediction{
    left:initialLeft+5.5*chartWidth;
    top:initialTop+2*chartHeight;
    height: 2*chartHeight;
    width: 2*chartWidth;
  }
    .PredictWords1{
      position: absolute;
      left: 8%;
      top: 15%;
      font-size : 8px;
      font-weight: lighter
      color:#d1e6eb;
    }
  .PredictWords2{
      position: absolute;
      left: 25%;
      top: 15%;
      font-size : 8px;
      font-weight: lighter
      color:#d1e6eb;
    }
  .PredictWords3{
      position: absolute;
      left: 50%;
      top: 15%;
      font-size : 8px;
      font-weight: lighter
      color:#d1e6eb;
    }
  .PredictWords4{
      position: absolute;
      right: 5%
      top: 15%;
      font-size : 8px;
      font-weight: lighter
      color:#d1e6eb;
    }
  .HealthRadar{
    left:initialLeft+5.5*chartWidth;
    top:initialTop;
    height: 2*chartHeight;
    width: 2*chartWidth;
  }
</style>
