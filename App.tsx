
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Home} from './src/screen/Home';
import Details from './src/screen/Details';
import Navigator from './src/navigation/navigator1';
import { Welcome } from './src/screen/Welcome';


//const queryClient = new QueryClient()

const App = () => {
return <SafeAreaProvider> 
 <Navigator/>
</SafeAreaProvider>; 

// <Details/>
 //<Home/>
//<UseStarships/>
//<TermsScreen/>

//<QueryClientProvider client={queryClient}>

//<StarshipFeedScreen/>

//</QueryClientProvider>  
//<LoginScreen />

//<StarshipFeedScreen/>
};

export default App;