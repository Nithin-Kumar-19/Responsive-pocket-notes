zimport React, { useState, useEffect } from 'react';
import sendIcon from '../assets/send.png';
import back from '../assets/back.png';
import styles from './NoteSpace.module.css';

const NoteSpace = (props) => {
  const [note, setNote] = useState('');
  const data = {
      id,
      paragraph,
      const calculateDate = () => {
  const currentDate = new Date();
  const options = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return currentDate.toLocaleDateString('en-US', options);
};
// This is used to calculate the date and time in the notes
const calculateTime = () => {
  const currentTime = new Date();
  const options = { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };
  return currentTime.toLocaleTimeString('en-US', options);
};
const date = calculateDate();
const time = calculateTime();

console.log('Date:', date);
console.log('Time:', time);


  let groupId = props.groupId;
  let notes = groupId.notes;
  let grps = props.grps;
  let setgrps = props.setgrps;

  const getScreen = () => {
    import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handlerResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handlerResize);
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  var [screenSize, setScreenSize] = useState(getScreen());

  useEffect(() => {
    const Screen = () => {
      setScreenSize(getScreen());
    };
    window.addEventListener('resize', Screen);
  }, []);

  const keypress = (b) => {
    if (b.code === 'Enter') {
      handlerSubmit();
    }
  };

  return (
    <>
      {screenSize.width < 999 ? (
        <div className={styles.notesContainer}>
          <div className={styles.notesHeader}>
            <div className={styles.notesGrp}>
              {groupId.groupName?.slice(0, 2)?.toUpperCase()}
            </div>
            <h2 className={styles.groupName}>{groupId.groupName}</h2>
          </div>
          <div className={styles.NotesAndDateMobile}>
            {notes.map((note) => (
              <div class = "DateTxt">
                <div className={styles.DatTxt}>
                  <p className={styles.TimeMobile}>{note.time}</p>
                  <p className={styles.DateMobile}>{note.date}</p>
                </div>
                <p className={styles.TextMobile}>{note.note}</p>
              </div>
            ))}
          </div>
          <div class = "TextareaMobile">
            <textarea
              className={styles.TextInputMobile}
              type="text"
              textarea="Enter your text here..."
              onKeyDown={keypress}
            ></textarea>
            
            <div>
              <p>Date for mobile view: {mobileDate}</p>
              {/* Other components and JSX */}
                <div className={styles.DateTxt}>
                        <div className={styles.DateAndTime}>
                          <p className={styles.Time}>{note.time}</p>
                          <p className={styles.Date}>{note.date}</p>
                        </div>
            </div>
  );
};
          </div>
        </div>
      ) : (
        <div className={styles.notesContainer}>
          <div className={styles.notesHeader}>
            <div
              className={styles.notesGroup}
              style={{ background: groupId.color }}
            >
              {groupId.groupName?.slice(0, 2)?.toUpperCase()}
            </div>
            <h2 className={styles.groupName}>{groupId.groupName}</h2>
          </div>
          <div className={styles.NotesAndDate}>
            <div>
                {noteSpace.map((note) => (
                  <div key={note.id}>
                    <p>{note.content}</p>
                    <p>Date: {note.date}</p>
                  </div>
                ))}
              </div>
               <div className={styles.DateTxt}>
                        <div className={styles.DateAndTime}>
                          <p className={styles.Time}>{note.time}</p>
                          <p className={styles.Date}>{note.date}</p>
                        </div>
                <p className={styles.Text}>{note.note}</p>
              </div>
            ))}
          </div>
          
      )}
    </>
  );
};

export default NoteSpace;
