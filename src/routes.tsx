import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Loading from "./pages/Loading";

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{ cardStyle: { backgroundColor: "#f0f0f5" } }} >
                <AppStack.Screen name="Loading" component={Loading} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Menu" component={Menu} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
