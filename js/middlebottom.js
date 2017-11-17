import React, {Component} from 'react'
import MiddleLeftTop from './middlelefttop'
import MiddleBottomList from './middlebottomlist'

export default class MiddleBottom extends Component {
	
	constructor(props) {
		super(props)
	}
	
	render() {
		let _listData = this.props.listData
		return (
			<div className="MiddleBottomContainer">
				<div className="MiddleBottomTopContainer">
					<MiddleLeftTop title="选择主组" />
				</div>
				<div className="MiddleBottomBottomContainer">
					<MiddleBottomList listData={_listData} />
				</div>
			</div>
		)
	}
}

MiddleBottom.propTypes = {
	listData: React.PropTypes.array.isRequired
}
