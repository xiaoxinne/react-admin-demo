import React, {Component} from 'react'
import {Icon} from 'antd'

import './card.less'

interface Props {
    name?: string
    style?: React.CSSProperties
    titleStyle?: React.CSSProperties
    bodyStyle?: React.CSSProperties
    className?: string
}

export default class Card extends Component<Props, {}> {
    render () {
        const children = React.Children.toArray(this.props.children)
        const {style, className, titleStyle, bodyStyle} = this.props
        return (
            <div className={className ? `card ${className}` : 'card'} style={style}>
                <div className="card-title" style={titleStyle}>
                    <Icon type="smile" theme="outlined" />
                    <div className="name">
                        {this.props.name || '默认名称'}
                    </div>
                    <Icon type="setting" theme="filled" />
                </div>
                <div className="card-body" style={bodyStyle}>
                    {
                        React.Children.map(children, (item, index) => {
                            return item
                        })
                    }
                </div>
            </div>
        )
    }
}