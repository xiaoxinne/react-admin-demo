import React, {Component} from 'react'
import Echarts from '../../component/echarts/echarts'
import Card from '../../component/card/card'
import './chart.less'

import {pie, bar, line} from '../../utils/echartsOptions'

export default class Chart extends Component {
    render () {
        return (
            <div className="chart">
                <div className="chart-line">
                    <Card 
                        className="card-echarts" 
                        name="柱状图" 
                        style={{'width': 900}}
                        bodyStyle={{'display': 'flex', 'height': 330}}>
                        <Echarts option={pie} style={{width: 300, height: 330}}/>
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
                        name="柱状图" 
                        style={{'width': 300}}
                        bodyStyle={{'height': 330}}>
                        <Echarts option={pie} style={{width: 300, height: 300}}/>
                    </Card>
                    <Card 
                        className="card-echarts" 
                        name="进度条" 
                        style={{'width': 580}}
                        bodyStyle={{'height': 330}}>
                        <Echarts option={line} style={{width: 580, height: 330}}/>
                    </Card>
                    <Card 
                        className="card-echarts" 
                        name="进度条" 
                        style={{'width': 350}}
                        bodyStyle={{'height': 330}}>
                        <Echarts option={pie} style={{width: 300, height: 300}}/>
                    </Card>
                </div>
            </div>
        )
    }
}