import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../page/Welcome";
import SignIn from "../page/SignIn";
import Home from "../page/Home";
import CheckList from "../page/CheckList";
import Config from "../page/Config";
import Profile from "../page/Profile";
import ToSendNfe from "../page/ToSendNfe";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CheckList"
                component={CheckList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Config"
                component={Config}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ToSendNfe"
                component={ToSendNfe}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
