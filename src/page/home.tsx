import React from 'react';
import {Input, Layout, Menu, Icon, Dropdown, Drawer, Breadcrumb} from 'antd';
import {Link, RouteComponentProps} from 'react-router-dom';
import {renderRoutes, RouteConfig} from 'react-router-config';
import './home.less';

import {setFullScreen, isFullScreen} from '../utils/fullScreen'

interface State {
    value: string;
    userName: string;
    defaultOpenKeys: string;
    defaultSelectedKeys: string;
    collapsed: boolean;
    full: boolean;
    drawerVisible: boolean;
}

interface MenusProps {
    title?: string | React.ReactNode;
    path?: string;
    icon?: string;
}

interface Menus extends MenusProps{
    children: MenusProps[];
}

interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}

class Home extends React.Component<RouteComponentProps, State> {
    componentDidMount () {
        const self: Home = this
        window.onresize = function() {
            if (!isFullScreen()) {
                self.setState({
                    full: true
                })
            }
        }
    }
    menus:Menus[] = [
        {
            title: '主页',
            icon: 'home',
            children: [{
                title: '控制台',
                path: 'chart'
            },{
                title: '主页1',
                path: 'card'
            },{
                title: '主页2',
                path: 'base'
            }]
        },
        {
            title: '组件',
            icon: 'home',
            children: []
        }
    ]
    readonly state = {
        value: '',
        userName: '管理员',
        defaultOpenKeys: '0',
        defaultSelectedKeys: '0-0',
        collapsed: false,
        full: true,
        drawerVisible: false
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
    toggleCollapsed (): void {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    fullScreen (): void {
        this.setState({
            full: !this.state.full
        })
        setFullScreen(this.state.full)
    }
    showDrawerVisible (): void {
        this.setState({
            drawerVisible: true
        })
    }
    closeDrawerVisible (): void {
        this.setState({
            drawerVisible: false
        })
    }
    infoMenuRender () {
        return (
            <Menu>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    基本资料
                </a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    修改密码
                </a>
                </Menu.Item>
                <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    退出
                </a>
                </Menu.Item>
            </Menu>
        )
    }
    itemRender (route: Route, params: any, routes: Route[], paths: string[]):React.ReactNode {
        console.log(route)
        return (
            <div>
                213
            </div>
        )
    }
    render () {
        const {Header, Sider, Content} = Layout
        const {match} = this.props
        const {route} = this.props as RouteConfig
        const {SubMenu} = Menu
        return (
            <Layout className="home">
                <Sider width={220} className="menu" collapsed={this.state.collapsed}>
                    <Menu 
                        mode="inline"
                        style={{
                            backgroundColor: '#20222A', 
                            color: '#fff',
                            height: '100%',
                            textAlign: 'left'
                        }}
                        defaultOpenKeys={[this.state.defaultOpenKeys]}
                        defaultSelectedKeys={[this.state.defaultSelectedKeys]}
                        onSelect={item => this.setState({defaultSelectedKeys: item.key})}
                    >
                        {
                            this.menus.map((item, index) => {
                                return (
                                    <SubMenu 
                                        key={index}
                                        title={
                                            <span>
                                                <Icon type={item.icon} />
                                                <span>{item.title}</span>
                                            </span>
                                        }>
                                        {
                                        item.children && item.children.length > 0 ? item.children.map((value, idx) => {
                                                return (
                                                    <Menu.Item 
                                                        key={`${index}-${idx}`}
                                                        className="icon-list">
                                                        <Link to={match.path + value.path}>
                                                            {value.title}
                                                        </Link>
                                                    </Menu.Item>
                                                )
                                        }) : null
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <div className="header-left">
                            <span onClick={this.toggleCollapsed.bind(this)}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </span>
                            <span>
                                <Icon type="global" />
                            </span>
                            <span>
                                <Icon type="reload" />
                            </span>
                            <span className="search">
                                <Input
                                    placeholder="搜索" 
                                    value={this.state.value}
                                    onChange={val => this.setState({value: val.target.value})}
                                    style={{'border': 'none'}}/>
                            </span>
                        </div>
                        <div className="header-right">
                            <span>
                                <Icon type="bell" />
                            </span>
                            <span>
                                <Icon type="tag" rotate={270}/>
                            </span>
                            <span onClick={this.fullScreen.bind(this)}>
                                <Icon type={this.state.full ? "fullscreen" : 'fullscreen-exit'} />
                            </span>
                            <span className="info">
                                <Dropdown overlay={this.infoMenuRender}>
                                    <a className="ant-dropdown-link" href="/">
                                        <cite>小枫</cite>
                                        <Icon type="caret-down" theme="filled" />
                                    </a>
                                </Dropdown>
                            </span>
                            <span onClick={this.showDrawerVisible.bind(this)}>
                                <Icon type="more" />
                            </span>
                        </div>
                    </Header>
                    <Layout>
                        <Content className="content" style={{'minHeight': 'auto'}}>
                            <Breadcrumb className="crumb" itemRender={this.itemRender.bind(this)} />
                            {renderRoutes(route.routes)}
                        </Content>
                    </Layout>
                </Layout>
                <Drawer
                    title="测试"
                    placement="right"
                    closable={false}
                    maskStyle={{backgroundColor: 'rgba(0, 0, 0, .1)'}}
                    onClose={this.closeDrawerVisible.bind(this)}
                    visible={this.state.drawerVisible}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </Layout>
        )
    }
}
export default Home