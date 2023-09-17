import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./src/screens/Home";
import TrainingComponent from "./src/components/Training";
import { List } from "./src/components/List";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false, // Ocultar o header para todas as telas
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ReflexoScreen" component={TrainingComponent} />
          <Stack.Screen name="ListaScreen" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
