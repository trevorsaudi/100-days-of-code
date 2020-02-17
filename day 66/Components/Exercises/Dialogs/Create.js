import React,{Fragment , Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  FormControl: {
    width: 500
  }
})
export default withStyles(styles)(class extends Component{
  state = {
      open: false,
      exercise: {
      title:'',
      description:'',
      muscles:'' 
    }
  }
  handleToggle = () =>{
    this.setState({
      open: !this.state.open
    })
  
}


handleChange = name => ({target: {value}}) =>{
  this.setState({
    exercise: {
    ...this.state.exercise,
    [name]:value
  }
  })




}

handleSubmit = () =>{

  const {exercise }=this.state


  this.props.onCreate({
    ...exercise,
    id:exercise.title.toLocaleLowerCase().replace(/ /g, '-')
  })
  this.setState({
    open:false,
    exercise:{
      title:'',
      description:'',
      muscles:''
    }
  })
  }
  render(){

    const { open, exercise:{title, description, muscles} } = this.state,
          {classes, muscles: categories} = this.props
    return <Fragment>
 

<Button variant ="fab"
onClick = {this.handleToggle}
color = 'inherit' mini>

<AddCircleIcon />

</Button>

 <Dialog open={open}
  onClose={this.handleToggle} 
>
        <DialogTitle id="form-dialog-title">
        Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please fill out the form below 
          </DialogContentText>
          <form>
           <TextField
    
          label="Title" 
          value={title}
          onChange={this.handleChange('title')}
          margin = 'inherit'
          className={classes.FormControl}
        />
        <br />
    
      <FormControl      className={classes.FormControl} >
        <InputLabel htmlFor="muscles">
        Muscles
        </InputLabel>
        <Select

          value={muscles}
          onChange={this.handleChange('muscles')}
        >
        {categories.map(category =>
            <MenuItem key={category} value={category}>
            {category}
            </MenuItem>
          )}
   
        </Select>
      </FormControl>
      <br />
         <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin = 'inherit'
               className={classes.FormControl}
        />
          </form>
        
        </DialogContent>
        <DialogActions>
          <Button 
          color="primary" 
          variant="contained"
          onClick={this.handleSubmit}>
            Create
          </Button>
       
        </DialogActions>
      </Dialog>
</Fragment>


  }
}
)
