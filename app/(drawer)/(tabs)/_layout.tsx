import React from "react";
import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import HamburgerMenu from "@/components/HamburgerMenu";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function TabsLayout() {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerLeft: () => (
          <View style={styles.menu}>
            <HamburgerMenu onPress={handleOpenDrawer} />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />
      <Tabs.Screen
        name="route-planner"
        options={{
          title: "Rutero",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Busqueda",
        }}
      />
      <Tabs.Screen
        name="visits"
        options={{
          title: "Visitas",
        }}
      />
      <Tabs.Screen
        name="receivables"
        options={{
          title: "Recaudo",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginLeft: 10,
  },
});
