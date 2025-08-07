import PostsCard from "./PostsCard";
import Profile from "./components/Profile/Profile";
import "./RecentPosts.css";

const RecentPosts = (props) => {
  const cardData = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      tags: "Design, Pattern",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "16 Feb 2020",
      tags: "Figma, Icon Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    }
  ]

 
  // jsx 
  return (
    <div className="container" style={{ backgroundColor: "#EDF7FA" }}>
      <div className="d-flex justify-content-between">
        <h4>Recent posts</h4>
        <h4>view all</h4>
      </div>
      <div className="row justify-content-center">
        {
          cardData.map((item, key)=> {
            return(
              <PostsCard
               title={item.title}
               date={item.date}
                tags={item.tags}
                description={item.description}
               />
            )
          })
        }
        {/* reusable component  */}
        {/* <PostsCard
          title="Making a design system from scratch"
          date="12 Feb 2020"
          tags="Design, Patter"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <PostsCard
          title="Creating pixel perfect icons in Figma"
          date="16 Feb 2020"
          tags="Figma, Icon Design"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        /> */}
      </div>
    </div>
  );
};

export default RecentPosts;
