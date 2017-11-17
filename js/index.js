import React, {Component} from 'react'
import {render} from 'react-dom'
import Top from './top'
import Middle from './middle'
import Bottom from './bottom'

class Page extends Component {
	
	render() {
		return (
			<div className="PageContainer">
				<Top />
				<Middle />
				<Bottom />
			</div>
		)
	}
}

render(
	<Page />,
	document.getElementById("root")
)
