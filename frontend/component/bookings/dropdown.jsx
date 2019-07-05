import React from "react";

const Dropdown = () => {
    counDown => () => {
        
    }
  return (
    <div className="dropdown">
      <button onClick="myFunction()" className="dropbtn">
        <div id="guest" className="input">
          1 Guest
        </div>
        <svg className="slider" height="16px" width="20px">
          <path
            id="sv"
            d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
          />
        </svg>
      </button>
      <div id="myDropdown" className="dropdown-content">
        <div id="home1" className="home">
          <div className="Children">
            <span className="c1">Adults</span>
            <br />
            <span className="children2" />
          </div>
          <div className="buttonbox">
            <button className="add" onClick='countdown("adultnum")'>
              -
            </button>
            <div id="adultnum" className="num">
              1
            </div>
            <button className="add" onClick='countup("adultnum")'>
              +
            </button>
          </div>
        </div>
        <div className="home">
          <div className="Children">
            <span className="c1">Children </span>
            <br />
            <span className="children2"> Ages 2-12</span>
          </div>
          <div className="buttonbox">
            <button className="add" onClick="countdown('Childrennum')">
              -
            </button>
            <div id="Childrennum" className="num">
              0
            </div>
            <button className="add" onClick="countup('Childrennum')">
              +
            </button>
          </div>
        </div>
        <div className="home">
          <div className="Children">
            <span className="c1">Infants</span>
            <br />
            <span className="children2">Under 2</span>
          </div>
          <div className="buttonbox">
            <button className="add" onClick="countdown('Infantnum')">
              -
            </button>
            <div id="Infantnum" className="num">
              0
            </div>
            <button className="add" onClick="countup('Infantnum')">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
