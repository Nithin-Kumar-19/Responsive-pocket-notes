import React, { useState, useEffect } from 'react';
import Modal from './Modales';
import banner from '../assets/Banner.png';
import lock from '../assets/lock.png';
import './sidePanel.css';

// Code for the view of side bar and the messages

  const getScreen = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [screenSize, setScreenSize] = useState(getScreen());

  useEffect(() => {
    const Screen = () => {
      setScreenSize(getScreen());
    };
    window.addEventListener('resize', Screen);

    const receiveGrp = async () => {
      let storageGrp = localStorage.getItem('grps');
      if (storageGrp) {
        let grps = await JSON.parse(storedgrps);
        setgrps(grps);
      }
    };
    fetchgrp();
  }, []);

  const handleClick = (grp) => {
    setgrpSelect(grp);
  };

  console.log(grps);
  return (
    <>
      {screenSize.width < 989 ? (
        <div className="sidePanelContainerMobile">
          {grpSelect ? (
            <Notes
              grpSelect={grpSelect}
              grps={grps}
              setgrps={setgrps}
            />
          ) : (
            <>
              <h1 className="headingMobile">Pocket Notes</h1>
              <button
                className="CreateButtonMobile"
                onClick={() => setOpenModal(true)}>
                + Create Notes grp
              </button>
              <div className="grpList">
                {grps.map((grp) => (
                  <div
                    key={grp.id}
                    className={`grpItem ${
                      grpSelect === grp ? 'selected' : ''
                    }`}
                    onClick={() => handleClick(grp)}
                  >
                    <div
                      className="grpIcon"
                      style={{ background: grp.color }}
                    >
                      {grp.grpName?.slice(0, 2)?.toUpperCase()}
                    </div>
                    <h2 className="grpName">{grp.grpName}</h2>
                  </div>
                ))}
              </div>
            </>
          )}
          const AnotherComponent = ({ setOpenModales }) => {
  
  return (
    <div>
      
      <sidePanelContent setOpenModales={setOpenModales} />
     <button className="CreateButton" onClick={() => setOpenModales(true)}>
              + Create Notes grp
    </div>
            </button>
            
        <div
          key={grp.id}
          className={`grpItem ${grpSelect === grp ? 'selected' : ''}`}
          onClick={() => handleClick(grp)}
        >
          <div className="grpIcon" style={{ background: grp.color }}>
            {grp.grpName?.slice(0, 2)?.toUpperCase()}
          </div>
          <h2 className="grpName">{grp.grpName}</h2>
        </div>
      ))}
  );
};

        </div>
          
          <div className="MessageAreaContainer">
            {grpSelect ? (
              <Notes
                grpSelect={grpSelect}
                grps={grps}
                setgrps={setgrps}
              />
           
          </div>
  );
};

export default sidePanel;
