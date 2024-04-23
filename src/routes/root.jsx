import { Outlet } from "react-router-dom"

export default function Root() {
    return (
    <>
    <div id="sidebar">
    <h1>React Router Example</h1>
    <div>Our title</div>
    <nav>
    <ul>
    <li>
    <a href={`/page-one`}>Go to Page 1</a>
    </li>
    <li>
    <a href={`/page-two`}>Go to Page 2</a>
    </li>
    </ul>
    </nav>
    </div>
    <div id="detail">
        <Outlet />
    </div>
    </>
    );
    }
    