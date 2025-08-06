import './RecentPosts.css'

function PostsCard({title, date, tags, description}){
  // props.title
  // {data, ...} = props
  // ({data, .....})
    return(
        <div className="d-flex custom-card m-4">
                <div className="card-body">
                    <h1 className="fw-seibold text-black">{title}</h1>
                    <div className="d-flex align-items-center text-secondary">
                        <span>{date}</span>
                        <span className="mx-2"> | </span>
                        <span> {tags}</span>
                    </div>
                    <p>
                     {description}
                    </p>
                </div>
            </div>
    )
}

export default PostsCard;