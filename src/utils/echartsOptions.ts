const pie = {
    title: {
        text: "进度",
        left: "center",
        top: "bottom",
        textStyle: {
            color: '#389af4',
            textAlign: 'center',
            fontSize: 14
        },
    },
    Legend: {
        orient: 'vertical'
    },
    series: [
        {
            name: '装备制造',
            type: 'pie',
            radius: [105, 110],
            hoverAnimation: false,
            data: [{
                value: 25,
                itemStyle: {
                    color: '#389af4',
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
                            color: '#fff'
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
                        color: '#dfeaff'
                    },
                    emphasis: {
                        color: '#dfeaff'
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
            nameTextStyle:{color:'#fff',fontSize:'18px'},
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
                fill: '#fff',
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
                    color: '#fff',
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
            data:[{value:17,itemStyle:{normal:{color:'#f80'}}}],
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
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],
        axisLabel: {
            color: '#fff'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W',
            color: '#fff'
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
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
                data: [ [{
                    name: '早高峰',
                    xAxis: '07:30'
                }, {
                    xAxis: '10:00'
                }], [{
                    name: '晚高峰',
                    xAxis: '17:30'
                }, {
                    xAxis: '21:15'
                }] ]
            }
        }
    ]
};
export {
    pie,
    bar,
    line
}