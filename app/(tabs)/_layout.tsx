import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
				tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						position: "absolute",
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="scan"
				options={{
					title: 'Scan',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="camera-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="storage"
				options={{
					title: 'Storage',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="folder-open" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
