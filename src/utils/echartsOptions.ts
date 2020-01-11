const pie = {
    title: {
        text: "进度",
        left: "center",
        top: "bottom",
        textStyle: {
            color: '#009688',
            textAlign: 'center',
            fontSize: 14
        },
    },
    Legend: {
        orient: 'vertical'
    },
    series: [
        {
            name: ' ',
            type: 'pie',
            radius: [105, 110],
            hoverAnimation: false,
            data: [{
                value: 25,
                itemStyle: {
                    color: '#009688',
                },
                label: {
                    normal: {
                        formatter: function(params: any){
                            return params.value+'%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '40',
                            fontWeight: 'bold',
                            color: '#009688'
                        }
                    }
                },
            }, {
                labelLine: {
                    show: false
                },
                value: 100-25,
                itemStyle: {
                    normal: {
                        color: '#666'
                    },
                    emphasis: {
                        color: '#666'
                    }
                }
            }]
        }   
    ]
}
const bar = {
	tooltip:{
		show:true,
		formatter:"{b} {c}"
	},
	grid:{
		left:50,
		top:50,
		bottom:'0',
		right:'0'
	},
    xAxis : [
        {
            max: [100],
            type : 'value',
            axisTick: {show: false},
	        axisLine: {show:false},
	        axisLabel: {show:false},
	        splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['自用'],
            nameTextStyle:{color:'#666',fontSize:'18px'},
           	axisLabel: {
                show:false,
            },
            axisTick: {
                show: false,
            },
	        axisLine: {show: false}
        }
    ],
    graphic: [
        {
            type: 'text',
            left: 50,
            top: 'middle',
            style: {
                fill: '#666',
                text: '自用：17',
                font: 'bold 14px Microsoft YaHei'
            }
        }    
    ],
    series : [
        { 
            name:' ',
            type: 'bar',
            barWidth:10,
            silent:true,
            itemStyle: {
                normal: {
                    color: '#666',
                    barBorderRadius: 10
                },
            },
            barGap:'-100%',
            barCategoryGap:'50%',
            data: [100]
        },
        {
            name:' ',
            type:'bar',
            barWidth:10,
            label: {normal: {show: false,position: 'right',formatter: '{c}%'}},
            data:[{value:17,itemStyle:{normal:{color:'#FF5722'}}}],
            itemStyle: {
                barBorderRadius: 10
            },
        }
    ]
};

const line = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLabel: {
            color: '#666'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W',
            color: '#666'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 17,
            color: 'red'
        }, {
            gt: 17,
            color: 'green'
        }]
    },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550],
            itemStyle: {
                color: function() {
                    return '#FF5722'
                }
            },
            lineStyle: {
                color: '#FF5722'
            }
        },
        {
            name: '平均用电量',
            type: 'bar',
            data: [300, 280, 250, 260, 270, 300, 550],
            itemStyle: {
                color: function() {
                    return '#009688'
                },
            }
        }
    ]
};

let pictorialBarcolor = ['#ffc64d', '#6bbe29', '#fbc349', '#cb3434']
const pictorialBar = {
    tooltip:{
		show:false
    },
    xAxis: [
        {
            type: 'category',
            data: ['模块1', '模块2', '模块3', '模块4'],
            axisTick: {show: false},
	        axisLine: {show:false},
            splitLine: {show: false},
            axisLabel: {
                color: '#666'
            }
        }
    ],
    yAxis: [{
        axisTick: {show: false},
        axisLine: {show:false},
        axisLabel: {show:false},
        splitLine: {show: false}
    }],
    series: [
        {
            type: 'bar',
            data: [500, 500, 500, 500],
            z: -10,
            itemStyle: {
                color: '#1f313c'
            }
        },
        {
            type: 'pictorialBar',
            data: [123, 345, 231, 123],
            symbol: 'fixed',
            symbolSize: [45, 18],
            symbolMargin: 5,
            symbolRepeat: 'repeat',
            symbolBoundingData: 300,
            itemStyle: {
                color: function(value: any) {
                    return pictorialBarcolor[value.dataIndex]
                }
            }
        }
    ]
}
export {
    pie,
    bar,
    line,
    pictorialBar
}