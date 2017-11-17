import React, {Component} from 'react'
import MiddleTitle from './middletitle'
import MiddleLeft from './middleleft'
import MiddleRight from './middleright'
import MiddleBottom from './middlebottom'

//import {infoData, imgsData} from './datas'

export default class Middle extends Component {
	
	constructor(props) {
		super(props)
		this.ajaxDataNumber = 0
		if (PeipeiYun) {
			this.state = {
				infoData: {data: {brandurl: "", carhead: "", carimg: "", mains: [], subs: [], formats: []}},
				imgsData: {data: []}
			}
		}else {
			this.state = {
				infoData: infoData,
				imgsData: imgsData
			}
		}
		
	}
	
	componentDidMount(){
		if(PeipeiYun) {
			getAjax("/ppyvin/vinsearch", "code=" + params.code + "&vin=" + params.vin, infoData => {
				this.infoData = infoData
				getAjax("/ppyvin/vingroup", "code=" + params.code + "&vin=" + params.vin, imgsData => {
					this.imgsData = imgsData
					this.setState({
						infoData: this.infoData,
						imgsData: imgsData
					})
				})
			})
		}
	}
	
	render() {
		let _titleImgUrl = this.state.infoData.data.brandurl
		let _title = this.state.infoData.data.carhead
		let _brandname = this.state.infoData.data.brandname
		let _leftImgUrl = this.state.infoData.data.carimg
		let _rightData = this.state.infoData.data
		let _bottomListData = this.state.imgsData.data//数组
//		console.log("Middle render")
		return (
			<div className="MiddleContainer">
				<div className="MiddleBoxContainer">
					<MiddleTitle brandname={_brandname} imgUrl={_titleImgUrl} title={_title} firstImgData={_bottomListData.length > 0 ? _bottomListData[0] : {}} />
					<MiddleLeft imgUrl={_leftImgUrl} firstImgData={_bottomListData.length > 0 ? _bottomListData[0] : {}} />
					<MiddleRight data={_rightData} />
					<MiddleBottom listData={_bottomListData} />
				</div>
			</div>
		)
	}
}