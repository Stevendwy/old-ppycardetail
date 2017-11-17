import React, {Component} from 'react'

export default class InfoBubble extends Component {
	
	render() {
		let _showBubble = this.props.showBubble
		let _content = this.props.content
		return (
			<div style={{display: _showBubble}} className="InfoBubbleContainer">
				<div className="InfoBubbleContent"
					data-name="bubbleContent"
					style={{color:"#000"}}	
				>
					{_content}
				</div>
			</div>
		)
	}
}

InfoBubble.propTypes = {
	showBubble: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
}
