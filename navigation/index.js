import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DetalhesDoLugarTela from '../screens/detalhes/index';
import ListaDeLugaresTela from '../screens/listagem/index';
import MapaTela from '../screens/mapa/index';
import NovoLugarTela from '../screens/cadastro/index';
import { Platform } from 'react-native';
import Cores from '../cores/index'



const LugaresNavigator = createStackNavigator({

    Lugares: ListaDeLugaresTela,
    DetalhesDoLugar: DetalhesDoLugarTela,
    NovoLugar: NovoLugarTela,
    Mapa: MapaTela

}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
        }

    });


export default createAppContainer(LugaresNavigator);