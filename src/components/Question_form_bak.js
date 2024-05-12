import {React,useState,useEffect} from 'react'
import "./Question_form.css"
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, Icon, IconButton, MenuItem, Select, Switch, Typography } from '@mui/material'
import { AddCircleOutline, CheckBox, Close, CropOriginal, DragIndicator, FilterNone, MoreVert, OndemandVideo, Radio, RampRight, Recycling, ShortText, ShortTextRounded, Subject, TextFields } from '@mui/icons-material'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
function Question_form() {
    const [questions, setQuestions] = useState(
        [{questionText:"something",
          questionType:"radio",
          options:[
            {optionText:"a"},
            {optionText:"b"},
            {optionText:"c"},
            {optionText:"d"}

          ],
          answer:false,
          answerKey:"",
          points:0,
          open: true,
          required:false}]
    
        )
    
    function changeQuestion(text,i)
    {
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        console.log(newQuestion)
    }
    function addQuestionType(i,type) {
        let qs = [...questions];
        console.log(type)
        qs[i].questionType = type;
        setQuestions(qs);


    }

    function changeOptionValue(text,i,j)
    {
        var optionsQuestion =[...questions];
        optionsQuestion[i].options[j].optionText=text;
        setQuestions(optionsQuestion);
    }
    function removeOption(i,j){
        var RemoveOptionQuestion=[...questions];
        if(RemoveOptionQuestion[i].options.length > 1){
            RemoveOptionQuestion[i].options.splice(j,1);
            setQuestions(RemoveOptionQuestion)
            
        }


    }

    function addOption(i){
        var optionsOfQuestion = [...questions];
        if(optionsOfQuestion[i].options.length < 5)
        {
            optionsOfQuestion[i].options.push({optionText: "option"+(optionsOfQuestion[i].options.length + 1)})
        }
        else
        {
            console.log("max 5 options");
        }
        setQuestions(optionsOfQuestion)
    }

    function copyQuestion(i){
        expandCloseAll();

        let qs = [...questions]
        var newQuestion = qs[i]
        setQuestions([...questions,newQuestion])
    }

    function deleteQuestion(i){

        let qs = [...questions];
        if(questions.length > 1){
            qs.splice(i,1);

        }
        setQuestions(qs)
    }

    function requiredQuestion(i){
        var reqQuestion = [...questions];
        reqQuestion[i].required = ! reqQuestion[i].required
        setQuestions(reqQuestion)
    }
    function addMoreQuestionField(){
        expandCloseAll();
        
        setQuestions([...questions,
        {questionText:"Question",questionType:"radio",options:[{optionText:"Option 1"}],open: true,required:false}]);

    }

    function onDragEnd(result)
    {
        if (!result.destination)
        {
            return;
        }
        var itemgg = [...questions];
        const itemF = reorder(itemgg,
            result.source.index,
            result.destination.index
        
        );
        setQuestions(itemF);    
    }
    const reorder = (list,startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex,1);
        result.splice(endIndex,0,removed);
        return result;
    }

    function expandCloseAll(){
        let qs = [...questions];
        for (let j =0;j<qs.length;j++)
        {
            qs[j].open = false;
        }
        setQuestions(qs);
    }
    function handleExpand(i){
        let qs = [...questions];
        for (let j =0;j < qs.length; j++)
        {
            if (i === j){
                qs[i].open = true;

            }
            else{
                qs[j].open = false;

            }
            setQuestions(qs);
        }


    }

    function setOptionAnswer(ans,qno){
        var Questions = [...questions];
        Questions[qno].answerKey = ans;
        setQuestions(Questions)
    }
    function setOptionPoints(points,qno)
    {
        var Questions = [...questions];
        Questions[qno].points = points;
        setQuestions(Questions)

    }
    function doneAnswer(i){
        var answerOfQuestion = [...questions];
        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)
    }

    function addAnswer(i){
        var answerOfQuestion=[...questions];
        answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
        setQuestions(answerOfQuestion)

    }

    function QuestionsUI()
    {
        return questions.map((ques,i) =>(
            <Draggable key={i} draggableId={i + 'id'} index={i}> 
            {(provided, snapshot) => (
            <div
            ref={provided.innerRef}
            {...provided.draggableProps} 
            {...provided.dragHandleProps}>
            <div>
            <div style={{marginBottom: "0px"}}>
            <div style={{width: '100%', marginBottom: '0px' }}>
            <DragIndicator style={{transform: "rotate(-90deg)", color: '#DAE0E2', position: "relative", left: "300px"}} fontSize="small"/>
            </div>

            <div >
            <Accordion expanded={questions[i].open} onChange={ ()=> handleExpand(i)} className={questions[i].open ? 'add_border':""} >

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




        {questions[i].open?(
        <div className="question_boxes">
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


    </div>): " "}
    </Accordion>
    </div> 



            </div>
            </div>
            </div>
            )}
            </Draggable>            
    ))
    }

  return (
    <div className='question_form'>
        <br></br>
        <div className='section'>
            <div className='question_title_section'>
                <div className='question_form_top'>
                    <input type="text" className='question_form_top_name' style={{color:"black"}} placeholder='Untitled Document'></input>
                    <input type="text" className='question_form_top_desc' placeholder='Form Description'/>

                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps}
                        ref={provided.innerRef}
                        >
                            {QuestionsUI()}

                            {provided.placeholder}
                            </div>

                    )}
                </Droppable>
            </DragDropContext>
        </div>



    </div>
  )
}

export default Question_form
