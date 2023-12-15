import React from 'react';
import LandingPage from '../components/MessageArea';
 function toggleSidebar() {
 var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
const Home = () => {
  return (
    <div style={{ display:'inline', margin-left:'0px' }}>
      <LandingPage/>
    </div>
  );
};

export default Home;
