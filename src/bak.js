import { AddCircleOutline, ShortText } from "@mui/icons-material"
import { AccordionDetails, Button } from "@mui/material"
import { fontSize } from "@mui/system"

<div >
            <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border':""}>

            <AccordionSummary aria-controls="panella-content" id="panel1a-header" elevation={1} style={{width: '100%'}}>


            {!questions[i].open? (
                <div className="saved_questions">
                <Typography style={{fontSize: "15px", fontweight: "400", letterspacing: '.1px', lineHeight: '24px', paddingBottom: "8px"}} > 
                {i+1}. {questions[i].questionText}</Typography>
                
                {ques.options.map((op, j)=>(
                <div key={j} >
                    <div style={{display: 'flex',}}>
                    <FormControlLabel style={{marginLeft: "5px", marginBottom: "5px"}} disabled control={<input type={ques.questionType} 
                    color="primary" style={{marginRight: '3px', }} required={ques.type}/>} label={
            <Typography style={{ 
                fontFamily:' Roboto, Arial, sans-serif',
                fontsize:'13px',
                fontweight: '400',
                letterspacing: '.2px',
                lineHeight: '20px',
                color: '#202124'}}>
                {ques.options[j].optionText}
            
            
            </Typography>
                    } />

                    </div>
                    </div>
                ))}
                </div>
            ): ""}
        </AccordionSummary>

        <div className="question_boxes">
            <AccordionDetails className="add_question">
            <div className="add_question_top">
                <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}}></input>
                <CropOriginal style={{color: "#5f6368"}} />
                    
                <Select className="select" style={{color: "#5f6368", fontSize:"13px"}} >
                    <MenuItem id="text" value="Text" onClick= {()=> {addQuestionType(i,'text')}}> <Subject style={{marginRight: "10px"}}  /> Paragraph</MenuItem>
                    <MenuItem id="checkbox" value="checkbox" onClick= {()=> {addQuestionType(i,'checkbox')}}><CheckBox style={{marginRight: "10px" ,color: "#70757a"}} checked  />CheckBox </MenuItem>
                    <MenuItem id="radio" value="Radio" onClick= {()=> {addQuestionType(i,'radio')}}> <Radio style={{marginRight: "10px", color: "#70757a"}} checked /> Multiple Choice</MenuItem>
                </Select>
            </div> 
            
                {ques.options.map((op, j)=>(
                <div className="add_question_body" key={j}>
                {
                
                    (ques.questionType!="text") ?
                    <input type={ques.questionType} style={{marginRight:"10px"}}/> : 
                    <ShortText style={{marginRight: "10px"}} />
                }
                <div>
                    <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e) =>{changeOptionValue(e.target.value,i,j)}}></input>
                </div>
                <CropOriginal style={{color: "#5f6368"}}/>
                <IconButton aria-label="delete" >
                    <Close onClick={()=>{removeOption(i,j)}}/>
                </IconButton>
            </div>
        ))}


        
        {ques.options.length <5? (
            <div className="add_question_body">
                <FormControlLabel disabled control={
                    (ques.questionType!="text") ?
                    <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} style={{marginLeft: "10px",marginRight:"10px"}} disabled/> :
                    <ShortTextRounded style={{marginRight: "10px"}} />
        } label={
        <div>
            <input type="text" className="text_input" style={{fontSize: "13px",width: "60px"}} placeholder="Add other"></input>
            <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: 'none', color: "#4285f4", fontsize:"13px", fontweight: "600"}}>Add Option</Button>
        </div>
        } />
        </div>
        ):""}
        
        <div className='add_footer'>
            <div className='add_question_bottom_left'>
            <Button size='small' style={{textTransform: "none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>
                <RampRight style={{border:"2px solid #4285f4",padding:"2px",marginRight:"8px"}} />Answer Key
            </Button>
        </div>
        
        <div className='add_question_bottom'>
            <IconButton aria-label='Copy' onClick={() =>{copyQuestion(i)}}>
                <FilterNone/>
            </IconButton>

            <IconButton aria-label='Delete' onClick={() =>{deleteQuestion(i)}}>
                <Recycling/>
            </IconButton>

                <span style={{color:"#5f6368",fontSize:"13px"}}>Required</span>
                <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} />
                <IconButton>
                    <MoreVert></MoreVert>
                </IconButton>
        
        </div>
            </div>
        </AccordionDetails>
        <div className='question_edit'>
            <AddCircleOutline className='edit' onClick={addMoreQuestionField}/>
            <OndemandVideo className='edit'/>
            <CropOriginal className='edit'/>
            <TextFields className='edit'/>
        </div>


    </div>
    </Accordion>
    </div>




<div className="question_boxes">
    {!questions[i].answer?(
        <AccordionDetails className="add_question">
        <div className="add_question_top">
            <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}}></input>
            <CropOriginal style={{color: "#5f6368"}} />
                
            <Select className="select" style={{color: "#5f6368", fontSize:"13px"}} >
                <MenuItem id="Text" value="Text" onClick= {()=> {addQuestionType(i,'text')}}> <Subject style={{marginRight: "10px"}}  /> Paragraph</MenuItem>
                <MenuItem id="checkbox" value="checkbox" onClick= {()=> {addQuestionType(i,'checkbox')}}><CheckBox style={{marginRight: "10px" ,color: "#70757a"}} checked  />CheckBox </MenuItem>
                <MenuItem id="radio" value="Radio" onClick= {()=> {addQuestionType(i,'radio')}}> <Radio style={{marginRight: "10px", color: "#70757a"}} checked /> Multiple Choice</MenuItem>
            </Select>
        </div> 
        
            {ques.options.map((op, j)=>(
            <div className="add_question_body" key={j}>
            {
            
                (ques.questionType!="text") ?
                <input type={ques.questionType} style={{marginRight:"10px"}}/> : 
                <ShortText style={{marginRight: "10px"}} />
            }
            <div>
                <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e) =>{changeOptionValue(e.target.value,i,j)}}></input>
            </div>
            <CropOriginal style={{color: "#5f6368"}}/>
            <IconButton aria-label="delete" >
                <Close onClick={()=>{removeOption(i,j)}}/>
            </IconButton>
    </div>
    ))}


    
    {ques.options.length <5? (
        <div className="add_question_body">
            <FormControlLabel disabled control={
                (ques.questionType!="text") ?
                <input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} style={{marginLeft: "10px",marginRight:"10px"}} disabled/> :
                <ShortTextRounded style={{marginRight: "10px"}} />
    } label={
    <div>
        <input type="text" className="text_input" style={{fontSize: "13px",width: "60px"}} placeholder="Add other"></input>
        <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: 'none', color: "#4285f4", fontsize:"13px", fontweight: "600"}}>Add Option</Button>
    </div>
    } />
    </div>
    ):""}
    
    <div className='add_footer'>
        <div className='add_question_bottom_left'>
        <Button size='small' style={{textTransform: "none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}} onClick={() => {addAnswer(i)}}>
            <RampRight style={{border:"2px solid #4285f4",padding:"2px",marginRight:"8px"}} />Answer Key
        </Button>
    </div>
    
    <div className='add_question_bottom'>
        <IconButton aria-label='Copy' onClick={() =>{copyQuestion(i)}}>
            <FilterNone/>
        </IconButton>

        <IconButton aria-label='Delete' onClick={() =>{deleteQuestion(i)}}>
            <Recycling/>
        </IconButton>

            <span style={{color:"#5f6368",fontSize:"13px"}}>Required</span>
            <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}} />
            <IconButton>
                <MoreVert></MoreVert>
            </IconButton>
    
    </div>
        </div>
    </AccordionDetails>):(
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
                        <label style={{fontSize:"13px"}} onClick={setOptionAnswer(ques.options[j].optionText,i)}}>
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

        )}

    {!ques.answer ? (<div className="question_edit">
                        <AddCircleOutline onClick={addMoreQuestionField} className="edit"/>
                        <OndemandVideo className='edit'/>
                        <CropOriginal className='edit'/>
                        <TextFields className='edit'/>
        </div>): "" }
</div>
</Accordion>
</div>
        </div>
        </div>
        </div>


    
    <div className='question_edit'>
        <AddCircleOutline className='edit' onClick={addMoreQuestionField}/>
        <OndemandVideo className='edit'/>
        <CropOriginal className='edit'/>
        <TextFields className='edit'/>
    </div>


</div>): " "



    )}
</div>






