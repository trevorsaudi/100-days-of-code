import React , { Fragment} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const styles = {
	Paper :{ padding: 20, marginTop: 10, marginBottom: 10 , height: 500, overflow:'auto'}
}

export default ({ exercises })=>
<Grid container>

	<Grid item sm>
	
		<Paper style = {styles.Paper}>
		{exercises.map(([group, exercises]) =>
			<Fragment>
		<Typography 
			variant = "headline"
			style = {{textTransform: 'capitalize'}}>
				{group}
			</Typography>
	<List component="ul">
       {exercises.map(({title}) =>
       	<ListItem button>
          <ListItemText primary={title}/>
        </ListItem>
       	)}
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
    </List>
    
    </Fragment>

			)}
	</Paper>

	</Grid>

	<Grid item sm>
		<Paper style = {styles.Paper}>
		<Typography
		variant="display1">
		Welcome 

		</Typography>
		<Typography 	variant ="subheading"
		style={{marginTop: 20}}	
			>Please select an exercise from the list on the left
	

		</Typography>
	</Paper>
	</Grid>

</Grid>