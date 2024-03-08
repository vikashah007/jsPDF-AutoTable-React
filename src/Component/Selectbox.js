import React from 'react'
import  { useEffect, useState } from "react";
import Data from './DataToBePrinted.json'
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
// import Button from 'react-bootstrap/Button';
const userData = [
    { name: "collegeCode" },
    { name: "workingDays" },
    { name: "totalStudents" },
    { name: "attendanceSum" },
    { name: "hostellerCount" },
    { name: "dayScholarCount" },
    { name: "male" },
    { name: "female"},
    {name: "BinH"},
    {name: "GinH"},
    {name: "collegeName"},
    {name: "district"},
    {name: "collegeShortName"},
    {name: "avgAttnd"},
    {name: "lastDataSyncTime"},
  ];

const Selectbox = () => {
 
    const [users, setUsers] = useState([]);
    const [ste, setste] = useState([]);
    const [status, setstatus] = useState(false);
   
    let body = [];
    let head=[]

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "AllSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: !checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: !checked } : user
      );
      setUsers(tempUser);
    }

  };
  const doc = new jsPDF();
  const submitData=(event)=>{
    event.preventDefault()
    // console.log(users)
    // users.map((e)=>{if(e.isChecked===true){ head.push(e.name)}})
    //  head.map((e)=>{console.log(e)})
    //  console.log("data is",head)
    // // console.log("fsdvv", Data[0].engineering)
    // body=Data[0].engineering.map((e)=>{return e.male})
    // console.log(body)
    // console.log(users[6].isChecked)
   setstatus(true)
  
     
    // Data.map((e)=>{e.engineering.map((e)=>{console.log(e.collegeCode)})})
  }
  var totalPagesExp = '{total_pages_count_string}'
  const onPrint=()=>{
    doc.autoTable({html:'#asdf',
    bodyStyles: { valign: 'top' },
    styles: { cellPadding:0.8, fontSize: 12, },
    columnStyles: {default: { halign: 'center'}, text: { cellWidth: 'auto'} },
    margin: { right: 19,left:19,top:19,bottom:19 },
    
    didDrawPage: function (data) {
      // Footer
      var str = 'Page ' + doc.internal.getNumberOfPages()
      // Total page number plugin only available in jspdf v1.0+
      if (typeof doc.putTotalPages === 'function') {
        str = str + ' of ' + totalPagesExp
      }
      doc.setFontSize(10)
       doc.text(90,10,'This is A')
       doc.text(20,17,'This is B')
       doc.text(150,17,'This is C')
       doc.text(90,280,'This is D')
      // jsPDF 1.4+ uses getHeight, <1.4 uses .height
      var pageSize = doc.internal.pageSize
      var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
      doc.text(str, data.settings.margin.left, pageHeight - 10)
    },
   // columnStyles: { 0: { halign: 'center'} },
    
    
    
   
  })
    
   

    
    if (typeof doc.putTotalPages === 'function') {
      doc.putTotalPages(totalPagesExp)
    }
    doc.save('products.pdf')
    
  }
  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <div className="form-check">
          <input 
            type="checkbox"
            className="form-check-input"
            name="AllSelect"
            // checked={
            //   users.filter((user) => user?.isChecked !== true).length < 1
            // }
            
            checked={!users.some((user) => !user?.isChecked !== true)}
            onChange={handleChange}
          
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={!user.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
        {!status ?<button  className="btn btn-primary printbtn" onClick={submitData}>Submit</button> :<button  className="btn btn-primary printbtn" onClick={onPrint}>print</button>
      }
        
        
      </form>
      <table id='asdf' className="d-none">
      <thead>
        
          {status && <tr>
            <td>{!users[0].isChecked && "collegeCode"}</td>
            <td>{!users[1].isChecked && "workingDays"}</td>
            <td>{!users[2].isChecked && "totalStudents"}</td>
            <td>{!users[3].isChecked && "attendanceSum"}</td>
            <td>{!users[4].isChecked && "hostellerCount"}</td>
            <td>{!users[5].isChecked && "dayScholarCount"}</td>
            <td>{!users[6].isChecked && "male"}</td>
            <td>{!users[7].isChecked && "female"}</td>
            <td>{!users[8].isChecked && "BinH"}</td>
            <td>{!users[9].isChecked && "GinH"}</td>
            <td>{!users[10].isChecked &&"collegeName"}</td>
            <td>{!users[11].isChecked && "district"}</td>
            <td>{!users[12].isChecked && "collegeShortName"}</td>
            <td>{!users[13].isChecked && "avgAttnd"}</td>
            <td>{!users[14].isChecked && "lastDataSyncTime"}</td>
          </tr>}
       
      </thead>
      <tbody>
       {status && Data[0].engineering.map((data)=>(
        <tr>
        <td>{!users[0].isChecked && data.collegeCode}</td>
        <td>{!users[1].isChecked && data.workingDays}</td>
        <td>{!users[2].isChecked && data.totalStudents}</td>
        <td>{!users[3].isChecked && data.attendanceSum}</td>
        <td>{!users[4].isChecked && data.hostellerCount}</td>
        <td>{!users[5].isChecked && data.dayScholarCount}</td>
        <td>{!users[6].isChecked && data.male}</td>
        <td>{!users[7].isChecked && data.female}</td>
        <td>{!users[8].isChecked && data.BinH}</td>
        <td>{!users[9].isChecked && data.GinH}</td>
        <td>{!users[10].isChecked && data.collegeName}</td>
        <td>{!users[11].isChecked && data.district}</td>
        <td>{!users[12].isChecked && data.collegeShortName}</td>
        <td>{!users[13].isChecked && data.avgAttnd}</td>
        <td>{!users[14].isChecked && data.lastDataSyncTime}</td>
        </tr>
  ))}
      </tbody>
      </table>
    </div>
  );
  
  
}

export default Selectbox
