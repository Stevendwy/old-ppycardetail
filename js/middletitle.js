import React, {Component} from 'react'
import {pathsData, leftData, rightData} from './datas'

export default class MiddleTitle extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			paths: ["首页", "VIN车架号查询", "车辆详情"]
		}
	}
	
	pathClick(e) {
		let _index = e.target.getAttribute("data-index")
		let _href
//		console.log(_index)
		if (_index == 0) {
			_href = "/"
		} else if(_index == 1){
			_href = "/ppy?_t=vin"
		}
		location.href = _href
	}
	
	render() {
		let path = (
			this.state.paths.map((a, index) => {
				let [classContent, imgShow] = ["", "inline"]
				if(index == this.state.paths.length - 1) [classContent, imgShow] = ["MiddleHighLight", "none"]
				return (
					<span key={index}>
						<span data-index={index} className={classContent} onClick={this.pathClick.bind(this)}>{a}</span>
						<img src="http://007vin.com/ppy/img/Lt/arrow_r.png" style={{display: imgShow}} />
					</span>
				)
			})
		)
		let _auth = this.props.firstImgData.auth
		let _brandname = this.props.brandname
		let _imgRight = <div className="MiddleTitleImgContainer"
						onMouseOver={() => this.refs.imgright.style.display = "block"}
						onMouseLeave={() => this.refs.imgright.style.display = "none"}>
							<img src={this.props.imgUrl || ""} />
							<div ref="imgright" className="CarBubble">
								<p>{_brandname}</p>
							</div>
						</div>
		return (
			<div className="MiddleTitleContainer">
				<div className="MiddleTitleBackground"></div>
				<div className="MiddleTitle">
					<span onClick={() => {this.refs.structs.submit()}}>{this.props.title || ""}</span>
					{_imgRight}
				</div>
				<div className="MiddlePath">
					{path}
				</div>
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