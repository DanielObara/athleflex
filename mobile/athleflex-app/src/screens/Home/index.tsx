import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";

export function Home() {
	const navigation = useNavigation();

	const handleOptionPress = (screenName: string) => {
		navigation.navigate(screenName);
	};

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity
					style={styles.menuItem}
					onPress={() => handleOptionPress('ReflexoScreen')}
				>
					<Text style={styles.menuText}>Reflexo</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.menuItem}
					onPress={() => handleOptionPress('ListaScreen')}
				>
					<Text style={styles.menuText}>Lista</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				{/* <TouchableOpacity
					style={styles.menuItem}
					onPress={() => handleOptionPress('KatasScreen')}
				>
					<Text style={styles.menuText}>Katas</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.menuItem}
					onPress={() => handleOptionPress('MovimentosScreen')}
				>
					<Text style={styles.menuText}>Movimentos</Text>
				</TouchableOpacity> */}

			</View>
		</View>
	);
}
