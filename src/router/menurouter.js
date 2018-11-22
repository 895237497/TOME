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
import Promotion from '@/components/page/admin/promotion/Promotion'
import PromotionLog from '@/components/page/admin/promotion/PromotionLog'
import SpotService from '@/components/SpotService/SpotService'
import Index from '@/components/Index'
import Menu from '@/components/common/Menu'
import RFID from "../components/page/admin/RFID"

let routes = [
    {
        path: '/',
        component: Login,
        // name: '订单管理',
        iconCls: 'el-icon-document',
        // children: [
        //     {path: '/RFID', component: RFID, name: ''},
        // ]
    },

    {
        path: '/index',
        component: Index,
        // name: '订单管理',
        iconCls: 'el-icon-document',
        children: [
            {path: '/RFID', component: RFID, name: ''},
            {path: '/SpotService', component: SpotService, name: '景区服务商'},
            {path: '/PromotionLog', component: PromotionLog, name: '空页面'},
            {path: '/Promotion', component: Promotion, name: '空页面'},
            {path: '/MachineCount', component: MachineCount, name: '空页面'},
            {path: '/Place', component: Place, name: '空页面'},
            {path: '/EmittersCount', component: EmittersCount, name: '空页面'},
            {path: '/Emitters', component: Emitters, name: '空页面'},
            {path: '/Management', component: Management, name: '空页面'},
            {path: '/Sos', component: Sos, name: '空页面'},
            {path: '/PlantLeasing', component: PlantLeasing, name: '空页面'},
            {path: '/Fence', component: Fence, name: '空页面'},
            {path: '/Role', component: Role, name: '空页面'},
            {path: '/AccountManage', component: AccountManage, name: '空页面'},
            {path: '/EmittersLog', component: EmittersLog, name: '空页面'},
        ]
    },
   
    
]

export default routes