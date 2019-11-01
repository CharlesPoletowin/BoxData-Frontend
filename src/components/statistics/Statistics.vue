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
  .HealthRadar{
    left:initialLeft+5.5*chartWidth;
    top:initialTop;
    height: 2*chartHeight;
    width: 2*chartWidth;
  }
</style>
