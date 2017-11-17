import React, {Component} from 'react'

export default class Top extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showLogout: "none",
			showNumber: "--"
		}
	}
	
	componentDidMount() {
		if (PeipeiYun) {
			getAjax("/usersinfos", {}, (loginStatus) => {
				if(loginStatus.code == 1) location.href="/logout"
				
				this.setState({
					showNumber: loginStatus.data.users
				})
			})
		} else{
			this.setState({
				showNumber: "1234567890"
			})
		}
		
	}
	
	showLogout(e) {
		let _showLogout = "none"
		if (e.type == "mouseover") {
			_showLogout = "initial"
		}
		this.setState({
			showLogout: _showLogout
		})
	}
	
	render() {
		return (
			<div className='TopContainer'>
				<div className="TopBackground"></div>
				<img className="TopLogo" src='http://007vin.com/ppy/img/logo.png' />
				<div className="TopRightContainer">
					<div className="TopRightSelectersContainer">
						<span className="TopRightSelector" onClick={() => {location.href="/ppy?_t=vin"}}>车架号查询</span>
						<span className="TopRightSelector" onClick={() => {location.href="/ppy?_t=car"}}>车型查询</span>
						<span className="TopRightSelector" onClick={() => {location.href="/ppy?_t=part"}}>零件号查询</span>
					</div>
					<div className="TopRightAccountContainer"
						onMouseOver={this.showLogout.bind(this)}
						onMouseLeave={this.showLogout.bind(this)}>
						<span className="TopRightAccount">{this.state.showNumber}</span>
						<span><img src="/ppy/img/icon_xiala.png" /></span>
						<div ref="logout" className="Logout" style={{display: this.state.showLogout}} onClick={() => {location.href="/logout"}}>
							<img src="http://007vin.com/ppy/img/Lt/icon——exit.png"/> 退出
						</div>
					</div>
				</div>
			</div>
		)
	}
}