const initState={

	posts :[
		{
	id: '1',
	title: 'delectus aut autem',
	body: 'Excepteur proident tempor est in fugiat non ut elit.Ut irure irure in aliquip et et sit velit nisi sed'
	},
	{
	id: '2',
	title: "quis ut nam facilis et officia qui",
	body: 'Excepteur proident tempor est in fugiat non ut elit. Lorem ipsum dolor mollit dolore in sint in aliqua ex in cupidatat sit sit mollit dolore magna sunt.'
	},
	{
	id: '3',
	title: "quis ut nam facilis et officia qui",
	body: 'Excepteur proident tempor est in fugiat non ut elit. Lorem ipsum quis ullamco magna dolor eiusmod minim ea et magna eiusmod.'
	},
	{
	id: '4',
	title: "quis ut nam facilis et officia qui",
	body: 'Excepteur proident tempor est in fugiat non ut elit. Nisi amet quis in est dolore in reprehenderit reprehenderit duis enim sit excepteur aliqua enim.'
	}
	]


}

const rootReducer = (state=initState, action) =>{
	if(action.type === 'DELETE_POST'){

		let newPosts = state.posts.filter(post =>{
			return action.id !== post.id
		})

			return {

				...state,
				posts: newPosts
			}
	}
	console.log(action);
	return state;

}

export default rootReducer