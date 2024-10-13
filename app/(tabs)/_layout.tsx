import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";

type Route = {
  name: string;
};

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState("index");

  return (
    <Tabs
      screenOptions={({ route }: { route: Route }) => ({
        tabBarActiveTintColor: "#CDE7BE",
        tabBarInactiveTintColor: "#EAF4F4",
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: {
          backgroundColor:
            activeTab === route.name
              ? "rgba(205, 231, 190, 0.1)"
              : "transparent",
          borderWidth: activeTab === route.name ? 2 : 0,
          borderColor: activeTab === route.name ? "#CDE7BE" : "transparent",
          borderRadius: 10,
          shadowColor: activeTab === route.name ? "#CDE7BE" : "transparent",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: activeTab === route.name ? 0.8 : 0,
          shadowRadius: 1,
        },
        tabBarIcon: ({ color }) => {
          let iconName: "home" | "search" | "bookmark-o" | undefined;
          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "explore") {
            iconName = "search";
          } else if (route.name === "library") {
            iconName = "bookmark-o";
          }

          return iconName ? (
            <FontAwesome size={25} name={iconName} color={color} />
          ) : null;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            setActiveTab("index");
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="search" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            setActiveTab("explore");
          },
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="bookmark-o" color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            setActiveTab("library");
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: "#313333",
    borderWidth: 1,
    backgroundColor: "#181A1A",
    borderTopWidth: 1,
    width: "100%",
    height: 60,
  },
});
