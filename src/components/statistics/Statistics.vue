<template>
<div>
  <div class="charts RelatedColor">
    <RelatedColor></RelatedColor>
  </div>
</div>
</template>

<script>
import RelatedColor from './RelatedColor'
export default {
  name: 'Statistics',
  components: {
    RelatedColor
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
    background: rgba(0, 200, 200, 0.8);
    position: absolute;
  }
.RelatedColor{
  left:initialLeft+2*chartWidth;
  top: initialTop+4*chartHeight;
  height: 2*chartHeight;
  width: 2*chartWidth;
}
</style>
