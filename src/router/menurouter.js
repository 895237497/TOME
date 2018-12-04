import Login from '@/components/login/Login'
import AccountManage from '@/components/account/AccountManage'
import Role from '@/components/account/Role'
import Fence from '@/components/datacount/Fence'
import PlantLeasing from '@/components/datacount/PlantLeasing'
import Sos from '@/components/datacount/Sos'
import Management from '@/components/Management/Management'
import TestMap from '@/components/page/TestMap'
import Emitters from '@/components/page/Emitters'
import PeopleCounting from '@/components/page/PeopleCounting'
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
        // name: '登录',
        iconCls: 'el-icon-document',
    },
    {
        path: '/index',
        component: Index,
        // name: '首页',
        iconCls: 'el-icon-document',
        children: [
            {path: '/TestMap', component: TestMap, name: '地图'},
            {path: '/SpotService', component: SpotService, name: '景区服务商'},
            {path: '/PeopleCounting', component: PeopleCounting, name: '人流统计'},
            {path: '/PromotionLog', component: PromotionLog, name: '升级日志'},
            {path: '/Promotion', component: Promotion, name: '升级情况'},
            {path: '/MachineCount', component: MachineCount, name: '机器码统计'},
            {path: '/Place', component: Place, name: '位置版'},
            {path: '/EmittersCount', component: EmittersCount, name: '发射源'},
            {path: '/Emitters', component: Emitters, name: '发射源统计'},
            {path: '/Management', component: Management, name: '设备信息'},
            {path: '/Sos', component: Sos, name: 'SOS统计'},
            {path: '/PlantLeasing', component: PlantLeasing, name: '设备租赁次数'},
            {path: '/Fence', component: Fence, name: '电子围栏统计'},
            {path: '/Role', component: Role, name: '角色管理'},
            {path: '/AccountManage', component: AccountManage, name: '账号管理'},
            {path: '/EmittersLog', component: EmittersLog, name: '发射源访问日志'},
        ]
    },
   
    
]

export default routes