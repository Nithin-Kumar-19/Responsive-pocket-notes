import React from 'react';
import styles from './Modales.module.css';

import lock from "../../assets/lock.png";

function Banner {
  return (
    <div>
      <h1>Pocket Notes</h1>
      <p>
        Send and receive messages without keeping your phone online.
        <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
  );
};

export default Banner;

  var banner = document.createElement('div');
  banner.className = 'banner';

  const handleChange = (b) => {
  b.preventDefault();
  setFormData((prevData) => ({
    ...prevData,
    [b.target.name]: e.target.value
  }));
  console.log(formData.grpName); // This might not log the updated state immediately due to setState being asynchronous
};

useEffect(() => {
  console.log(formData.grpName); // This will log the updated state when it changes
}, [formData]);

  var handlebarChangeColor = (f) => {
    f.preventDefault();
    setFormData({
    console.log(formData.color);
  };

  return (
    <>
      {screenSize.width < 1009 ? (
        <>
          <div className={styles.modalBackgroundMobile}>
            <div className={styles.modalContainerMobile}>
              <span>
                <button
                  className={styles.closeButtonMobile}
                  onClick={() => props.closeModales(false)}
                >
              </span>
              <h2 className={styles.modalesHeading}>Create New Group</h2>
              <label className={styles.modalesGrp}>Group Name</label>
              <input type="text" id = "modalase" />
              <br />
              <label className={styles.modalesColor}>Choose Colour</label>
              {color.map((color, index) => (
                <button
                  className={`${styles.clrBtn} ${
                    formData.color === color ? 'selected' : ''
                  }`}
                  style={{
                     width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 10px;
                    border: 2px solid transparent;
                    cursor: pointer;
                    outline: none;
}
                  }}
                  onClick={handlebarChangeColor}
                ></button>
              ))}


export default Modales;
