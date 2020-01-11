import React, {Component} from 'react'
import Echarts from '../../../component/echarts/echarts'
import Card from '../../../component/card/card'
import './chart.less'

import {pie, bar, line, pictorialBar} from '../../../utils/echartsOptions'

export default class Chart extends Component {
    render () {
        return (
            <div className="chart">
                <div className="chart-line">
                    <Card 
                        className="card-echarts" 
                        name="柱状图" 
                        style={{'width': 800}}
                        bodyStyle={{'display': 'flex', 'height': 330}}>
                        <Echarts option={pie} style={{width: 300, height: 330}}/>
                        <Echarts option={pie} style={{width: 300, height: 330}}/>
                    </Card>
                    <Card 
                        className="card-echarts" 
                        name="进度条" 
                        style={{'width': 350}}
                        bodyStyle={{'height': 330}}>
                        <Echarts option={bar} style={{width: 300, height: 100}}/>
                        <Echarts option={bar} style={{width: 300, height: 100}}/>
                        <Echarts option={bar} style={{width: 300, height: 100}}/>
                    </Card>
                </div>
                <div className="chart-line">
                    <Card 
                        className="card-echarts" 
                        name="用电量" 
                        style={{'width': 800}}
                        bodyStyle={{'height': 330}}>
                        <Echarts option={line} style={{width: 800, height: 330}}/>
                    </Card>
                    <Card 
                        className="card-echarts" 
                        name="进度条" 
                        style={{'width': 350}}
                        bodyStyle={{'height': 330}}>
                        <Echarts option={pictorialBar} style={{width: 350, height: 330}}/>
                    </Card>
                </div>
            </div>
        )
    }
}