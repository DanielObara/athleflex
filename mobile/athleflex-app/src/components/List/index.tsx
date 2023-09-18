import { FlatList, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import TrainingComponent from "../../components/Training";

export function List() {
	const participants = ["Daniel", "Miguel", "Henrico", "Arthur"]

	function handleParticipantAdd() {
		console.log('Adicionou um participante');
	}

	function handleParticipantRemove(name: string) {
		console.log(`Removeu um participante: ${name}`);
	}
	return (
		// <TrainingComponent />
		<View style={styles.container}>
			<Text style={styles.title}>
				Nome do evento
			</Text>
			<Text style={styles.date}>
				Sábado, 16 de Setembro de 2023.
			</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor={'#6b6b6b'}
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>
						+
					</Text>
				</TouchableOpacity>

			</View>

			<FlatList
				data={participants}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<Participant name={item} onRemove={() => handleParticipantRemove(item)} />
				)}
				showsHorizontalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.emptyList}>
						Nenhum participante cadastrado.
					</Text>
				)}
			>

			</FlatList>
		</View>
	);
}
