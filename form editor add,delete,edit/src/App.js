
import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';









import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [fname, setFName] = useState('');
  const [email, setEmail] = useState('');
  const [sname, setSname] = useState('');
  const [phone, setPhone] = useState('');
  const [update, setUpdate] = useState(false);
  const [allEntry, setAllEntry] = useState([]);
  const [number, SetNumber] = useState(0)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!fname || !sname || !email || !phone) {
      alert('all input are required')
      return

    }
    const newEntry = {
      fname: fname,
      sname: sname,
      email: email,
      phone: phone,
      uid: uuidv4()
    };
    setAllEntry([...allEntry, newEntry]);
    setFName("");
    setSname("");
    setEmail("");
    setPhone("");
    setUpdate(false);


  }
  const onUpdateHandler = (item, index) => {

    setFName(item.fname);
    setSname(item.sname);
    setEmail(item.email);
    setPhone(item.phone);
    setUpdate(true);
    SetNumber(item);
 
  }
  const onCtaUpdateHandler = () => {
    console.log(onCtaUpdateHandler);


    const newEntry = {
      uid:number.uid,
      fname: fname,
      sname: sname,
      email: email,
      phone: phone,
    
    };
    let students = allEntry.map((item) => {
      if (item.uid === newEntry.uid) {
        return newEntry



      }
      else {
        return item


      }
      
       


    });
  setAllEntry(students);
    setFName("");
    setSname("");
    setEmail("");
    setPhone("");
    setUpdate(false);
  };
  const onDeleteHandler = (uid) => {
    console.log(uid);
    let studentss = allEntry.filter((newEntry) => newEntry.uid !== uid);
    setAllEntry(studentss)

  };
  const onCClearHandler = () => {
    setFName("");
    setSname("");
    setEmail("");
    setPhone("");
    setUpdate(false);
  }
  return (

    <div>
      <div style={{ background: "#2C3E50" }}>
        <h2 className='p-2' style={{ textAlign: "center", color: "white" }}>Students List</h2>
      </div>

      <div className='container' >

        <div className="row">
          <div className="col-lg-3 col-xs-3"></div>

          <div className="col-lg-3 col-xs-3">
            <h2> FirstName</h2>
            <input placeholder='Enter your First Name' maxLength={15} style={{ width: '300px' }} type="text" name='Fname' id='Fname' value={fname} onChange={(e) => setFName(e.target.value)} />
          </div>

          <div className="col-lg-3 col-xs-3">
            <h2>SecondName</h2>
            <input placeholder='Enter your Second Name' maxLength={15} style={{ width: '300px' }} type="sname" name='sname' id='sname' value={sname} onChange={(e) => setSname(e.target.value)} />
          </div>
          <div className="col-lg-3 col-xs-3"></div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xs-3"></div>
          <div className="col-lg-3 col-xs-3">

            <h2>E-mail</h2>
            <input placeholder='Enter your E-mail' style={{ width: '300px' }} type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>
          <div className="col-lg-3 col-xs-3">

            <h2>Phone No</h2>
            <input placeholder='Enter your Phone Number' maxLength={11} style={{ width: '300px' }} type="number" name='phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />

          </div>
          <div className="col-lg-3 col-xs-3"></div>
        </div>
        <div className="col-lg-5 col-xs-5"></div>
        <div className="col-lg-1 col-xs-1">

        </div>
        <div className="col-lg-1 col-xs-1">

        </div>
        <div className="col-lg-5 col-xs-5"></div>
      </div>




      {
        update ?
          <div className='container'>
            <div className="row">
              <div className="col-lg-3 col-xs-3"></div>
              <div className="col-lg-1 col-xs-1">
                <button className="btn btn-success m-3" onClick={onCtaUpdateHandler}>Update</button>
              </div>
              <div className="col-lg-1 col-xs-1">
                <button className="btn btn-secondary m-3" onClick={onCClearHandler}>Clear</button>
              </div>
              <div className="col-lg-7 col-xs-7"></div>
            </div>
          </div>

          :
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-xs-3"></div>
              <div className="col-lg-1 col-xs-1">
                <button className="btn btn-primary m-3" onClick={onSubmitHandler}>Submit </button>
              </div>
              <div className="col-lg-8 col-xs-8"></div>
            </div>
          </div>
      }




      <div style={{ background: "#2C3E50", borderRadius: "5px", boxShadow: '10px solid #E5E8E8' }} className='container'>
        <div className='row' >
          <div className="col-lg-1 col-sm-1 col-xs-1 col-md-1  p-3"><h5 style={{ color: "white", textAlign: "center" }}>Sr#</h5></div>
          <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "white", textAlign: "center" }}>First Name</h5></div>
          <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "white", textAlign: "center" }}>Last Name</h5></div>
          <div className="col-lg-3 col-sm-3 col-xs-3 col-md-3 p-3"><h5 style={{ color: "white", textAlign: "center" }}>E-mail</h5></div>
          <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "white", textAlign: "center" }}>Phone no</h5></div>
          <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "white", textAlign: "center" }}>Action</h5></div>
        </div>

      </div>
      {
        allEntry.map((item, index) => {
          return (
            <div key={index} style={{ background: "#ECF0F1", borderRadius: "5px" }} className='container'>
              <div key={index} className="row" >

                <div className="col-lg-1 col-sm-1 col-xs-1 col-md-1 p-3"><h5 style={{ color: "black", textAlign: "center" }}>{index + 1}</h5></div>
                <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "black", textAlign: "center" }}>{item.fname}</h5></div>
                <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "black", textAlign: "center" }}>{item.sname}</h5></div>
                <div className="col-lg-3 col-sm-3 col-xs-3 col-md-3 p-3"><h5 style={{ color: "black", textAlign: "center" }}>{item.email}</h5></div>
                <div className="col-lg-2 col-sm-2 col-xs-2 col-md-2 p-3"><h5 style={{ color: "black", textAlign: "center" }}>{item.phone}</h5></div>
                <div className="col-lg-1 col-sm-1 col-xs-1 col-md-1 p-3"><button type="button" className="btn btn-success" onClick={() => onUpdateHandler(item, index)}>Update</button></div>
                <div className="col-lg-1 col-sm-1 col-xs-1 col-md-1 p-3"><button type="button" className="btn btn-danger" onClick={() => onDeleteHandler(item.uid)}>Delete</button></div>




              </div>


            </div>

          )
        })
      }

      <h2 style={{ textAlign: "center" }}>Regard By:Muhammad Abubakar Raza</h2>
      <h2 style={{ textAlign: "center" }}>Roll No:5345</h2>

    </div>




  );
}

export default App;
