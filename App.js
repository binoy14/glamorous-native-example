import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const theme = {
	primaryColor: '#2D84FF'
}

const WelcomeText = () => <Text style={styles.welcomeText}>Welcome to the App</Text>
const LearnMoreText = () => <TouchableOpacity><Text style={styles.learnMoreText}>Learn More</Text></TouchableOpacity>
const LoginButton = () => <TouchableOpacity style={styles.loginContainer}>
	<Text style={styles.loginText}>Login</Text>
</TouchableOpacity>
const App = () => {
	return (
		<View style={styles.flex}>
			<View style={styles.topContainer}>
				<WelcomeText />
				<LoginButton />
			</View>
			<View style={styles.bottomContainer}>
				<LearnMoreText />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	topContainer: {
		alignItems: 'center',
		flex: 5,
		backgroundColor: theme.primaryColor,
	},
	bottomContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		backgroundColor: 'white'
	},
	welcomeText: {
		marginTop: 130,
		fontSize: 30,
		color: 'white'
	},
	learnMoreText: {
		fontSize: 17,
		color: theme.primaryColor,
	},
	loginContainer: {
		marginTop: 200,
		width: 100,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 30,
		shadowColor: 'grey',
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 1,
		shadowRadius: 2
	},
	loginText: {
		fontSize: 14,
		color: theme.primaryColor,
	},
})

export default App;
