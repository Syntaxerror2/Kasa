import React, { useState } from "react";


export default function Accordion({title, content}) { 
const [isOpen, set] = useState(false)
const openAndClose = () => {set(!isOpen)}
return (
<div className="accordion">
<div className="accordion__header" onClick={openAndClose}>

<h2>{title}</h2>
<span>{isOpen ? "˅" : "˄"}</span>
</div>
{isOpen && <div className="accordion__content">
  <p>{content}</p>
</div>}

</div>




)
}