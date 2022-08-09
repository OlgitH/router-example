import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, a? Commodi accusamus libero assumenda, rerum iure cupiditate, fugiat sequi id quis, molestias reprehenderit accusantium. Laborum aliquam officia amet dolor error?
            </p>
           <nav>
            <ul>
                <li><a href="/about/team">Team</a></li>
                <li><a href="/about/what-we-do">What we do</a></li>
            </ul>
           </nav>
            <Outlet />
        </div>
    )
}
export default About;