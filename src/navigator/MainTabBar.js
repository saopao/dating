'use strict';

import React from "react";
import { Image, View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { screenWidth } from "../common/MyConstants";

export class MainTabBar extends React.Component {
	jump(routeName) {
		this.props.navigation.navigate(routeName);
	}

	renderMessageBadge() {
		let mc = 0;

		if (mc > 0) {
			return (
				<View style={styles.badge}>
					<Text style={styles.badgeText}>
						{mc > 99 ? '99+' : mc}
					</Text>
				</View>
			)
		} else {
			return null;
		}
	}

	render() {
		const {
			navigation,
			renderIcon,
			activeTintColor,
			inactiveTintColor
		} = this.props;
		const {
			routes
		} = navigation.state;

		return (
			<View>
				<View style={styles.tabbar}>
					{routes && routes.map((route, index) => {
						const focused = index === navigation.state.index;
						const tintColor = focused ? activeTintColor : inactiveTintColor;
						let title = "";
						switch (route.routeName) {
							case "Explore":
								title = 'Explore';
								break;
							case "MyCollection":
								title = 'My Collection';
								break;
							default:
								break;
						}
						return (
							<TouchableWithoutFeedback
								key={route.key}
								onPress={() => {
									this.jump(route.routeName);
								}}
							>
								<View style={styles.tab}>
									{renderIcon({
										route,
										index,
										focused,
										tintColor
									})}
									<Text style={{ color: tintColor, fontSize: 15, marginTop: 5 }}>
										{title}
									</Text>
								</View>
							</TouchableWithoutFeedback>
						);
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabbar: {
		height: 69,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tab: {
		alignSelf: 'stretch',
		flexDirection: 'column',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	badge: {
		height: 12,
		width: 22,
		borderRadius: 6,
		backgroundColor: '#FF5338',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 7,
		left: screenWidth / 8 + 7,
	},
	badgeText: {
		fontFamily: 'PingFangSC',
		fontSize: 10,
		color: '#fff',
	}
});