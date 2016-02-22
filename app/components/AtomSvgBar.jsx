import React from 'react'
import Editable from './Editable.jsx'

export default class AtomSvgBar extends React.Component {
	render() {
		const { atom, itemId, updateAtom, updateItem } = this.props
		const width = (atom.width / 100) * 299
		return <div className="atom_svg_bar">
							<Editable
          			value={atom.width}
								inputType={'range'}
								onValueClick={(val) => this.updateEditState(atom, itemId, updateAtom, updateItem) }
          			onEdit={(val) => updateAtom({id:atom.id, width:val,editing:false})}>
          				<svg viewBox="0 0 339 40" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    								<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
        						<g id="prigressBar">
            				<circle id="Oval-1" fill="#FFFFFF" cx="20" cy="20" r="20"></circle>
            				<circle id="Oval-1-Copy" fill="#D8D8D8" cx="319" cy="20" r="20"></circle>
            				<rect id="Rectangle-1" fill="#D8D8D8" x="20" y="0" width="299" height="40"></rect>
            				<rect id="Rectangle-1-Copy" fill="#FFFFFF" x="20" y="0"  width={width} height="40"></rect>
        					</g>
   				 				</g>
								</svg>
          		</Editable>
					 </div>
	}
	updateEditState (atom, itemId, updateAtom, updateItem) {
		updateAtom({id:atom.id, editing:true}) 
		updateItem({id:itemId, editing:true})
	}
}