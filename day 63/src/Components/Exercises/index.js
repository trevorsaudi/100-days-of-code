import React , { Fragment} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
		    description='Please select exercises from the categories below'}
	 })=>
<Grid container>

	<Grid item sm>
	
		<Paper style = {styles.Paper}>
		{exercises.map(([group, exercises]) =>
			!category || category === group
	 ?<Fragment>
		<Typography 
			variant = "headline"
			style = {{textTransform: 'capitalize'}}>
				{group}
			</Typography>
	<List component="ul">
       {exercises.map(({id, title}) =>
       
       
        <ListItem button
         onClick = {() => onSelect(id)} >
          <ListItemText primary={title}/>
       
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