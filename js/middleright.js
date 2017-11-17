import React, {Component} from 'react'
import MiddleRightSelector from './middlerightselector'
import MiddleRightInfoForm from './middlerightinfoform'

export default class MiddleRight extends Component {
	
	constructor(props) {
		super(props)
		this.selectorTitles = ["车辆数据", "次要数据", "规格数据"]
		this.state = {
			listDataIndex: 0
		}
	}
	
	selectorClick(selectorIndex) {
		this.setState({
			listDataIndex: selectorIndex
		})
	}
	
	render() {
		let _listData ={}
		let _listDataIndex = this.state.listDataIndex
		let _data = this.props.data
		let _unables = []
		//处理无数据
		if (_data.subs.length < 1) _unables.push(1)
		else if(_data.formats.length < 1) _unables.push(2)
		
		switch (_listDataIndex){
			case 0:
				_listData = _data.mains
				break;
			case 1:
				_listData = _data.subs
				break;
			case 2:
				_listData = _data.formats
				break;
			default:
				break;
		}
		return (
			<div className="MiddleRightContainer">
				<div className="MiddleRightTopContainer">
					<MiddleRightSelector
						titles={this.selectorTitles}
						selectorClick={this.selectorClick.bind(this)}
						unables={_unables} />
				</div>
				<div className="MiddleRightBottomContainer">
					<MiddleRightInfoForm listData={_listData} />
				</div>
			</div>
		)
	}
}

MiddleRight.propTypes = {
	data: React.PropTypes.object.isRequired
}