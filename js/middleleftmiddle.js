import React, {Component} from 'react'

export default class MiddleLeftMiddle extends Component {
	
	showBubble() {
		
	}
	
	hiddenBubble() {
		
	}
	
	render() {
		let _auth = this.props.firstImgData.auth
		return (
			<div className="MiddleLeftMiddleImgContainer">
				<img className="MiddleLeftMiddleImg" src={this.props.imgUrl || "/ppy/img/icon_kong.png"}
					onMouseOver={() => {this.refs.middleleftmiddleremind.style.display = "block"}}
					onMouseLeave={() => {this.refs.middleleftmiddleremind.style.display = "none"}}
					onClick={() => {this.refs.structs.submit()}}/>
				<div ref="middleleftmiddleremind" className="MiddleLeftMiddleRemind">点击图片进入零件组</div>
				<form ref="structs" style={{display: "none"}} action="/supervin/group" method="get">
					<input id="auth" name="auth" value={_auth} type="hidden" />
					<input id="firstload" name="firstload" value="true" type="hidden" />
					<input name="vin" value={params.vin} type="hidden" />
					<input name="code" value={params.code} type="hidden" />
				</form>
			</div>
		)
	}
}

MiddleLeftMiddle.propTypes = {
	imgUrl: React.PropTypes.string.isRequired
}
