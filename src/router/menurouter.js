import Login from '@/components/login/Login'
import AccountManage from '@/components/account/AccountManage'
import Role from '@/components/account/Role'
import Fence from '@/components/datacount/Fence'
import PlantLeasing from '@/components/datacount/PlantLeasing'
import Sos from '@/components/datacount/Sos'
import Management from '@/components/Management/Management'
import TestMap from '@/components/page/TestMap'
import Emitters from '@/components/page/Emitters'
import EmittersCount from '@/components/page/EmittersCount'
import EmittersLog from '@/components/page/EmittersLog'
import Place from '@/components/page/Place'
import MachineCount from '@/components/page/MachineCount'
import Promotion from '@/components/promotion/Promotion'
import PromotionLog from '@/components/promotion/PromotionLog'
import SpotService from '@/components/SpotService/SpotService'
import Menu from '@/components/common/Menu'
import Index from '@/components/Index'

let routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },

    {
        path: '/index',
        name: 'index',
        component: Menu,
    },
    // {
    //     path: '/index/Menu',
    //     name:'menu',
    //     components: Menu,
    //     Children: [
    //         {
    //             path: 'Emitters',
    //             component: Emitters
    //         },
    //         {
    //             path: 'EmittersLog',
    //             component: EmittersLog
    //         },
    //         {
    //             path: 'EmittersCount',
    //             component: EmittersCount
    //         },
    //         {
    //             path: 'Place',
    //             component: Place
    //         },
    //         {
    //             path: 'MachineCount',
    //             component: MachineCount
    //         }
    //     ]
    // },
]

export default routes