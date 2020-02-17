import React , { Fragment} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
const styles = {
	Paper :{ padding: 20,
			marginTop: 10, 
			marginBottom: 10 , 
			height: 500, 
			overflowY:'auto'}
}

export default ({ 
		exercises,
		category, 
		onSelect,
		exercise: {
			id, 
			title= 'Welcome!',
		    description='Please select exercises from the categories below'},
		    onDelete
	 })=>
<Grid container>

	<Grid item sm>
	
		<Paper style = {styles.Paper}>
		{exercises.map(([group, exercises]) =>
			!category || category === group
	 ?<Fragment key={category}>
		<Typography 
			variant = "headline"
			style = {{textTransform: 'capitalize'}}>
				{group}
			</Typography>
	<List component="ul">
       {exercises.map(({id, title}) =>
       
       
        <ListItem 
         key = {id}
         button
         onClick = {() => onSelect(id)} >
          <ListItemText primary={title}/>

          <ListItemSecondaryAction>
          <IconButton onClick={() => onDelete(id)}>
          <DeleteIcon/>
          </IconButton>


          </ListItemSecondaryAction>
       
        </ListItem>
        )}
      
    </List>
    
    </Fragment>
:null
			)}
	</Paper>

	</Grid>

	<Grid item sm>
		<Paper style = {styles.Paper}>
		<Typography
		variant="h5">
		{title}
		</Typography>
		<Typography
		variant ="subheading"
		style={{marginTop: 20}}
		>
	{description}

		</Typography>
	</Paper>
	</Grid>

</Grid>