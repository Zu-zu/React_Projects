function Reasons() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

function MainContent() {
    return(
        <div>
            <h3>Reasons I am happy to learn react</h3>
            <ul>
                <li>It looks cool</li>
                <li>it's just a hobby bro</li>
                <li>It is quite popular and might be useful in the future</li>
            </ul>
        </div>
    )
}

function Header() {
    return(
        <nav className="nav-bar">
            <img src="./React-icon.png" className="nav-logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

function Footer() {
    return(
        <div className="footer" >
            <p className="footer-text">C 2022 Nagadowska Development. All rights reserved.</p>
        </div>
    )
}


ReactDOM.render(
    <Reasons />,
    document.getElementById("root")
)