import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import glamorous from 'glamorous-native'; 

const theme = {
	primaryColor: '#2D84FF'
};

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	alignItems: {
		alignItems: 'center',
	},
});

const Wrapper = glamorous.view(styles.flex);

const TopWrapper = glamorous.view(styles.alignItems, {
	flex: 5,
	backgroundColor: theme.primaryColor
});

const BottomWrapper = glamorous.view(styles.flex, styles.alignItems, {
	justifyContent: 'center',
	backgroundColor: 'white'
});

const WelcomeText = glamorous.text({
	marginTop: 130,
	fontSize: 30,
	color: 'white'
});

const LearnMoreText = glamorous.text({
	fontSize: 17,
	color: theme.primaryColor,
});

const LoginButtonWrapper = glamorous.touchableOpacity({
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
});

const LoginButtonText = glamorous.text({
	fontSize: 14,
	color: theme.primaryColor,
});

const App = () => {
	return (
		<Wrapper>
			<TopWrapper>
				<WelcomeText>
					Welcome to the App
				</WelcomeText>
				<LoginButtonWrapper>
					<LoginButtonText>Login</LoginButtonText>
				</LoginButtonWrapper>
			</TopWrapper>
			<BottomWrapper>
				<TouchableOpacity>
					<LearnMoreText>Learn More</LearnMoreText>
				</TouchableOpacity>
				<LearnMoreText />
			</BottomWrapper>
		</Wrapper>
	);
};

export default App;
