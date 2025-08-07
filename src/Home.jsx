import Profile from "./components/Profile/Profile"
import RecentPosts from "./RecentPosts"
import Work from "./components/Work/Work"



const Home = () => {
    return(
        <>
        <Profile 
        heading="Hi, I am sandip,
        Creative Technologist"
         button1="Download Resume----"  
        />
         <RecentPosts  />
        </>

    )
}

export default Home