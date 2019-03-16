import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Styles from './Styles';
import { InfoContainer } from '../../Components/InfoContainer';
import { Option } from '../../Components/Option';
import { Button } from '../../Components/Button';
import { Question } from '../../Components/Qusetion';
let Sound = require('react-native-sound');

const operators = ['+', '-', '*', '/', '%'];
const limits = [10, 100, 1000, 1000];
let correctAnswerAudio = require('../../assets/correct_answer.mp3');
let wrongAnswerAudio = require('../../assets/wrong_answer.mp3');

class HomeScreen extends Component {
	constructor() {
		super();
		this.state = {
			leftOperand: -1,
			rightOperand: -1,
			operator: '',
			answers: [],
			resultIndex: -1,
			result: -1,
			selectionIndex: -1,
			maxScore: 3,
			currentScore: 0,
			count: 0,
			interval: 0,
		};
		this.refreshQuestion = this.refreshQuestion.bind(this);
		this.verifyUserSelection = this.verifyUserSelection.bind(this);
		this.navigateToResultsScreen = this.navigateToResultsScreen.bind(this);
		this.correctAnswer = new Sound(correctAnswerAudio, error => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
		});
		Sound.setCategory('Playback');
		this.correctAnswer.setVolume(0.8);

		this.wrongAnswer = new Sound(wrongAnswerAudio, error => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
		});
		this.wrongAnswer.setVolume(0.8);
	}
	getRandomNumber = limit => {
		let randomNumber = Math.floor(Math.random() * limit + 1);
		return randomNumber;
	};

	getRandomOperator = () => {
		const index = Math.floor(Math.random() * 5);
		return operators[index];
	};

	getRandomLimit = () => {
		const index = Math.floor(Math.random() * 4);
		return limits[index];
	};

	getRandomindex = () => {
		return Math.floor(Math.random() * 4);
	};

	findCurrentAnswer = (leftOperand, rightOperand, operator) => {
		switch (operator) {
			case '+':
				return leftOperand + rightOperand;

			case '-':
				return leftOperand - rightOperand;
			case '*':
				return leftOperand * rightOperand;
			case '/':
				return leftOperand / rightOperand;
			case '%':
				return leftOperand % rightOperand;
			default:
				return -1;
		}
	};

	setCurrentQuestion = limit => {
		const leftOperand = this.getRandomNumber(limit);
		const rightOperand = this.getRandomNumber(limit);
		const operator = this.getRandomOperator();
		const result = Math.floor(this.findCurrentAnswer(leftOperand, rightOperand, operator));
		const resultIndex = this.getRandomindex();
		let answers = [];
		for (let index = 0; index < 4; index++) {
			if (index === resultIndex) {
				answers[index] = result;
			} else {
				answers[index] = this.getRandomNumber(limit);
			}
		}
		this.setState(
			{
				leftOperand: leftOperand,
				rightOperand: rightOperand,
				operator: operator,
				answers: answers,
				result: result,
				resultIndex: resultIndex,
				interval: 30,
			},
			() => {
				setTimeout(() => {
					this.counter = setInterval(() => {
						this.setState({ interval: this.state.interval - 1 }, () => {
							if (this.state.interval === 0) {
								setTimeout(() => {
									this.refreshQuestion();
								}, 300);
							}
						});
					}, 1000);
				}, 500);
			}
		);
	};

	resetQuestion = isCorrect => {
		console.log('resetQuestion', ' count : ' + this.state.count);
		console.log('resetQuestion', ' maxScore : ' + this.state.maxScore);
		if (this.state.count == this.state.maxScore - 1) {
			clearInterval(this.counter);
			this.navigateToResultsScreen();
		} else {
			let score = this.state.currentScore;
			if (isCorrect) {
				score++;
			}
			clearInterval(this.counter);
			this.setState({
				leftOperand: -1,
				rightOperand: -1,
				operator: '',
				answers: [],
				resultIndex: -1,
				result: -1,
				selectionIndex: -1,

				currentScore: score,
				count: this.state.count + 1,
				interval: 0,
			});
		}
	};

	refreshQuestion = (initial = false) => {
		console.log('refreshQuestion', ' count : ' + this.state.count);
		console.log('refreshQuestion', ' maxScore : ' + this.state.maxScore);
		if (this.state.count == this.state.maxScore - 1) {
			clearInterval(this.counter);
			this.navigateToResultsScreen();
		} else {
			if (!initial) {
				this.resetQuestion();
			}

			this.setCurrentQuestion(this.getRandomLimit());
		}
	};

	componentDidMount() {
		this.refreshQuestion(true);
	}

	showResultResponse = (isCorrect, index) => {
		switch (index) {
			case 0:
				this.option0;
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			default:
				break;
		}
	};

	verifyUserSelection = index => {
		setTimeout(() => {
			const userAnswer = this.state.answers[index];
			this.setState({ selectionIndex: index });
			if (index === this.state.resultIndex && userAnswer === this.state.result) {
				//play the audio correct and change the selected box to green
				this.correctAnswer.play();
				setTimeout(() => {
					this.resetQuestion(true);
					this.setCurrentQuestion(this.getRandomLimit());
				}, 1000);
			} else {
				//play the audio wrong and change the selected box to red
				this.wrongAnswer.play();
				setTimeout(() => {
					this.resetQuestion(false);
					this.setCurrentQuestion(this.getRandomLimit());
				}, 1000);
			}
		}, 200);
	};

	showIconOrText = index => {
		if (this.state.selectionIndex === index) {
			if (this.state.resultIndex === index) {
				return 1;
			} else {
				return 2;
			}
		} else {
			return 0;
		}
	};

	navigateToResultsScreen = score => {
		this.props.navigation.push('ResultScreen', { score: this.state.currentScore });
	};

	componentWillUnmount() {
		this.correctAnswer.release();
		this.wrongAnswer.release();
	}

	render() {
		const option0Color =
			this.state.selectionIndex != 0 ? '#FF1493' : this.state.resultIndex === 0 ? '#9ACD32' : '#F01C1C';
		const option1Color =
			this.state.selectionIndex != 1 ? '#FFD700' : this.state.resultIndex === 1 ? '#9ACD32' : '#F01C1C';
		const option2Color =
			this.state.selectionIndex != 2 ? '#1E90FF' : this.state.resultIndex === 2 ? '#9ACD32' : '#F01C1C';
		const option3Color =
			this.state.selectionIndex != 3 ? '#800080' : this.state.resultIndex === 3 ? '#9ACD32' : '#F01C1C';

		const score = this.state.currentScore + '/' + this.state.count;

		return (
			<View style={Styles.container}>
				{Platform.OS == 'ios' ? <StatusBar barStyle="light-content" translucent={false} /> : null}
				<View style={{ flexDirection: 'row', height: 80, justifyContent: 'center', alignItems: 'center' }}>
					<InfoContainer
						text={this.state.interval}
						units="secs"
						byline="left"
						color="#fff"
						backgroundColor="#00BFFF"
						infoSize={32}
						unitsSize={14}
						bylineSize={14}
						isTime={true}
					/>
					<View style={Styles.divider} />
					<InfoContainer
						text={score}
						units=""
						byline="score"
						color="#fff"
						backgroundColor="#9ACD32"
						infoSize={32}
						unitsSize={14}
						bylineSize={14}
						isTime={false}
					/>
				</View>
				<Question
					leftOperand={this.state.leftOperand}
					rightOperand={this.state.rightOperand}
					operator={this.state.operator}
				/>
				<View>
					<View style={[Styles.gridSize, { flexDirection: 'row' }]}>
						<Option
							ref={component => (this.option0 = component)}
							text={this.state.answers[0]}
							bkColor={option0Color}
							textColor="#fff"
							textSize={32}
							onPress={this.verifyUserSelection}
							index={0}
							showImage={this.showIconOrText(0)}
						/>
						<Option
							ref={component => (this.option1 = component)}
							text={this.state.answers[1]}
							bkColor={option1Color}
							textColor="#fff"
							textSize={32}
							onPress={this.verifyUserSelection}
							index={1}
							showImage={this.showIconOrText(1)}
						/>
					</View>
					<View style={[Styles.gridSize, { flexDirection: 'row' }]}>
						<Option
							ref={component => (this.option2 = component)}
							text={this.state.answers[2]}
							bkColor={option2Color}
							textColor="#fff"
							textSize={32}
							onPress={this.verifyUserSelection}
							index={2}
							showImage={this.showIconOrText(2)}
						/>
						<Option
							ref={component => (this.option3 = component)}
							text={this.state.answers[3]}
							bkColor={option3Color}
							textColor="#fff"
							textSize={32}
							onPress={this.verifyUserSelection}
							index={3}
							showImage={this.showIconOrText(3)}
						/>
					</View>
				</View>
				<Button onPress={this.navigateToResultsScreen} />
			</View>
		);
	}
}

export default HomeScreen;
