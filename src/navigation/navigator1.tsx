import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Details  from '../screen/Details';
import { Home } from '../screen/Home';
import { Welcome } from '../screen/Welcome';




const screens ={
    Welcome:{
       screen:Welcome

   },

   // TermsScreen:{
       // screen:TermsScreenyar
   // },

    Home:{
        screen:Home
    },

    Details:{
        screen:Details
    },



}

const navigator1 = createStackNavigator(screens);
export default createAppContainer(navigator1);
