const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Simple React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:' #468645',
                    borderRadius: '8px'
                }}>New Post</a>
            </div>
        </nav>
    );
}
 
export default Navbar;