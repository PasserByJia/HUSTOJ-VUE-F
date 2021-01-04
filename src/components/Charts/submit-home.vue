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
            data : [["2000-01-05",116],
                    ["2000-01-06",129],
                    ["2000-01-07",135],
                    ["2000-01-08",86],
                    ["2000-01-09",73],
                    ["2000-02-10",85],
                    ["2000-02-11",73],
                    ["2000-02-12",68],
                    ["2000-02-13",92],
                    ["2000-02-14",130],
                    ["2000-02-15",245],
                    ["2000-02-16",139],
                    ["2000-02-17",115],
                    ["2000-03-18",111],
                    ["2000-03-19",309],
                    ["2000-03-20",206],
                    ["2000-03-21",137],
                    ["2000-03-22",128],
                    ["2000-04-23",85],
                    ["2000-04-24",94],
                    ["2000-04-25",71],
                    ["2000-04-26",106],
                    ["2000-05-27",84],
                    ["2000-05-28",93],
                    ["2000-05-29",85],
                    ["2000-05-30",73],
                    ["2000-06-01",83],
                    ["2000-06-02",125],
                    ["2000-06-03",107],
                    ["2000-06-04",82],
                    ["2000-06-05",44],
                    ["2000-07-06",72],
                    ["2000-06-07",106],
                    ["2000-06-08",107],
                    ["2000-06-09",66],
                    ["2000-07-10",91],
                    ["2000-07-11",92],
                    ["2000-07-12",113],
                    ["2000-07-13",107],
                    ["2000-07-14",131],
                    ["2000-07-15",111],
                    ["2000-07-16",64],
                    ["2000-07-17",69],
                    ["2000-08-18",88],
                    ["2000-08-19",77],
                    ["2000-08-20",83],
                    ["2000-08-21",111],
                    ["2000-08-22",57],
                    ["2000-08-23",55],
                    ["2000-08-31",60],
                    ["2000-09-31",60],
                    ["2000-10-24",60],
                    ["2000-11-24",60],
                    ["2001-12-24",60]],
        }
    },
    computed: {
         
    },
    mounted() {
        this.initChart()
    },
    beforeDestroy() {
        if (!this.chart) {
        return
        }
        this.chart.dispose()
        this.chart = null
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
        initChart() {
            let dateList = [];
            let now  = new Date;
            for(let i=1;i<=180;i++){
                let t = now.setDate(now.getDate()-1)
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
                    bottom: '10%'
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
}
</style>