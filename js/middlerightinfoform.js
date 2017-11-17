import React, {Component} from 'react'

export default class MiddleRightInfoForm extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		let _nodata = "initial"
		if(this.props.listData.length > 0) _nodata = "none"
		let items = (
			this.props.listData.map((a, index) => {
				return (
					<div key={index} className="MiddleRightInfoFormItem">
						{a}
					</div>
				)
			})
		)
		return (
			<div className="MiddleRightInfoFormContainer">
				{items}
				<div style={{display: _nodata}} className="MiddleRightInfoFormWaitingContainer">
					<img src={"/ppy/img/veryhuo.com_gif.gif"} />
				</div>
			</div>
		)
	}
}

MiddleRightInfoForm.propTypes = {
	listData: React.PropTypes.array.isRequired
}
