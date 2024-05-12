import "./Header.css"

import React,{useState} from 'react'
import uuid from 'react-uuid'
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Header() 
{
  const navigate = useNavigate();

  const createForm = ()=> {

    const create_form_id =uuid();


    var questions_list=[{questionText: "Question", questionType: "radio", options: [{optionText: "option 1"}], open: true,required:false}]
    axios.post(`http://localhost:9000/add_questions/${create_form_id}`,{
      "document_name":"untitled_form",
      "doc_desc":"Add Description",
      "questions": questions_list,
    })
    navigate("/form/"+create_form_id)




  }


  const [files,setFiles]=useState([]);
  async function filenames(){
    var request = await axios.get("http://localhost:9000/get_all_filenames")
    let filenames = request.data;
    setFiles(filenames);
  }
  filenames()




  return (
  <div className="header">
        <div className="header_info">
            text
        </div>
        <div className="header_search">
            search
        </div>
        <div className="header_right">

          <button onClick={createForm} />
        </div>
    </div>

  )
}

export default Header