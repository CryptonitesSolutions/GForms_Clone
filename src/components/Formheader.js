import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import form_image from '../images/Google-Forms-logo.svg';
import './formheader.css';
import { Avatar, Icon, IconButton } from '@mui/material';
import { AirOutlined, ApiOutlined, ColorLens, MoreVert, Settings } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
function Formheader() {
    const navigate = useNavigate()
    const [{doc_name},dispatch] = useStateValue();
    function navigates(){
        navigate("/response")
    }

  return (
    <div className='form_header'>
        <div className='form_header_left'>
            
            <img src={form_image} style={{height: "59px",width:"48px"}}/>
            <input type="text" placeholder="Untitled Form" className='form_name' value={doc_name}></input>
            <FolderIcon className="form_header_icon" style={{ marginRight: "10px"}}  sx={{ fontSize: 33 }}/>
            <StarOutlineIcon className="form_header_icon" style={{ marginRight: "10px"}} sx={{ fontSize: 33 }}/>
        
        
        </div>

        <div className='form_header_right'>
            <IconButton>
                <ColorLens size="small" className='form_header_icon' sx={{ fontSize: 30 }}/>
            </IconButton>
            <IconButton onClick={navigates}>
                <ApiOutlined className='form_header_icon' />
            </IconButton>
            <IconButton>
                <Settings className='form_header_icon' sx={{ fontSize: 30 }}></Settings>
            </IconButton>
            <IconButton>
                <MoreVert className='form_header_icon' sx={{ fontSize: 30 }}></MoreVert>
            </IconButton>
            <IconButton>
                <Avatar style={{height:"30px",width:"30px"}} src={PersonIcon}/>
            </IconButton>


        </div>

    </div>
  )
}

export default Formheader