// import React from 'react';
// import Stylish from './Stylish';


// const App = () => {
//   return (
//     <div>
//       <Stylish />
//       <img src={require("./images/productlist02.jpg")} />
//     </div>
//   );
// };
// export default App;



// file: src/App.js

import React from 'react';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';
import TotalHome from './Component/Total/TotalHome.js';

const Cmong = () => {
  return (
    <BrowserRouter>
      <TotalHome />
    </BrowserRouter>
  );
};


export default Cmong;