import React from 'react'


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Admin Dasboard</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="/employee">Employee</a></li>
                    <li><a href="/showemployee">Show Employee</a></li>
                    <li><a href="/project">Project</a></li>
                    <li><a href="showproject">ShowProject</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
      <li><a href="/"><span class="glyphicon glyphicon-user"></span> Login</a></li>
    </ul>
                </div>
        </nav>
        </div>
    )
}

export default Navbar
