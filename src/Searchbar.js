import * as React from 'react';
//import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PaperCom from './paper';

class CustomizedInputBase extends React.Component {
  //const [sentence, setSentence] = useState("")
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        sentence: "",  
      },
      result: "",
      percentage: { }
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handle = (event) =>{
      window.location.reload(false);
  }

  handlePredictClick = (event) => {
    event.preventDefault();
    const formData = this.state.formData;
    console.log(formData)
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          percentage: response.percentage,
          isLoading: false
        });
      });
  }

  render() {
    const formData = this.state.formData;
    //const result = this.state.result;
    const percent = this.state.percentage
      return (
        <div>
             <Paper
                  component="form"
                  sx={{ p: '4px 16px', display: 'flex', alignItems: 'center', width: 700, }}
                  >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <BorderColorIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={"Input your sentence"}
                value = {formData.sentence}
                name = "sentence"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={ this.handleChange }
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={this.handlePredictClick}>
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={this.handle}>
                <DirectionsIcon />
              </IconButton>
            </Paper>

              <div>
              {/* <PaperCom result = {result.sentence} percentage={percent}/> */}
              <PaperCom percentage={percent}/>
             </div>
            
        </div>

      );
    }
}

export default CustomizedInputBase;