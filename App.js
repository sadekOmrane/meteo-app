import HomePage from "./pages/home.page";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchPage from "./pages/search.page";
import FavoritesPage from "./pages/favorites.page";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="search"
            component={SearchPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="favorites"
            component={FavoritesPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
