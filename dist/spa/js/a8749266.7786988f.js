(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a8749266"],{"0c18":function(t,e,i){"use strict";var o=i("49f9"),a=i.n(o);a.a},"49f9":function(t,e,i){},"551b":function(t,e,i){"use strict";var o=i("bf52"),a=i.n(o);a.a},"8b24":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"flex flex-center"},[i("div",{staticClass:"glSimulator"},[i("h53d")],1),i("div",[i("realtime")],1),i("div",[i("statistics")],1)])},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"charts locationX"},[i("locationX",{attrs:{list:t.listX,listb:t.AblistX}}),i("div",{staticClass:"words"},[t._v("时间")]),i("div",{staticClass:"words2"},[t._v("X")])],1),i("div",{staticClass:"charts locationY"},[i("locationY",{attrs:{list:t.listY,listb:t.Ablisty}}),i("div",{staticClass:"words3"},[t._v("时间")]),i("div",{staticClass:"words4"},[t._v("Y")])],1),i("div",{staticClass:"charts trail"},[i("trail",{attrs:{list:t.trail,listb:t.trailAbnormal}})],1),i("div",{staticClass:"charts speed"},[i("speedX",{attrs:{list:t.speedx,listb:t.Abspeedx}})],1),i("div",{staticClass:"charts speedy"},[i("speedY",{attrs:{list:t.speedy,listb:t.Abspeedy}})],1),i("div",{staticClass:"charts vibrationX"},[i("vibrationX",{attrs:{list:t.vibrationX,listb:t.AbvibrationX}})],1),i("div",{staticClass:"charts current"},[i("current",{attrs:{list:t.current}})],1),i("div",{staticClass:"charts voltage"},[i("voltage",{attrs:{list:t.voltage}})],1),i("div",{staticClass:"charts temperature"},[i("temperature",{attrs:{list:t.temperature,listb:t.abtemperature}})],1),i("div",{staticClass:"charts humidity"},[i("humidity",{attrs:{list:t.humidity,listb:t.abhumidity}})],1)])},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.locationX}})},l=[],c=(i("6b54"),i("06db"),{data:function(){return{myEcharts:{},locationX:Math.random().toString()}},mounted:function(){this.drawline()},methods:{drawline:function(){var t=this.$echarts.init(document.getElementById(this.locationX));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",grid:{top:"25%",left:"5%",right:"10%",bottom:"5%",containLabel:!0},xAxis:[{nameLocation:"end",show:!0,type:"value",boundaryGap:!0,axisLine:{show:!0,lineStyle:{color:"#53fdfe",width:.5}},axisLabel:{show:!1,textStyle:{color:"#d1e6eb",margin:15}},axisTick:{show:!1},splitLine:{show:!1}}],yAxis:[{nameLocation:"center",type:"value",min:0,show:!0,max:310,splitNumber:4,position:"left",splitLine:{show:!1,lineStyle:{color:"#d1e6eb"}},axisLine:{onZero:!1,show:!0,lineStyle:{color:"#53fdfe",width:.5}},axisLabel:{show:!1,margin:20,textStyle:{color:"#d1e6eb"}},axisTick:{show:!1}}],series:[{name:"normal",type:"line",showAllSymbol:!1,symbolSize:1,lineStyle:{normal:{color:"#53fdfe"}},label:{show:!1,position:"top",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"rgba(255,255,255,1)"}},tooltip:{show:!1},markLine:{symbol:"none",silent:!0,data:[{yAxis:300}],lineStyle:{type:"dotted",color:"rgba(220,220,220,1)"},label:{show:!1}},areaStyle:{normal:{color:new e.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#25e1f4"},{offset:1,color:"#010921"}],!1),shadowColor:"rgba(53,142,215, 0.9)",shadowBlur:20}},data:e.list},{name:"abnormal",type:"line",showAllSymbol:!1,symbolSize:4,lineStyle:{normal:{color:"#f64e01"}},label:{show:!1,position:"top",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"rgba(255,255,255,1)"}},tooltip:{show:!1},data:e.listb}]}),this.myEcharts=t}},watch:{listb:{handler:function(t,e){this.drawline(),t.length&&this.$store.commit("sendmessage/xlocate")},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}}),d=c,h=i("6691"),m=Object(h["a"])(d,s,l,!1,null,"def4faba",null),f=m.exports,u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.locationY}})},b=[],y={name:"locationY",data:function(){return{myEcharts:{},locationY:Math.random().toString()}},mounted:function(){this.drawline()},methods:{drawline:function(){var t=this.$echarts.init(document.getElementById(this.locationY));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,255,255,0)"},{offset:.5,color:"rgba(255,255,255,0)"},{offset:1,color:"rgba(255,255,255,0)"}],global:!1}}}},grid:{top:"5%",left:"5%",right:"10%",bottom:"5%",containLabel:!0},xAxis:[{name:"时间",nameLocation:"end",show:!0,type:"value",boundaryGap:!0,axisLine:{show:!0,lineStyle:{color:"#ffdc4a",width:.5}},axisLabel:{show:!1,textStyle:{color:"#ffffff",margin:15}},axisTick:{show:!1},splitLine:{show:!1}}],yAxis:[{name:"X",nameLocation:"center",type:"value",min:0,show:!0,max:310,splitNumber:4,splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{onZero:!1,show:!0,lineStyle:{color:"#ffdc4a",width:.5}},axisLabel:{show:!1,margin:20,textStyle:{color:"#d1e6eb"}},axisTick:{show:!1}}],series:[{name:"locationy",type:"line",showAllSymbol:!1,symbolSize:1,lineStyle:{normal:{color:"#ffdc4a"}},markLine:{symbol:"none",silent:!0,data:[{yAxis:300}],lineStyle:{type:"dotted",color:"rgba(220,220,220,1)"},label:{show:!1}},label:{show:!1,position:"top",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"rgba(255,255,255,1)"}},tooltip:{show:!1},areaStyle:{normal:{color:new e.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ffdc4a"},{offset:1,color:"#010921"}],!1),shadowColor:"rgba(53,142,215, 0.9)",shadowBlur:20}},data:e.list},{name:"ablocationy",type:"line",showAllSymbol:!1,symbolSize:4,lineStyle:{normal:{color:"#f64e01"}},itemStyle:{normal:{color:"rgba(255,255,255,1)"}},tooltip:{show:!1},data:e.listb}]}),this.myEcharts=t}},watch:{listb:{handler:function(t,e){this.drawline(),t.length&&this.$store.commit("sendmessage/ylocate")},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}},p=y,w=Object(h["a"])(p,u,b,!1,null,"6eb7a056",null),g=w.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.trail}})},v=[],S={name:"trail",data:function(){return{myEcharts:{},trail:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.trail));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",grid:{top:"10%",left:0,right:0,bottom:0},xAxis:{min:0,max:310,splitLine:{show:!1,lineStyle:{type:"dashed"}},axisLine:{onZero:!1,show:!1},axisTick:{show:!1},axisLabel:{show:!1}},yAxis:{min:0,max:310,splitLine:{show:!1,lineStyle:{type:"dashed"}},axisLine:{onZero:!1,show:!1},axisTick:{show:!1},axisLabel:{show:!1},scale:!0},series:[{name:"normal",data:e.list,type:"scatter",symbolSize:function(t){return t[2]<1?5:t[2]>200?2.5:1e3/(t[2]+200)},label:{emphasis:{show:!0,formatter:"normal",position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.5)",shadowOffsetY:5,color:new e.$echarts.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"rgb(129, 227, 238)"},{offset:1,color:"rgb(25, 183, 207)"}])}}},{name:"abnormal",data:e.listb,type:"scatter",symbolSize:function(t){return t[2]<1?5:t[2]>200?2.5:1e3/(t[2]+200)},label:{emphasis:{show:!0,formatter:"abnormal",position:"top"}},itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:new e.$echarts.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"rgb(251, 118, 123)"},{offset:1,color:"rgb(204, 46, 72)"}])}}},{name:"actual",type:"line",symbol:"none",lineStyle:{type:"dotted",width:1,opacity:.9,color:"#FFFFFF"},data:[[0,0],[0,310],[310,310],[310,0],[0,0]]}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){this.drawLine()},deep:!0}},props:["list","listb"]},L=S,A=Object(h["a"])(L,x,v,!1,null,"ea4f00ca",null),F=A.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.speedx}})},E=[],C={name:"SpeedX",data:function(){return{myEcharts:{},speedx:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.speedx));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",grid:{top:"15%",left:"5%",right:"10%",bottom:"7%"},tooltip:{trigger:"axis"},xAxis:{type:"value",axisLine:{onZero:!1,lineStyle:{color:"#53fdfe",width:1},position:"bottom"},axisTick:{show:!1},axisLabel:{margin:2,color:"#d1e6eb",interval:0,fontWeight:"lighter",fontSize:8},name:"时间",nameGap:0,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:8},splitLine:{show:!1}},yAxis:{type:"value",splitLine:{show:!1},max:15,axisLine:{onZero:!1,lineStyle:{color:"#53fdfe",width:1}},axisTick:{show:!1},axisLabel:{margin:1,color:"#d1e6eb",interval:"auto",fontWeight:"lighter",fontSize:8},name:"x",nameGap:5,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:10}},toolbox:{show:!1,left:"center",feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},series:[{name:"SpeedX",type:"line",data:e.list,showAllSymbol:!1,showSymbol:!1,markLine:{symbol:"none",silent:!0,label:{show:!1},data:[{yAxis:8},{yAxis:12}],lineStyle:{type:"dotted",color:"rgba(220,220,220,1)"}},lineStyle:{normal:{color:"#53fdfe"}}},{name:"Abnormal SpeedX",type:"line",data:e.listb,showAllSymbol:!1,showSymbol:!1,lineStyle:{normal:{color:"#f64e01"}}}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){},deep:!0},listb:{handler:function(t,e){this.drawLine(),t.length&&this.$store.commit("sendmessage/xvibrate")},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}},$=C,_=Object(h["a"])($,z,E,!1,null,"46682b10",null),k=_.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.speedy}})},T=[],O={name:"SpeedY",data:function(){return{myEcharts:{},speedy:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.speedy));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",grid:{top:"15%",left:"5%",right:"10%",bottom:"7%"},tooltip:{trigger:"axis"},xAxis:{type:"value",axisLine:{onZero:!1,lineStyle:{color:"#ffdc4a",width:1},position:"bottom"},axisTick:{show:!1},axisLabel:{margin:2,color:"#d1e6eb",interval:0,fontWeight:"lighter",fontSize:8},name:"时间",nameGap:0,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:8},splitLine:{show:!1}},yAxis:{type:"value",splitLine:{show:!1},max:15,axisLine:{onZero:!1,lineStyle:{color:"#ffdc4a",width:1}},axisTick:{show:!1},axisLabel:{margin:1,color:"#d1e6eb",interval:"auto",fontWeight:"lighter",fontSize:8},name:"y",nameGap:5,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:10}},toolbox:{show:!1,left:"center",feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},series:[{name:"SpeedY",type:"line",data:e.list,showAllSymbol:!1,showSymbol:!1,markLine:{symbol:"none",silent:!0,label:{show:!1},data:[{yAxis:8},{yAxis:12}],lineStyle:{type:"dotted",color:"rgba(220,220,220,1)"}},lineStyle:{normal:{color:"#ffdc4a"}}},{name:"AbnormalSpeedY",type:"line",data:e.listb,showAllSymbol:!1,showSymbol:!1,lineStyle:{normal:{color:"#f64e01"}}}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){},deep:!0},listb:{handler:function(t,e){this.drawLine(),t.length&&this.$store.commit("sendmessage/yvibrate")},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}},W=O,B=Object(h["a"])(W,X,T,!1,null,"33d731f4",null),Y=B.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.vibration}})},I=[],M={name:"VibrationX",data:function(){return{myEcharts:{},vibration:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.vibration));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",grid:{top:"20%",left:"5%",right:"13%",bottom:"7%"},tooltip:{trigger:"axis"},xAxis:{type:"value",axisLine:{onZero:!1,lineStyle:{color:"#53fdfe",width:1},position:"bottom"},axisTick:{show:!1},axisLabel:{show:!1},name:"时间",nameGap:1,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:10},splitLine:{show:!1}},yAxis:{type:"value",splitLine:{show:!1},axisLine:{onZero:!1,lineStyle:{color:"#53fdfe",width:1}},axisTick:{show:!1},axisLabel:{show:!1,margin:2,color:"#d1e6eb",interval:"auto",fontWeight:"lighter",fontSize:10},name:"X",nameGap:0,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:10}},toolbox:{show:!1,left:"center",feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},series:[{name:"VibrationX",type:"line",data:e.list,markLine:{symbol:"none",silent:!0,data:[{yAxis:-1},{yAxis:0},{yAxis:1}],lineStyle:{type:"dotted",color:"rgba(220,220,220,1)"},label:{show:!1}},itemStyle:{color:"#25e1f4"}},{name:"AbVibrationX",type:"line",data:e.listb,itemStyle:{color:"#f64e01"}}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){this.drawLine()},deep:!0},listb:{handler:function(t,e){t.length&&(this.drawLine(),this.$store.commit("sendmessage/shakeIt"))},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}},R=M,j=Object(h["a"])(R,G,I,!1,null,"17872756",null),P=j.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.current}})},N=[],V={name:"Current",data:function(){return{myEcharts:{},current:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.current));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",series:[{type:"gauge",radius:"100%",center:["50%","70%"],splitNumber:-1,min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:1.5,shadowBlur:0,color:[[1,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(1,192,229,0.2)"},{offset:.4,color:"rgba(1,192,229,1)"},{offset:.6,color:"rgba(1,192,229,1)"},{offset:1,color:"rgba(1,192,229,0.2)"}])]]}},axisTick:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)",width:2},length:0,splitNumber:10},splitLine:{show:!0,length:10,lineStyle:{color:"rgba(255,255,255,0.5)"}},axisLabel:{show:!1},pointer:{show:!0,length:"1%"},detail:{show:0}},{name:"current",type:"gauge",radius:"76%",center:["50%","70%"],startAngle:180,endAngle:0,min:0,max:100,axisLine:{show:!0,lineStyle:{width:19,color:[[1,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0032af"},{offset:.5,color:"#ffdc4a"},{offset:1,color:"#f64e01"}])]]}},title:{offsetCenter:[0,"-160%"],color:"#FFFAC0",fontSize:12},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"150%",width:1},detail:{show:!1},itemStyle:{normal:{color:"#FFF"}},data:[{value:e.list,name:"电流"}],z:9},{type:"gauge",radius:"45%",center:["50%","70%"],splitNumber:4,min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:3,shadowBlur:0,color:[[1,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0032af"},{offset:.5,color:"#ffdc4a"},{offset:1,color:"#f64e01"}])]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:0},detail:{show:0}},{type:"gauge",radius:"85%",center:["50%","70%"],splitNumber:0,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:3,color:[[e.list/100,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#5c53de"},{offset:1,color:"#18c8ff"}])],[1,"transparent"]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{value:e.list}]}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){this.drawLine()},deep:!0}},props:["list"]},H=V,D=Object(h["a"])(H,Z,N,!1,null,"f1f5221a",null),U=D.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.temperature}})},q=[],Q={name:"temperature",data:function(){return{myEcharts:{},temperature:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.temperature));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",title:{text:"温度",textStyle:{color:"#fffac0",baseline:"bottom",fontSize:12},left:"center"},grid:{left:0,top:"20%",bottom:"0",right:"50%"},tooltip:{show:!1,formatter:"{b} <br> {c}"},yAxis:[{min:0,max:50,position:"left",offset:0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,formatter:function(t,e){return t-20}},splitLine:{show:!1},splitNumber:10}],xAxis:[{type:"category",data:["温度"],axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,textStyle:{color:"#fff"}}}],series:[{name:" ",type:"bar",barWidth:22,silent:!0,itemStyle:{color:"rgba(0,0,0,0)",borderColor:"#53fdfe",borderWidth:1,barBorderRadius:[4,4,4,4]},barGap:"-90%",data:[100]},{name:" ",type:"bar",barWidth:18,label:{show:!0,position:"right",color:"#53fdfe",fontWeight:"bold",fontSize:18,formatter:function(t){return t.value+"℃"}},data:[{value:e.list[0],itemStyle:{color:{colorStops:[{offset:0,color:"rgba(93,253,254,0.2)"},{offset:1,color:"rgba(93,253,254,0.8)"}]}}}]},{name:"abnormal",type:"bar",barWidth:18,label:{show:!0,position:"right",color:"rgba(246,78,1)",fontWeight:"bold",fontSize:14,formatter:function(t){return t.value+"℃异常!"}},data:[{value:e.listb[0],itemStyle:{color:{colorStops:[{offset:0,color:"rgba(246,78,1,0.4)"},{offset:1,color:"rgba(246,78,1,0.8)"}]}},barGap:"-100%"}]}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){this.drawLine()},deep:!0},listb:{handler:function(t,e){this.drawLine()},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}},K=Q,tt=Object(h["a"])(K,J,q,!1,null,"ce6b1992",null),et=tt.exports,it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.humidity}})},ot=[],at={name:"humidity",data:function(){return{myEcharts:{},humidity:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.humidity));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",title:{text:"噪音",textStyle:{color:"#fffac0",baseline:"bottom",fontSize:12},left:"center"},grid:{left:0,top:"20%",bottom:"0",right:"50%"},tooltip:{show:!1,formatter:"{b} <br> {c}"},yAxis:[{min:0,max:100,position:"left",offset:0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,formatter:function(t,e){return t-20}},splitLine:{show:!1},splitNumber:10}],xAxis:[{type:"category",data:["噪音"],axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,textStyle:{color:"#fff"}}}],series:[{name:" ",type:"bar",barWidth:22,silent:!0,itemStyle:{color:"rgba(0,0,0,0)",borderColor:"#ffdc4a",borderWidth:1,barBorderRadius:[4,4,4,4]},barGap:"-90%",data:[100]},{name:" ",type:"bar",barWidth:18,label:{show:!0,position:"right",color:"#ffdc4a",fontWeight:"bold",fontSize:18,formatter:function(t){return t.value+"dB"}},data:[{value:e.list[0],itemStyle:{color:{colorStops:[{offset:0,color:"rgba(255,220,74,0.2)"},{offset:1,color:"rgba(255,220,74,0.9)"}]}}}]},{name:" ",type:"bar",barWidth:18,label:{show:!0,position:"right",color:"rgba(246,78,1)",fontWeight:"bold",fontSize:14,formatter:function(t){return t.value+"dB异常!"}},data:[{value:e.listb[0],itemStyle:{color:{colorStops:[{offset:0,color:"rgba(246,78,1,0.4)"},{offset:1,color:"rgba(246,78,1,0.4)"}]}}}]}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){this.drawLine()},deep:!0},listb:{handler:function(t,e){this.drawLine()},deep:!0}},props:{list:{type:Array,default:function(){return[]}},listb:{type:Array,default:function(){return[]}}}},nt=at,rt=Object(h["a"])(nt,it,ot,!1,null,"35dd4892",null),st=rt.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",width:"100%"},attrs:{id:t.voltage}})},ct=[],dt={name:"Voltage",data:function(){return{myEcharts:{},voltage:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.voltage));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",series:[{type:"gauge",radius:"100%",center:["50%","70%"],splitNumber:-1,min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:1.5,shadowBlur:0,color:[[1,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(1,192,229,0.2)"},{offset:.4,color:"rgba(1,192,229,1)"},{offset:.6,color:"rgba(1,192,229,1)"},{offset:1,color:"rgba(1,192,229,0.2)"}])]]}},axisTick:{show:!0,lineStyle:{color:"rgba(255,255,255,0.3)",width:2},length:0,splitNumber:10},splitLine:{show:!0,length:10,lineStyle:{color:"rgba(255,255,255,0.5)"}},axisLabel:{show:!1},pointer:{show:!0,length:"1%"},detail:{show:0}},{name:"current",type:"gauge",radius:"76%",center:["50%","70%"],startAngle:180,endAngle:0,min:0,max:100,axisLine:{show:!0,lineStyle:{width:19,color:[[1,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0032af"},{offset:.5,color:"#ffdc4a"},{offset:1,color:"#f64e01"}])]]}},title:{offsetCenter:[0,"-160%"],color:"#FFFAC0",fontSize:12},axisTick:{show:0},splitLine:{show:0},axisLabel:{show:0},pointer:{show:!0,length:"150%",width:1},detail:{show:!1},itemStyle:{normal:{color:"#fff"}},data:[{value:e.list,name:"电压"}],z:9},{type:"gauge",radius:"45%",center:["50%","70%"],splitNumber:4,min:0,max:100,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:3,shadowBlur:0,color:[[1,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0032af"},{offset:.5,color:"#ffdc4a"},{offset:1,color:"#f64e01"}])]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},pointer:{show:0},detail:{show:0}},{type:"gauge",radius:"85%",center:["50%","70%"],splitNumber:0,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:3,color:[[e.list/100,new e.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#5c53de"},{offset:1,color:"#18c8ff"}])],[1,"transparent"]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{value:e.list}]}]}),this.myEcharts=t}},watch:{list:{handler:function(t,e){this.drawLine()},deep:!0}},props:["list"]},ht=dt,mt=Object(h["a"])(ht,lt,ct,!1,null,"480395d8",null),ft=mt.exports,ut={components:{vibrationX:P,locationX:f,locationY:g,trail:F,speedX:k,speedY:Y,current:U,temperature:et,humidity:st,voltage:ft},data:function(){return{listX:[[1,1],[2,2],[3,1],[4,0],[5,1],[6,2]],AblistX:[],listY:[[1,1],[2,2],[3,1],[4,0],[5,1],[6,2]],Ablisty:[],trail:[[1,1,1],[2,0,2],[3,-1,3],[2,-2,4],[1,-3,5]],trailAbnormal:[[1,2,1],[2,3,2]],speedx:[],Abspeedx:[[1,10],[2,8]],speedy:[[1,1],[2,2],[3,1],[4,0],[5,1],[6,2]],Abspeedy:[],vibrationX:[1,-1,1,-1,1,-1,1,-1,1,-1,2,-2,-2],AbvibrationX:[],current:[75],voltage:[80],temperature:[25],abtemperature:[],humidity:[45],abhumidity:[]}},props:{},mounted:function(){},sockets:{message:function(t){var e=JSON.parse(t);this.temperature=e.temperature[0][0],this.abtemperature=e.temperature[1][0],this.humidity=e.noise[0][0],this.abhumidity=e.noise[1][0],this.listX=e.locationx[0],this.AblistX=e.locationx[1],this.listY=e.locationy[0],this.Ablisty=e.locationy[1],this.trail=e.location[0],this.trailAbnormal=e.location[1],this.vibrationX=e.vibration[0],this.AbvibrationX=e.vibration[1],this.speedx=e.speedx[0],this.Abspeedx=e.speedx[1],this.speedy=e.speedy[0],this.Abspeedy=e.speedy[1]}}},bt=ut,yt=(i("b545"),Object(h["a"])(bt,n,r,!1,null,"6c88cc14",null)),pt=yt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"charts RelatedColor"},[i("RelatedColor")],1),i("div",{staticClass:"charts Abnormal"},[i("AbnormalTable")],1),i("div",{staticClass:"charts River"},[i("River")],1),i("div",{staticClass:"charts Prediction"},[i("div",{staticClass:"PredictWords1"},[t._v("稳定运行期")]),i("div",{staticClass:"PredictWords2"},[t._v("异常发生期")]),i("div",{staticClass:"PredictWords3"},[t._v("多种异常复现期")]),i("div",{staticClass:"PredictWords4"},[t._v("故障多发期")]),i("PredictAge")],1),i("div",{staticClass:"charts HealthRadar"},[i("HealthRadar")],1)])},gt=[],xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.relatedColor}})},vt=[],St={name:"RelatedColor",data:function(){return{myEcharts:{},relatedColor:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.relatedColor));t.resize(),window.addEventListener("resize",(function(){t.resize()}));t.setOption({backgroundColor:"",grid:{left:"15%",top:"25%",right:"15%",bottom:0},tooltip:{show:!0},xAxis:{position:"top",type:"category",data:["速度X","X轴","速度Y","Y轴","振幅","电流","电压","温度","湿度"],axisLabel:{color:"#FFFFFF",interval:0,fontWeight:"light",margin:1},splitArea:{show:!0},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{nameLocation:"end",type:"category",data:["速度X","X轴","速度Y","Y轴","振幅","电流","电压","温度","湿度"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#FFFFFF",interval:0,fontWeight:"light",fontSize:1,margin:2,rich:{red:{color:"#f00"}}},splitArea:{show:!0}},visualMap:{min:0,max:31,calculable:!1,orient:"horizontal",right:"0%",hoverLink:!0,textGap:2,top:"5",text:["大","小"],textStyle:{fontSize:10,color:"#d1e6eb",fontWeight:"bold"},itemWidth:5,itemHeight:80,color:["#0032af","#39b3c9","#FFFFFF"]},series:[{name:"异常次数",type:"heatmap",data:[[0,0,18],[0,1,13],[0,2,5],[0,3,15],[0,4,16],[0,5,17],[0,6,5],[0,7,5],[0,8,12],[1,0,180],[1,1,15],[1,2,1],[1,3,16],[1,4,17],[1,5,18],[1,6,1],[1,7,17],[1,8,1],[2,0,50],[2,1,16],[2,2,2],[2,3,17],[2,4,18],[2,5,5],[2,6,2],[2,7,23],[2,8,14],[3,0,80],[3,1,17],[3,2,13],[3,3,18],[3,4,5],[3,5,8],[3,6,13],[3,7,7],[3,8,17],[4,0,30],[4,1,18],[4,2,15],[4,3,5],[4,4,8],[4,5,30],[4,6,15],[4,7,20],[4,8,12],[5,0,180],[5,1,5],[5,2,16],[5,3,8],[5,4,30],[5,5,18],[5,6,16],[5,7,5],[5,8,12],[6,0,50],[6,1,8],[6,2,17],[6,3,30],[6,4,18],[6,5,5],[6,6,17],[6,7,7],[6,8,17],[7,0,21],[7,1,30],[7,2,18],[7,3,18],[7,4,5],[7,5,1],[7,6,18],[7,7,8],[7,8,14],[8,0,21],[8,1,18],[8,2,5],[8,3,5],[8,4,1],[8,5,2],[8,6,5],[8,7,15],[8,8,25]],label:{normal:{show:!1}},itemStyle:{normal:{borderColor:"rgba(255, 255, 255, 0.8)"},emphasis:{shadowBlur:10,shadowColor:"rgba(255, 255, 255, 0.5)"}}}]}),this.myEcharts=t}},props:[]},Lt=St,At=Object(h["a"])(Lt,xt,vt,!1,null,"8f02b516",null),Ft=At.exports,zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center"}},[i("table",{staticClass:"Abnormal"},[t._m(0),t._l(t.abnormal,(function(e){return i("tr",[i("td",[t._v(t._s(e.time))]),i("td",[t._v(t._s(e.monitor))]),i("td",[t._v(t._s(e.value))])])}))],2)])},Et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",[t._v("时间")]),i("td",[t._v("设备")]),i("td",[t._v("值")])])}],Ct={name:"AbnormalTable",data:function(){return{abnormal:[{monitor:"速度",time:"2019-10-25",value:"77"},{monitor:"轨迹",time:"2019-10-28",value:"50"},{monitor:"振幅",time:"2019-10-30",value:"90"},{monitor:"电机",time:"2019-11-02",value:"40"},{monitor:"环境",time:"2019-11-04",value:"6"}]}}},$t=Ct,_t=(i("551b"),Object(h["a"])($t,zt,Et,!1,null,"62061806",null)),kt=_t.exports,Xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.river}})},Tt=[],Ot={name:"River",data:function(){return{myEcharts:{},river:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.river));t.resize(),window.addEventListener("resize",(function(){t.resize()}));t.setOption({backgroundColor:"",tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{color:"rgba(0,0,0,0.2)",width:1,type:"solid"}}},legend:{data:["速度","轨迹","振幅","电机","电压","环境"],show:!0,itemGap:4,itemWidth:8,itemHeight:8,textStyle:{color:"#FFFFFF",fontWeight:"light",fontSize:6},left:"left",top:"5%"},singleAxis:{top:10,bottom:20,axisTick:{show:!1},axisLabel:{show:!1},axisLine:{lineStyle:{color:"#FFFFFF"}},type:"time",axisPointer:{animation:!0,label:{show:!1}},splitLine:{show:!0,lineStyle:{type:"dashed",opacity:.2}}},series:[{type:"themeRiver",itemStyle:{emphasis:{shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.8)"}},data:[["2019/10/08",10,"轨迹"],["2019/10/09",15,"轨迹"],["2019/10/10",35,"轨迹"],["2019/10/11",38,"轨迹"],["2019/10/12",22,"轨迹"],["2019/10/13",16,"轨迹"],["2019/10/14",7,"轨迹"],["2019/10/15",2,"轨迹"],["2019/10/16",17,"轨迹"],["2019/10/17",33,"轨迹"],["2019/10/18",40,"轨迹"],["2019/10/19",32,"轨迹"],["2019/10/20",26,"轨迹"],["2019/10/21",35,"轨迹"],["2019/10/22",40,"轨迹"],["2019/10/23",32,"轨迹"],["2019/10/24",26,"轨迹"],["2019/10/25",22,"轨迹"],["2019/10/26",16,"轨迹"],["2019/10/27",22,"轨迹"],["2019/10/28",10,"轨迹"],["2019/10/08",21,"速度"],["2019/10/09",25,"速度"],["2019/10/10",27,"速度"],["2019/10/11",23,"速度"],["2019/10/12",24,"速度"],["2019/10/13",21,"速度"],["2019/10/14",35,"速度"],["2019/10/15",39,"速度"],["2019/10/16",40,"速度"],["2019/10/17",36,"速度"],["2019/10/18",33,"速度"],["2019/10/19",43,"速度"],["2019/10/20",40,"速度"],["2019/10/21",34,"速度"],["2019/10/22",28,"速度"],["2019/10/23",26,"速度"],["2019/10/24",37,"速度"],["2019/10/25",41,"速度"],["2019/10/26",46,"速度"],["2019/10/27",47,"速度"],["2019/10/28",41,"速度"],["2019/10/08",10,"环境"],["2019/10/09",15,"环境"],["2019/10/10",35,"环境"],["2019/10/11",38,"环境"],["2019/10/12",22,"环境"],["2019/10/13",16,"环境"],["2019/10/14",7,"环境"],["2019/10/15",2,"环境"],["2019/10/16",17,"环境"],["2019/10/17",33,"环境"],["2019/10/18",40,"环境"],["2019/10/19",32,"环境"],["2019/10/20",26,"环境"],["2019/10/21",35,"环境"],["2019/10/22",4,"环境"],["2019/10/23",32,"环境"],["2019/10/24",26,"环境"],["2019/10/25",22,"环境"],["2019/10/26",16,"环境"],["2019/10/27",22,"环境"],["2019/10/28",10,"环境"],["2019/10/08",10,"电机"],["2019/10/09",15,"电机"],["2019/10/10",35,"电机"],["2019/10/11",38,"电机"],["2019/10/12",22,"电机"],["2019/10/13",16,"电机"],["2019/10/14",7,"电机"],["2019/10/15",2,"电机"],["2019/10/16",17,"电机"],["2019/10/17",33,"电机"],["2019/10/18",40,"电机"],["2019/10/19",32,"电机"],["2019/10/20",26,"电机"],["2019/10/21",35,"电机"],["2019/10/22",4,"电机"],["2019/10/23",32,"电机"],["2019/10/24",26,"电机"],["2019/10/25",22,"电机"],["2019/10/26",16,"电机"],["2019/10/27",22,"电机"],["2019/10/28",10,"电机"],["2019/10/08",10,"振幅"],["2019/10/09",15,"振幅"],["2019/10/10",35,"振幅"],["2019/10/11",38,"振幅"],["2019/10/12",22,"振幅"],["2019/10/13",16,"振幅"],["2019/10/14",7,"振幅"],["2019/10/15",2,"振幅"],["2019/10/16",17,"振幅"],["2019/10/17",33,"振幅"],["2019/10/18",40,"振幅"],["2019/10/19",32,"振幅"],["2019/10/20",26,"振幅"],["2019/10/21",35,"振幅"],["2019/10/22",4,"振幅"],["2019/10/23",32,"振幅"],["2019/10/24",26,"振幅"],["2019/10/25",22,"振幅"],["2019/10/26",16,"振幅"],["2019/10/27",22,"振幅"],["2019/10/28",10,"振幅"]],label:{show:!1}}],color:["#ffdc4a","#c66933","#703030","#2484c0","#0032af"]}),this.myEcharts=t}}},Wt=Ot,Bt=Object(h["a"])(Wt,Xt,Tt,!1,null,"0ccbf89c",null),Yt=Bt.exports,Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.predictAge}})},It=[],Mt={name:"PredictAge",data:function(){return{myEcharts:{},predictAge:Math.random().toString(),list:[[0,60],[10,59],[20,55],[30,48],[40,40],[45,35],[50,20],[55,0]],listb:[[0,60],[10,58],[20,52],[30,44]],listc:[[30,44],[40,34],[45,22],[50,0]],showdata:[[30,44]],destroyed:[[50,0],[55,0]]}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.predictAge));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=this;t.setOption({backgroundColor:"",grid:{left:"8%",right:"5%",bottom:"5%",top:"15%",show:!1,containLabel:!0},xAxis:{name:"时间",nameGap:0,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:8},min:0,max:60,type:"value",axisLine:{onZero:!1,lineStyle:{color:"#39b3c9"}},axisLabel:{show:!1,color:"#FFFFFF"},axisTick:{show:!1},splitLine:{show:!1}},yAxis:{name:"设备健康状况",nameGap:0,nameTextStyle:{color:"#d1e6eb",fontWeight:"bold",fontSize:8},min:0,max:80,type:"value",axisLine:{onZero:!1,lineStyle:{color:"#39b3c9"}},axisLabel:{show:!1,color:"#FFFFFF"},axisTick:{show:!1},splitLine:{show:!1}},series:[{id:"predict",type:"line",smooth:!0,symbol:"none",data:e.list,areaStyle:{color:new e.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#000000"},{offset:1,color:"#39b3c9"}])},itemStyle:{color:new e.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#000000"},{offset:1,color:"#39b3c9"}])},lineStyle:{color:"#39b3c9"}},{id:"Real",type:"line",smooth:!0,symbol:"none",markLine:{symbol:"none",silent:!0,lineStyle:{color:"#FFFFFF",type:"dotted"},label:{show:!1},data:[{xAxis:9},{xAxis:25},{xAxis:45}]},data:e.listb,lineStyle:{color:"#ffdc4a"}},{id:"RealPredict",type:"line",smooth:!0,symbol:"none",data:e.listc,lineStyle:{color:"#ffdc4a",type:"dotted"}},{type:"scatter",id:"Now",symbol:"triangle",label:{show:!0,distance:1,color:"#FFFFFF",formatter:function(){return"now"},position:[10,10]},data:this.showdata,symbolSize:10,itemStyle:{color:"#f64e01"}},{type:"scatter",id:"destroyed",symbol:"diamond",label:{show:!0,distance:1,color:"#FFFFFF",formatter:function(){return"end"},position:[10,-10]},data:this.destroyed,symbolSize:10,itemStyle:{color:"#f64e01"}}]}),this.myEcharts=t}}},Rt=Mt,jt=Object(h["a"])(Rt,Gt,It,!1,null,"1cfb6dc0",null),Pt=jt.exports,Zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:t.HealthRadar}})},Nt=[],Vt={name:"HealthRadar",data:function(){return{myEcharts:{},HealthRadar:Math.random().toString()}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var t=this.$echarts.init(document.getElementById(this.HealthRadar));t.resize(),window.addEventListener("resize",(function(){t.resize()}));var e=[{text:"速度X",max:5e3},{text:"速度Y",max:5e3},{text:"X轴",max:5e3},{text:"Y轴",max:5e3},{text:"振幅",max:5e3},{text:"电流",max:5e3},{text:"电压",max:5e3},{text:"温度",max:5e3},{text:"湿度",max:5e3}],i=["预计状况","实际状况"];t.setOption({backgroundColor:"",color:["#25e1f4","#4A99FF"],legend:{orient:"vertical",icon:"circle",show:!0,bottom:"10%",right:0,itemWidth:14,itemHeight:14,itemGap:21,textStyle:{fontSize:12,color:"#00E4FF"}},radar:{name:{textStyle:{color:"#fff",fontSize:12},show:!0},nameGap:3,radius:"75%",center:["45%","50%"],indicator:e,splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(255,255,255,0)"]}},axisLine:{lineStyle:{color:"#153269"}},splitLine:{lineStyle:{color:"#113865",width:1}}},series:[{type:"radar",symbolSize:8,data:[{value:[3200,3e3,3400,2e3,3900,4e3,3700,3400,4e3],name:i[1],itemStyle:{normal:{lineStyle:{color:"#25e1f4",shadowColor:"#4BFFFC",shadowBlur:10},shadowColor:"#4BFFFC",shadowBlur:10}},lineStyle:{color:"#25e1f4",width:1},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#4BFFFC"},{offset:.5,color:"rgba(0,0,0,0)"},{offset:1,color:"#4BFFFC"}],globalCoord:!1},opacity:1}},symbolSize:2},{value:[4200,4e3,4400,3e3,4e3,4e3,4e3,4e3,3700],name:i[0],itemStyle:{normal:{lineStyle:{color:"#4A99FF"},shadowColor:"#4A99FF",shadowBlur:10}},areaStyle:{normal:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#4A99FF"},{offset:.5,color:"rgba(0,0,0,0)"},{offset:1,color:"#4A99FF"}],globalCoord:!1},opacity:1}},symbolSize:2}]}]}),this.myEcharts=t}}},Ht=Vt,Dt=Object(h["a"])(Ht,Zt,Nt,!1,null,"69cf9c4c",null),Ut=Dt.exports,Jt={name:"Statistics",components:{RelatedColor:Ft,AbnormalTable:kt,River:Yt,PredictAge:Pt,HealthRadar:Ut}},qt=Jt,Qt=(i("0c18"),Object(h["a"])(qt,wt,gt,!1,null,"5fbdb748",null)),Kt=Qt.exports,te=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ee=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"webgl-content"},[i("div",{staticStyle:{width:"100VW",height:"100VH"},attrs:{id:"unityContainer"}})])])}],ie={name:"h53d",data:function(){return{unity:{},initDone:!1}},mounted:function(){var t=UnityLoader.instantiate("unityContainer","statics/Build/1109_12.json",{onProgress:UnityProgress});this.unity=t,this.initDone=!0},methods:{XAbnormal:function(){this.unity.SendMessage("MyUnity","XAbnormal","")},YAbnormal:function(){this.unity.SendMessage("MyUnity","YAbnormal","")},XVibration:function(){this.unity.SendMessage("MyUnity","XVibration","")},YVibration:function(){this.unity.SendMessage("MyUnity","YVibration","")},ShakeIt:function(){this.unity.SendMessage("MyUnity","ShakeIt","")}},computed:{xlocation:function(){return this.$store.state.sendmessage.XLocation},ylocation:function(){return this.$store.state.sendmessage.YLocation},xvibrate:function(){return this.$store.state.sendmessage.XVibration},yvibrate:function(){return this.$store.state.sendmessage.YVibration},shakeIt:function(){return this.$store.state.sendmessage.ShakeIt}},watch:{xlocation:{handler:function(t,e){1===t&&(this.initDone&&this.XAbnormal(),this.$store.commit("sendmessage/xrecover"))}},ylocation:{handler:function(t,e){1===t&&(this.initDone&&this.YAbnormal(),this.$store.commit("sendmessage/yrecover"))}},xvibrate:{handler:function(t,e){1===t&&(this.$store.commit("sendmessage/xvibraterecover"),this.initDone&&this.XVibration())}},yvibrate:{handler:function(t,e){1===t&&(this.$store.commit("sendmessage/yvibraterecover"),this.initDone&&this.YVibration())}},shakeIt:{handler:function(t,e){console.log("shakeit"+t),1===t&&(this.initDone&&this.ShakeIt(),this.$store.commit("sendmessage/shakeRecover"))}}}},oe=ie,ae=Object(h["a"])(oe,te,ee,!1,null,"3fa377fc",null),ne=ae.exports,re={name:"PageIndex",components:{realtime:pt,statistics:Kt,h53d:ne},computed:{},methods:{},mounted:function(){}},se=re,le=(i("d595"),i("fe09")),ce=Object(h["a"])(se,o,a,!1,null,"536fe8f6",null);e["default"]=ce.exports;ce.options.components=Object.assign({QPage:le["c"]},ce.options.components||{})},9659:function(t,e,i){},b545:function(t,e,i){"use strict";var o=i("9659"),a=i.n(o);a.a},bf52:function(t,e,i){},d2da:function(t,e,i){},d595:function(t,e,i){"use strict";var o=i("d2da"),a=i.n(o);a.a}}]);