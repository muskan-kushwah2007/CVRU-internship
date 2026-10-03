import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import Footer from './Components/Footer';

import "./App.css";

function App
() {
    return (
        <div>

            <Navbar />

            <main>

                {/* Home Section */}
                <section className="hero" id="home">

                    <h1>
                        Welcome to My Personal Blog
                    </h1>

                    <p>
                        Sharing my thoughts, learning and experiences
                        in technology.
                    </p>

                </section>

                {/* Blog Section */}
                <BlogList />

                {/* About Section */}
                <section className="about" id="about">

                    <h2>About Me</h2>

                    <p>
                        Hello! I am Muskan, a BCA student learning
                        React and MERN Full Stack Development.
                    </p>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default App;