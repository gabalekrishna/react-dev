import './RecentPosts.css'

function PostsCard(props){
    return(
        <div className="d-flex custom-card m-4">
                <div className="card-body">
                    <h1 className="fw-seibold text-black">{props.title}</h1>
                    <div className="d-flex align-items-center text-secondary">
                        <span>{props.date}</span>
                        <span className="mx-2"> | </span>
                        <span> {props.tags}</span>
                    </div>
                    <p>
                     {props.description}
                    </p>
                </div>
            </div>
    )
}

export default PostsCard;