import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Platform, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { styles } from './styles';

// Importe o som padrão embutido (coloque o arquivo no diretório assets)
const soundFilePath = require('../../../assets/notification.mp3');


const TrainingComponent: React.FC = () => {
	const [inputTime, setInputTime] = useState('');
	const [countdown, setCountdown] = useState(0);
	const [isCounting, setIsCounting] = useState(false);

	const playDefaultSound = async () => {
		const { sound } = await Audio.Sound.createAsync(soundFilePath);
		await sound.playAsync();
	};

	const startCountdown = () => {
		const timeInSeconds = parseInt(inputTime, 10);
		if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
			// Handle invalid input
			return;
		}
		setCountdown(timeInSeconds);
		setIsCounting(true);
	};

	const stopCountdown = () => {
		setIsCounting(false);
	};

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		const playSoundRandomly = () => {
			if (isCounting && countdown > 0) {
				const randomDelay = Math.floor(Math.random() * countdown) * 1000; // Tempo aleatório dentro do intervalo
				intervalId = setTimeout(() => {
					playDefaultSound();
					playSoundRandomly(); // Chama recursivamente para continuar o som aleatoriamente
				}, randomDelay);
			}
		};

		if (isCounting && countdown > 0) {
			playSoundRandomly();
		} else if (isCounting && countdown === 0) {
			playDefaultSound();
		}

		return () => {
			clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
		};
	}, [isCounting, countdown]);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Treinamento de Reflexo</Text>
			<Text style={styles.subTitle}>O treinamento de reflexo irá disparar um som para que você execute o movimento. Este som ficará tocando de forma aleatória dentro do tempo que voce estipular.</Text>
			<TextInput
				style={styles.input}
				value={inputTime}
				onChangeText={(text) => setInputTime(text)}
				keyboardType="numeric"
				placeholder="Insira o tempo em segundos"
				placeholderTextColor={'#6b6b6b'}
			/>
			<TouchableOpacity style={styles.button} onPress={startCountdown}>
				<Text style={styles.buttonText}>Iniciar Treinamento</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.stopButton} onPress={stopCountdown}>
				<Text style={styles.stopButtonText}>Parar Treinamento</Text>
			</TouchableOpacity>
		</View>
	);
};

export default TrainingComponent;
