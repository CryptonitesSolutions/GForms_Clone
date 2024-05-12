<AccordionDetails className="add_question">
<div className="top_header">
    Choose Correct Answer
</div>
<div>
    <div className="add_question_top">
    <input type="text" className='question' style={{color:"black"}} placeholder='Question' value={ques.questionText} disabled></input>
    <input type="number" className='points' min='0' step='1' placeholder='0' onChange={(e) => {setOptionPoints(e.target.value,i)}}/>
    </div>
{ques.questions.map((op,j)=>(

<div className="add_question_body" key={j} style={{marginLeft:"8px",marginBottom:"10px",marginTop:"5px"}}>
    <div key={j}></div>
    <div style={{display: 'flex',}} className="">
        <div className="form-check">
            <label style={{fontSize:"13px"}} onClick={() => {setOptionAnswer(ques.options[j].optionText,i)}}>
            {(ques.questionType!="text") ?
                <input
                type={ques.questionType}
                name={ques.questionText}
                value="option3"
                className="form-check-input"
                required={ques.required}
                style={{marginRight:"10px",marginBottom:"10px",marginTop:"5px"}}
            /> : <ShortText style={{marginRight:"10px"}} />}   

                {ques.options[j].optionText}
            </label>
        </div> 
    </div>
</div>
))}
<div className="add_question_body">
<Button size="small" style={{textTransform: 'none',color:'#4285f4',fontSize:"13px",fontWeight:"600"}}>
<FileDownload style={{fontSize:"20px",marginRight:"8px"}}/>Add answer Feedback</Button>
</div>
<div className="add_question_bottom">
<Button variant="otulined" color="primary" style={{textTransform:"none",color:"#4285f4",fontSize:"12px",marginTop:"12px",fontWeight:"600"}}
onClick={() => {doneAnswer(i)}}>Done</Button>
</div>
</div>

</AccordionDetails>