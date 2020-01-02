import React from 'react';
import {Input, Avatar, Layout, Menu, Icon} from 'antd';
import {ClickParam} from "antd/lib/menu";
import {Link, RouteComponentProps} from 'react-router-dom';
import {renderRoutes, RouteConfig} from 'react-router-config'
import Logo from '../../assets/logo.png';
import './home.less';


interface State {
    value: string
    userName: string
    defaultSelectedKeys: string
}

class Home extends React.Component<RouteComponentProps, State> {
    menus = [
        {
            name: 'pie-chart',
            path: 'chart'
        },
        {
            name: 'database',
            path: 'base'
        },
        {
            name: 'credit-card',
            path: 'card'
        }
    ]
    readonly state = {
        value: '',
        userName: '管理员',
        defaultSelectedKeys: this.menusIndex
    }

    /**
     *  获取路由最后一串字符  localhost/app  获取的是app
     *
     * @readonly
     * @memberof Home
     */
    get lastLocationName ():string {
        let regex = /(?<=\/)([A-Z]|[a-z]|[0-9])+/g
        let nameArr = this.props.location.pathname.match(regex)
        return nameArr ? nameArr[nameArr.length - 1] : ''
    }
    get menusIndex ():string {
        let idx = 0
        this.menus.forEach((item, index) => {
            if (item.path === this.lastLocationName) {
                idx = index
            }
        })
        return idx.toString()
    }
    searchHandle () {
        console.log(this.state.value)
    }
    menuHandle (obj: ClickParam) {
        console.log('转移', obj)
    }
    render () {
        const { Search } = Input
        const {Header, Sider, Content} = Layout
        const {match} = this.props
        const {route} = this.props as RouteConfig
        return (
            <Layout className="home">
                <Header className="header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="name">
                        小风的后台
                    </div>
                    <div className="state">
                        <div className="search">
                            <Search 
                                placeholder="input search text"
                                value={this.state.value}
                                onChange={val => this.setState({value: val.target.value})}
                                onSearch={this.searchHandle.bind(this)}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className="info">
                            <span className="user-name">
                                欢迎你：{this.state.userName}
                            </span>
                            <span className="user-head">
                                <Avatar icon="user" />
                            </span>
                        </div>
                    </div>
                </Header>
                <Layout>
                    <Sider width={100} className="menu">
                        <Menu 
                            className="mune-icon"
                            defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                            mode="inline"
                            theme="dark"
                            onClick={this.menuHandle.bind(this)}>
                                {
                                    this.menus.map((item, index) => {
                                        return <Menu.Item className="icon-list" key={index}>
                                            <Link to={match.url + item.path}>
                                                <Icon type={item.name} theme="filled" className="icon"/>
                                            </Link>
                                        </Menu.Item>
                                    })
                                }
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content className="content" style={{'minHeight': 'auto'}}>
                            {renderRoutes(route.routes)}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Home