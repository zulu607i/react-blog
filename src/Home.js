import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'First Post', body: 'Lorem ipsum...', author:'Mario', id : 1 },
        {title: 'Second Post', body: 'Lorem ipsum...', author:'Luigi', id : 2},
        {title: 'Third Post', body: 'Lorem ipsum...', author:'Princess Leia', id : 3},
    ]);

    return (
        <div className="home">
           <BlogList blogs={blogs}/>
        </div>
     );
}
 
export default Home;