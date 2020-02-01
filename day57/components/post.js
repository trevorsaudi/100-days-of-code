import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { deletePost } from '../actions/postActions'
class post extends Component{
	handleClick = () => {
		this.props.deletePost(this.props.post.id);
		this.props.history.push('/') //push is used to redirect to a specific page 
	}
	// state = {

	// 	//id:null
	// 	post:null
	// }
	// componentDidMount(){
	// 	console.log(this.props)
	// 	let id = this.props.match.params.post_id; //grabbing the id of the posts
	// 	axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
	// 	.then(res =>{
	// 		this.setState({
	// 			post:res.data
	// 		})
	// 		console.log(res)
	// 	})




	// 	// this.setState({
	// 	// 	id:id
	// 	// })
	// }
	render(){
		//create a jsx for the post
		console.log(this.props)
		const post = this.props.post ? (
			<div className="post">
			<h4 className="center">{this.props.post.title}</h4>
			<p>{this.props.post.body}</p>
			<div className="center">
				<button className = "btn grey" onClick ={this.handleClick}>

					Delete Post

				</button>

			</div>
			</div>


			) :(

				<div className ="center">Loading Post>>></div>


			)



		return(


			<div className="container">
				{post}
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) =>{
	let id = ownProps.match.params.post_id;
	return {
		post: state.posts.find(post => post.id === id)//the find method is used to find an indvidual post

	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		deletePost: (id) => { 	dispatch({type: 'DELETE_POST', id: id})
}}
	}



export default connect(mapStateToProps ,mapDispatchToProps)(post)