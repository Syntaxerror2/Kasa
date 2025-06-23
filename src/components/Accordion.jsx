import React, { useState } from "react";
import '../styles/Accordion.scss'
import downArrow from '../assets/Vector_down.svg'


export default function Accordion({title, content}) { 
const [isOpen, set] = useState(false)
const openAndClose = () => {set(!isOpen)}
return (
<div className="accordion">
<div className="accordion__header" onClick={openAndClose}>

<h2 className="accordion__title">{title}</h2>
<span className="accordion__span"><img src={downArrow} className={isOpen ? 'rotate': 'rotate__up'} /></span>
</div>
<div className={`accordion__container ${isOpen ? 'open' : 'close'}`}>
  <p className="accordion__content">{content}</p>
</div>

</div>




)
}