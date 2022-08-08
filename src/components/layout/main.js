import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="layout">
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About page</a>
                        </li>
                    </ul>
                </nav>

                <div className="hero-banner"></div>
                
                <div className="page-content">
                    <Outlet />
                </div>
                
            </div>
        </>
    )
};

export default Layout;