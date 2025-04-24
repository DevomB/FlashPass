import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function NotFoundScreen() {
	const colorScheme = useColorScheme();
	const colors = Colors[colorScheme ?? 'light'];

	return (
		<View style={[styles.container, { backgroundColor: colors.background }]}>
			<Text style={[styles.title, { color: colors.text }]}>This screen doesn't exist.</Text>
			<Link href="/(tabs)/scan" style={[styles.link, { color: colors.primary }]}>
				<Text style={[styles.linkText, { color: colors.primary }]}>Go to home screen!</Text>
				</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 16,
		fontWeight: '600',
	},
});
