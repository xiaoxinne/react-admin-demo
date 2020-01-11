import React, {Component} from 'react'
import echarts from 'echarts/lib/echarts' 
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pictorialBar'

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/timeline';
import 'echarts/lib/component/axis';
import 'echarts/lib/component/markArea';

import './echarts.less'

interface Prop {
    style?: React.CSSProperties
    className?: string
    option: object
}
interface State extends Prop {}

export default class Echarts extends Component<Prop, State>{
    readonly state = {
        option: this.props.option || {}
    }
    componentDidMount () {
        var myChart = echarts.init(this.refs.submit as HTMLDivElement);
        myChart.setOption(this.state.option)
    }
    render () {
        const {style, className} = this.props
        return (    
            <div className={className ? `echarts ${className}` : 'echarts'}>
                <div ref='submit' style={style}></div>
            </div>
        )
    }
}