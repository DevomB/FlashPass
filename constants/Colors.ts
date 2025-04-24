/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#007AFF';
const tintColorDark = '#fff';

export default {
	light: {
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
		primary: '#FF3B30', // Red
		secondary: '#007AFF', // Blue
		accent: '#FF9500', // Orange
		success: '#34C759', // Green
		error: '#FF3B30', // Red
		warning: '#FF9500', // Orange
		info: '#007AFF', // Blue
		card: '#F8F9FA',
		border: '#E5E5EA',
		notification: '#FF3B30',
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
		primary: '#FF453A', // Red
		secondary: '#0A84FF', // Blue
		accent: '#FF9F0A', // Orange
		success: '#32D74B', // Green
		error: '#FF453A', // Red
		warning: '#FF9F0A', // Orange
		info: '#0A84FF', // Blue
		card: '#1C1C1E',
		border: '#38383A',
		notification: '#FF453A',
	},
};
