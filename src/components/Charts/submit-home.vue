<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts  from 'echarts'
import 'echarts/lib/component/legend'
export default {
    props: {
        className: {
        type: String,
        default: 'chart'
        },
        id: {
        type: String,
        default: 'chart'
        },
        width: {
        type: String,
        default: '200px'
        },
        height: {
        type: String,
        default: '500px'
        }
    },
    data() {
        return {
            chart: null,
            data : [],
            screenWidth: document.documentElement.clientWidth,//屏幕宽度
            screenHeight: document.documentElement.clientHeight,//屏幕高度
        }
    },
    mounted() {
        this.initChart()
        var _this = this;
        window.onresize = function(){ // 定义窗口大小变更通知事件
            _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
            _this.screenHeight = document.documentElement.clientHeight; //窗口高度
        };
    },
    beforeDestroy() {
        if (!this.chart) {
        return
        }
        this.chart.dispose()
        this.chart = null
    },
    watch:{
        'screenWidth':function(val){ //监听屏幕宽度变化
            this.reprint()

        },
        'screenHeight':function(){ //监听屏幕高度变化
            this.reprint()
        }
    },
    methods: {
        formatDate(date) {
            date = new Date(date);
            let myyear = date.getFullYear();
            let mymonth = date.getMonth() + 1;
            let myweekday = date.getDate();
            mymonth < 10 ? mymonth = "0" + mymonth : mymonth;
            myweekday < 10 ? myweekday = "0" + myweekday : myweekday;
            return `${myyear}-${mymonth}-${myweekday}`;
        },
        randomData(a,b){
            let data  = [] ;
            for(let i =0;i<180;i++) data.push(Math.floor((Math.random()*b)+a));
            return data;
        },
        reprint(){
            let myChart = echarts.init(document.getElementById(this.id))
            myChart.resize();
        },
        initChart() {
            let dateList = [];
            for(let i=1;i<=180;i++){
                let now  = new Date;
                let t = now.setDate(now.getDate()-180+i)
                dateList.push(this.formatDate(t));
            }
            console.log(dateList)
            let valueList1 = this.randomData(50,100);
            
            let valueList2 = this.randomData(0,50);
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById(this.id))
            myChart.setOption({
                 // Make gradient line here
                visualMap: [{
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    min: 0,
                    max: 400
                }],
                title: [{
                    text: '提交&解决'
                }],
                legend: {
                    data: ['提交','解决']
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: [{
                    data: dateList
                }],
                yAxis: [{
                    splitLine: {show: false}
                }],
                grid: [{
                    bottom: '10%',
                    right: '4%',
                    left:'5%'
                }],
                series: [{
                    name:'提交',
                    type: 'line',
                    showSymbol: false,
                    data: valueList1
                },
                {
                    name:'解决',
                    type: 'bar',
                    showSymbol: false,
                    data: valueList2
                }]
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.chart{
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
}
</style>