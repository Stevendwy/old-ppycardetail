import React, {Component} from 'react'
import MiddleBottomListItem from './middlebottomlistitem'

export default class MiddleBottomList extends Component {
	
	constructor(props) {
		super(props)
	}
	
	render() {
		let _nodata = "initial"
		if (this.props.listData.length > 0) {
			_nodata = "none"
		}
		
		let _items = (
			this.props.listData.map((a, index) => {
				return (
					<div key={index} className="MiddleBottomListItemContainer">
						<MiddleBottomListItem
							imgUrl={a.img}
							title={a.name}
							auth={a.auth}
						/>
					</div>
				)
			})
		)
		return (
			<div className="MiddleBottomListContainer">
				{_items}
				<div style={{display: _nodata}} className="MiddleBottomListWaitingContainer">
					<img className="MiddleLeftMiddleImg" src="/ppy/img/veryhuo.com_gif.gif" />
				</div>
			</div>
		)
	}
}

MiddleBottomList.propTypes = {
	listData: React.PropTypes.array.isRequired
}
