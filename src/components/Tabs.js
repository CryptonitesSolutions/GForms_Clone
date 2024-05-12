import { Paper, Tab, Tabs } from '@mui/material'
import React from 'react'





function CenteredTabs() {
  return (
    <div>
        
        <Paper sx={{flexGrow:1}}>
            <Tabs
            sx={{height:10}}
            textColor='primary'
            indicateColor='primary'
            centered
            >
            <Tab label="Questions" sx={{fontSize:20,
        color:"#5f6368",
        textTransform:"capitalize",
        height:10,
        fontWeight:"600",
        fontFamily: "Google Sans, Roboto, Arial,sans-serif"
}}>
                </Tab>
                <Tab label="Responses" sx={{fontSize:20,
        color:"#5f6368",
        textTransform:"capitalize",
        height:10,
        fontWeight:"600",
        fontFamily: "Google Sans, Roboto, Arial,sans-serif"
}}>

                </Tab>
            </Tabs>
        </Paper>


    </div>
  )
}

export default CenteredTabs