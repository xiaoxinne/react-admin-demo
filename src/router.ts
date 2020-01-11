import Login from './page/login/login'
import Home from './page/home'
import Chart from './page/home/chart/chart'
import Base from './page/home/base/base'
import Card from './page/home/page1/page1'

const Routes = [
    {
        path: '/home/',
        component: Home,
        routes: [
            {
              path: "/home/chart",
              component: Chart
            },
            {
                path: "/home/base",
                component: Base
            },
            {
                path: "/home/card",
                component: Card
            }
        ]
    },
    {
        path: '/login',
        exact: true,
        component: Login
    }
]
export default Routes