import './App.css';
import {useState, useEffect} from 'react'
import Weather from './weather';

function App() {
  const [isLoading, setisLoading] = useState(true);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setisLoading(false);
      } , (error) => {
        alert(error);
      })
    }
    else {
      alert("Your browser does not support geolocation!")
    }
  }, [])

  if(isLoading) {
    return <p>Loading...</p>
  }
  else {
      return (
          <div className="content margin">
            <h3>Your position</h3>
            <p>
                Position: &nbsp;
                {lat.toFixed(3)},
                {lng.toFixed(3)}
            </p>
            <Weather lat={lat} lng={lng} />
          </div>
      );
    }
}
export default App;


//   if(isLoading) {
//     return <p>Loading...</p>
// }
// else {
//     return (
//         <div className="content">
//           <h3>Your position</h3>
//           <p>
//               Position:&nbsp;
//               {lat.toFixed(3)}, 
//               {lng.toFixed(3)}
//           </p>
//           <Weather lat={lat} lng={lng} />
//         </div>
//     )
// }


// function Location() {
//   const [lat, setLat] = useState(0);
//   const [lng, setLng] = useState(0);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
//       } , (error) => {
//         alert(error);
//       })
//     }
//     else {
//       alert("Your browser does not support geolocation!")
//     }
//   }, [])

//   return (
//     <div className="margin">
//       <p className="text"> Your position is:</p>
//       <p>
//       {lat.toFixed(3)}, 
//       {lng.toFixed(3)}
//       </p>
//     </div>
//   );

// export default Location;
