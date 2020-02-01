import React ,{ Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux' 
class Home extends Component {
 //  state = {

 //  	posts: [ ]



 //  }

	// componentDidMount(){
	// 	axios.get('https://jsonplaceholder.typicode.com/posts')
	// 	.then(res =>{
	// 		console.log(res)
	// 		this.setState({
	// 			posts: res.data.slice(0,10)
	// 		})
	// 	})
	// }
render(){
	console.log(this.props)
	const {posts}  = this.props;//using destructuring to grab posts from the state
	const postList = posts.length ? (
//map method helps us cycle through the posts
		posts.map(post =>{
			return (
					<div className ="post card" key={post.id}>
						<img src={Pokeball} alt="A pokeball" />
						<div className="card-content">
						<Link to= {'/'+post.id}>

							<span className ="card-title red-text">{post.title}</span>
						</Link>
							<p>{post.body}</p>
						</div>
					</div>
				)
		})
		) : (

			<div className ="center"> No post yet </div>
		)
return (
			<div className = "container home ">

				<h4 className = "center"> Home</h4>
					{postList}
						</div>
					


	)

}

}

const mapStateToProps = (state) =>{
		return{

			posts: state.posts
		}
}



//connect is a function that returns a higher order componenet, we invoke it, so HOC wraps the component
export default connect(mapStateToProps)(Home)