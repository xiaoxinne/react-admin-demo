import Login from './page/login/login'
import Home from './page/home/home'
import Chart from './page/chart/chart'
import Base from './page/base/base'
import Card from './page/card/card'

const Routes = [
    {
        path: '/',
        component: Home,
        routes: [
            {
              path: "/chart",
              component: Chart
            },
            {
                path: "/base",
                component: Base
            },
            {
                path: "/card",
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