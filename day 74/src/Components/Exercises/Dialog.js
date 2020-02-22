import React,{Fragment , Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Form from './Form'

export default class extends Component{
  state = {
      open: false,
  
  }
  handleToggle = () =>{
    this.setState({
      open: !this.state.open
    })
  
}


handleFormSubmit = exercise =>{
  this.handleToggle()

  this.props.onCreate(exercise)
}
render(){
        const { open } = this.state,
              {muscles} = this.props    
            return <Fragment>
         

        <Button variant ="fab"
        onClick = {this.handleToggle}
        color = 'inherit' mini>

        <AddCircleIcon />

        </Button>

         <Dialog open={open}
          onClose={this.handleToggle} 
        >
                <DialogTitle>
                Create a New Exercise
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                   Please fill out the form below 
                  </DialogContentText>
               <Form 
               muscles={muscles}
               onSubmit={this.handleFormSubmit}

               />
                
                </DialogContent>

              </Dialog>
        </Fragment>


  }
}

