import React,{Component} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  FormControl: {
    width: 300
  }
})

export default withStyles(styles)(class extends Component{
state = this.getInitState()

getInitState(){
	const {exercise} = this.props

	return exercise ? exercise :{
			title: '',
			description:'',
			muscles:''

	}
}
getSnapshotBeforeUpdate   ( {exercise} ){
	return exercise || null

}

handleChange = name => ({target: {value}}) =>{
  this.setState({

    [name]:value
  
  })


}

handleSubmit = () =>{


  this.props.onSubmit({
    id:this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
    ...this.state
  })
  this.setState(this.getInitState())
  }
	render(){
		const {title,description, muscles}= this.state,
		{classes, exercise, muscles:categories} = this.props

		return   <form>
           <TextField
    
          label="Title" 
          value={title}
          onChange={this.handleChange('title')}
          margin = 'inherit'
          className={classes.FormControl}
        />
        <br />
    
      <FormControl     
  		className={classes.FormControl} >
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
        <br />
                  <Button 
          color="primary" 
          variant="contained"
          onClick={this.handleSubmit}>
           
           {exercise ? 'Edit':'Create'}


          </Button>
          </form>


	}

})