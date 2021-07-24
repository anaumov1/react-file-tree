import React, { useState } from "react";

function App () {
  return <div>
  <Folder name="Desktop">
  <Folder name="Music">
  <File name="all_star.jpeg"/>
  <File name="express_file.mp4"/>
  </Folder>
  <File name="dogs.jpeg"/>
  <File name="cats.png"/>
    </Folder>

  <Folder name="Applications"/>



  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen] = useState(true)
  const {name, children} = props;
  const direction = isOpen ? 'down' : 'right';

const handleClick = () => setIsOpen(!isOpen);


  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      </span>
    {name}
    <div style = {{ marginLeft: '17px '}}>
    {isOpen ? children : null}
    </div>
    </div>
};

const File = (props) => {
  
  return <div>{props.name}</div>
};

export default App;
