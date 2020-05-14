import React, { useState } from 'react';

const Drawer = () => {

  const [styleLeft, setStyleLeft] = useState({ width: "47.5%" });
  const [styleRight, setStyleRight] = useState({ width: "49%", paddingLeft: "25px" });
  const [clicked, setClicked] = useState(false);
  const [arrow, setArrow] = useState("<")

  const onDividerClickOpen = () => {
    setStyleLeft({ width: "0%", visibility: "hidden", transition: "all 0.3s ease-in-out" });
    setStyleRight({ width: "96%", paddingLeft: "25px" });
    setClicked(true);
    setArrow(">")
  }

  const onDividerClickClose = () => {
    setStyleLeft({ width: "47.5%", transition: "all 0.3s ease-in-out" });
    setStyleRight({ width: "49%", paddingLeft: "25px" });
    setClicked(false);
    setArrow("<");
  }

  return (
    <div style={{display: "flex"}}>

      <div style={styleLeft}>Left Side</div>

      <div 
        style={{ width: "1%", 
        border: "none", 
        height: "95vh", 
        margin: "10px 0", 
        backgroundColor: "#9FA3AA", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center" }}
        onClick={clicked ? onDividerClickClose : onDividerClickOpen} 
      >
        <div 
          style={{ fontSize: "115%", fontWeight: "bold", cursor: "pointer", color: "white" }} 
        >
          {arrow}
        </div>
        <div
          style={{ fontSize: "115%", fontWeight: "bold", cursor: "pointer", color: "white", marginTop: "-15px" }}
        >
          {arrow}
        </div>
        <div
          style={{ fontSize: "115%", fontWeight: "bold", cursor: "pointer", color: "white", marginTop: "-15px" }}
        >
          {arrow}
        </div>
      </div>

      <div style={styleRight}>Right Side</div>
      
    </div>
  )
}

export default Drawer;
