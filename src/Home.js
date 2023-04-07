import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const [name, setName] = useState('Mario');
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs') //Custom Hook
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (  
        <div className="home">
            {/* Below code conditionals blogs as null amd waits till it is not null to display data */}
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <button onClick={() => setName('Luigi') }>Change Name</button> */}
            {/* <p>{ name }</p> */}
        </div>
    );
}
 
export default Home;