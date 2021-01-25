import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import * as base from 'native-base';

export default class ShowPlusDetail extends Component{
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const address = this.props.ship.img
		const img = 'https://shipcheck-server-vrxqx.run.goorm.io' + address
		return(
			<TouchableHighlight style={{flex: 1 / 2, width: '100%', alignItems: 'center'}} onPress={this.props.onPress}>
				<base.Card style={{width: 180, height: 200}}>
					<base.CardItem>
						<base.Form style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
							<Image resizeMode='contain' source={{uri:img}} style={{width: 150, height: 150,}}/>
							<base.Form style={{flexDirection: 'column', width: '100%'}}>
								<base.Text style={{fontFamily:'Nanum'}}>등록사진번호 : {this.props.ship.id}</base.Text>
								<base.Text style={{fontFamily:'Nanum'}}>등록날짜 : {this.props.ship.add_date}</base.Text>
							</base.Form>
						</base.Form>
					</base.CardItem>
				</base.Card>
			</TouchableHighlight>
		)
	}
}
