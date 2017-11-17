import React, {Component} from 'react'

export default class MiddleBottomListItem extends Component {
	
	click() {
//		console.log(this.props.title)
		this.refs.structs.submit()
	}
	
	render() {
		let _imgUrl = this.props.imgUrl
		let _title = this.props.title
		let _auth = this.props.auth
		
		return (
			<div className="MiddleBottomListItemImgContainer">
				<img className="MiddleBottomListItemImg" src={_imgUrl || "/ppy/img/icon_wu.png"} 
					onClick={this.click.bind(this)}/>
				<div className="MiddleBottomListItemTitle">{_title || ""}</div>
				<form ref="structs" style={{display: "none"}} action="/supervin/group" method="get">
					<input id="auth" name="auth" value={_auth} type="hidden" />
					<input id="firstload" name="firstload" value="false" type="hidden" />
					<input name="vin" value={params.vin} type="hidden" />
					<input name="code" value={params.code} type="hidden" />
				</form>
			</div>
		)
	}
}

MiddleBottomListItem.propTypes = {
	imgUrl: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
}