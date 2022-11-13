import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://api.nessieisreal.com/branches?key=be19ccd868157d152650c0603639e19d')
      .then(response=>response.json())
      .then((json) => {
        console.log(json);
      }
    );
  },[])
  
  return (
      <div className="App">
        <header className="App-header">
          <form>
            <label for="fname">First Name: </label>
            <input type="text" id="fname" name="fname"></input><br></br>
            <label for="lname">Last Name: </label>
            <input type="text" id="lname" name="lname"></input><br></br>
            <label for="zipcode">Zip Code: </label>
            <input type="text" id="zipcode" name="zipcode"></input><br></br>
            <label for="state">State (abbr): </label>
            <input type="text" id="state" name="state"></input><br></br>
            <label for="state">City: </label>
            <input type="text" id="city" name="city"></input><br></br>
            <input type="submit" value="Submit"></input>
          </form> 
        </header>
      </div>
  );
}

export default App;
