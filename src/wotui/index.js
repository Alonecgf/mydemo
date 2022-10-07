import {Button, Tabbar, TabbatItem} from 'wot-design'

const UIComponents = [Button, Tabbar, TabbatItem]

const WotUIplugin = {}

WotUIplugin.install = function (Vue) {
    
    UIComponents.forEach(Component => {

        Vue.use(Component)
    })
}
export default WotUIplugin