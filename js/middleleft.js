import React, {Component} from 'react'
import MiddleLeftTop from './middlelefttop'
import MiddleLeftMiddle from './middleleftmiddle'
import MiddleLeftBottom from './middleleftbottom'

export default class MiddleLeft extends Component {
	
	render() {
		let _nodata = "initial"
		if(this.props.imgUrl.length > 0) _nodata = "none"
		return (
			<div className="MiddleLeftContainer">
				<div className="MiddleLeftTopContainer">
					<MiddleLeftTop title="车型图片" />
				</div>
				<div className="MiddleLeftMiddleContainer">
					<MiddleLeftMiddle imgUrl={this.props.imgUrl} firstImgData={this.props.firstImgData} />
					<div style={{display: _nodata}} className="MiddleLeftMiddleWaitingContainer">
						<img src={"/ppy/img/veryhuo.com_gif.gif"} />
					</div>
				</div>
				<div className="MiddleLeftBottomContainer">
					<MiddleLeftBottom />
				</div>
			</div>
		)
	}
}

MiddleLeft.propTypes = {
	imgUrl: React.PropTypes.string.isRequired
}
