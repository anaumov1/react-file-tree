import React from "react";

function App () {
  return <div>
  <Folder name="Desktop" isOpen = {true}>
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
  const {name, isOpen, children} = props;
  const borderStyle = { border: '2px solid pink'};
  return <div style = {borderStyle}>
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
