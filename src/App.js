import { Slider } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState({});

  const [rang, setRang] = useState(30);
  const handleChange = (e, newRang) => {
    setRang(newRang);
  };

  var [formValue, setFormValue] = useState([]);

  var [diff, setDiff] = useState(0);
  
  var handleBlur = (e) => {
    if(e.target.name === "Start"){
      setDisplay(e.target.name);
    }
    if(e.target.value == "Bangladesh Dhaka"){
      setDisplay(e.target.name);
      console.log("display",display)
    }
    
    if(e.target.ariaValueMax === "60" ){
      setDisplay(e.target.ariaValueMax);
      console.log("rang",display)
    }

    if(e.target.name === "Blood-Group"){
      setDisplay(e.target.name);
      console.log("display",display)
    }

    if(e.target.className === "good-at" ){
      setDisplay(e.target.className);
      console.log("display",display)
    }

    if(e.target.name === "Gender" ){
      setDisplay(e.target.name);
      console.log("display",display)
    }
    
    if(e.target.name === "Gender" ){
      setDisplay(e.target.name);
      console.log("display",display)
    }

    if(e.target.name === "birthday" ){
      setDisplay(e.target.name);
      console.log("display",display)
    }

    if(e.target.name === "color" ){
      setDisplay(e.target.name);
      console.log("display",display)
    }

    if(e.target.name === "send" ){
      setDisplay(e.target.name);
      console.log("display",display)
    }
    
    
    let timePick = new Date();
    let inSeconds = (timePick.getMinutes() * 60) + timePick.getSeconds() + (timePick.getMilliseconds() / 1000);
    
    let difference = (inSeconds - diff).toFixed(2); 
    setDiff(inSeconds);

    let value = {
      fieldName: e.target.name || "age",
      fieldValue: e.target.value === undefined ? rang : e.target.value,
      date: new Date(),
      difference: difference,
    };
    const data = [...formValue, value];
    setFormValue(data);
  };
  console.log(formValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://whispering-oasis-08517.herokuapp.com/userData", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({formValue}),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        if (data) {
          e.target.reset();
          alert("Your Data Added Successfully");
          window.location.reload();
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const valueText = (value) => {
    return `${value}`;
  };

  const [ready, setReady] = useState(true);
  const handleReady = () => {
    setReady(false);
  };




  const [start, setStart] = useState("disabled");
  const handleStart = () => {
    setStart(null);
  };

  const [useDevice, setUseDevice] = useState(null);
  const [ageRange, setAgeRange] = useState(null);

  const activeStart = (e) =>{
    console.log("e",e.target.name)
    e.target.name === "average-uses" && setUseDevice(e.target.value);
    e.target.name === "age-range" && setAgeRange(e.target.value);
  }

  return (
    <div className="container p-0 m-0">
     

      <form onSubmit={handleSubmit}>
        <div className=" " style={{ display: ready ? "block" : "none" }}>
        <p style={{fontSize: "25px", fontWeight: "500"}}>Please select before you join this survey.
        
        </p>
        
        <div className="form-group">
            <label for="exampleSelect1"><i>Spending time within 24h (Mobile OR Desktop)</i> &nbsp;</label>
            <select
              onBlur={handleBlur}
              onChange={activeStart}
              name="average-uses"
              className="custom-select"
            >
              <option selected value="">...</option>
              <option value="0-3h">0-3h</option>
              <option value="3-6h">3-6h</option>
              <option value="6-9h">6-9h</option>
              <option value="9-12h">9-12h</option>
            </select>
          </div> 
<br />
          <div className="form-group" >
            <label for="exampleSelect1"><i>Your Age Range &nbsp;</i></label> 
            <select
              onBlur={handleBlur}
              onChange={activeStart}
              name="age-range"
              className="custom-select"
            >
              <option selected value="">...</option>
              <option value="15-24">15-24</option>
              <option value="24-35">24-35</option>
              <option value="36-45">36-45</option>
              <option value="46-55">46-55</option>
            </select>
          </div>
          <br />
          <div style={{ display: useDevice && ageRange ? "block" : "none" }}>
            <p style={{fontSize: "20px", fontWeight: "500"}}>Now Are You Ready For This Survey?</p>
            <div className='d-flex' ><p style={{ fontSize: "25px", fontWeight: "700", color: "#fcff24"}}  className="p-0 animate__animated animate__bounce animate__infinite animate__slower">YES</p>
            <input className="ready"
                onBlur={handleBlur}
                onClick={handleReady}
                name="Start"
                type="checkbox"
              />
            </div>
          </div>
          
          <small style={{paddingTop: "50px", display: "block"}}>More about our thesis <a href="https://docs.google.com/document/d/1yF-oNl3Gz_LrNBrUyQ1DDmThbd4_ur0LJLnZvdFxNFU/edit" target="_blank" rel="noreferrer">click here</a> </small>
        </div>

      

        <fieldset style={{ display: ready ? "none" : "block" }}>
          <h5 className="thesis-heading">
            Comparative Analysis of Human-Computer Interaction with Smartphone &
             Desktop Application Based Widgets
          </h5>
{/* ////////////////// Country  */}
          <div className="form-group" style={{ display: display == 'Start' ? "block" : "none" }} >
            <div>
            <label for="name">1. Country: Bangladesh Dhaka</label>
            <input
              placeholder="Please Type in Bangladesh Dhaka"
              onBlur={handleBlur}
              type="text"
              className="form-control w-75"
              name="name"
              id="name"
            />
            </div>
          
          </div>

          
{/* ///////////////////// Age Range          */}
          <div className="" style={{ display: display == 'name' ? "block" : "none" }}>
          <label for="age">2. Age: </label>
          
         
          <Slider
            className="rang"
            id="rang"
            defaultValue={rang}
            getAriaValueText={valueText}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            onBlur={handleBlur}
            onChange={handleChange}
            name="age"
            min={10}
            max={60}
            valueLabelDisplay="on"
          />
          </div>
{/* ////////////////// Blood Group  */}
          <div className="form-group" style={{ display: display == '60' ? "block" : "none" }}>
            <label for="exampleSelect1">3. Blood Group &nbsp;</label>
            <select
              onBlur={handleBlur}
              name="Blood-Group"
              className="custom-select"
            >
              <option selected>Open this select menu</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          
{/* ////////////////// Good At */}
            <div style={{ display: display == 'Blood-Group' ? "block" : "none" }}>
            <div className=" d-flex justify-center-center" >
              <label for="">4. Good At:</label> 
              <div className="checkbox">
               <label>
                  <input
                    className="good-at"
                    onBlur={handleBlur}
                    name="D-SmartPhone"
                    type="checkbox"
                  />{" "}
                  &nbsp;Phone
                  </label>
              </div>
              <div className="checkbox">
                <label>
                  <input className="good-at" onBlur={handleBlur} name="D-Desktop" type="checkbox" />{" "}
                  &nbsp;Desktop
                </label>
              </div>
            </div>
            </div>
            
{/* //////////////////// Gender */}
            <div style={{ display: display == 'good-at' ? "block" : "none" }}>
            <div className="d-flex justify-center-center">
              <label for="">5. Gender:</label>
              <div className="form-check ms-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="Gender"
                    value="Male"
                    type="radio"
                    className="form-check-input"
                  />
                  Male &nbsp;
                </label>
              </div>
              <div className="form-check ps-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="Gender"
                    value="Female"
                    type="radio"
                    className="form-check-input"
                  />
                  Female &nbsp;
                </label>
              </div>
              <div className="form-check ps-3 pe-3">
                <label className="form-check-label">
                  <input
                    onBlur={handleBlur}
                    name="Gender"
                    value="other"
                    type="radio"
                    className="form-check-input"
                  />
                  Others
                </label>
              </div>
            </div>
            </div>
{/* ////////////////// birthday  */}
          <div style={{ display: display == 'Gender' ? "block" : "none" }}>
          <label for="birthday">6. Birthday: &nbsp;</label>
          <input
            onBlur={handleBlur}
            type="date"
            id="birthday"
            name="birthday"
          />
          </div>
          
          
{/* /////////// color */}
         <div style={{ display: display == 'birthday' ? "block" : "none" }}>
         <label for="exampleColorInput" className="form-label">
            7. Favourite Color
          </label>
          <input
            onBlur={handleBlur}
            name="color"
            type="color"
            className="form-control form-control-color"
            id="exampleColorInput"
            title="Choose your color"
          />
         </div>
          
{/* ////////////////// file  */}
         <div style={{ display: display == 'color' ? "block" : "none" }}>
         <label className="custom-file">
            8. &nbsp;
            <input
              onBlur={handleBlur}
              type="file"
              name="file"
              className="custom-file-input"
            />
            <span className="custom-file-control"></span>
          </label>
          <br />
          <br />
          <button type="submit" onBlur={handleBlur} name="send" className="btn btn-primary mb-5">
            Submit
          </button>
         </div>


        
        <div className="next-btn" style={{ display: display == 'color' ? "none" : "block" }}> <p>next &#x2192;</p> </div>
 
        </fieldset>
      </form>
    </div>
  );
}

export default App;