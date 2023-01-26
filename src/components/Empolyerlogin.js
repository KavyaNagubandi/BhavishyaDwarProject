function employerlogin(){
    return (
        <div>
          <header>
        <div className="container-fluid bg-info">
            <div className="row">
                <div className="col-sm-3">{/*<!--<img src="./Bhavishya logo.png" alt="logo" width="100" height="100">-->*/}
                    <img src="data:image/png;base64,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" alt="logo" style={{width:"150px",height:"100px"}}></img>
                </div>
                <div className="container col">
                    
                    <nav className="navbar navbar-expand-sm navbar-nav-scroll position: fixed">
                        
                       <a className="navbar-brand" href="#"></a>
                        <button type="button" 
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <br></br><a className="nav-link" href="/"><b style={{fontSize:"20px"}}>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <br></br><a className="nav-link" href="Aboutus"><b style={{fontSize:"20px"}}>AboutUs</b></a>
                            </li>
                            <li className="nav-item">
                                <br></br><a className="nav-link" href="Contactus"><b style={{fontSize:"20px"}}> ContactUs</b></a>
                            </li>  
                        </ul>
                        </div>
                    </nav>
                </div>
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                            <div className="container-fluid">
                              <a className="navbar-brand" href="#"></a>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                <ul className="navbar-nav">
                                  <li className="nav-item dropdown">
                                    <br></br><button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                      Register
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-info">
                                      <li><a className="dropdown-item" href="Studentreg">Student</a></li>
                                      <li><a className="dropdown-item" href="Employerreg">Employer</a></li>
                                    </ul>
                                  </li>
                                  
                                  <li className="nav-item dropdown">
                                    <br></br><button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                      Login
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-info">
                                      <li><a className="dropdown-item" href="Studentlogin">Student</a></li>
                                      <li><a className="dropdown-item" href="Employerlogin">Employer</a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                    </div>                
             </div>
        </div>
    </header>
    <main>
        <br></br>
        
        <div className="container"  style={{textAlign:"center"}}>
            <h3>Sign In</h3>
            
            <form action="Dashboard" className="modal-content">
                <div className="container" style={{border:"3px solid black"}}>
                    <label for="email"><b>Email</b></label><br></br>
                    <input type="text" placeholder="Enter Email" name="email" required /><br></br>
                    <br></br>
                    <label for="psw"><b>Password</b></label><br></br>
                    <input type="password" name="psw" placeholder="Enter Password"/><br></br>
                    <br></br>
                    <label>
                        <input type="checkbox" name="remember"/>
                        Remember me
                    </label>
                    <div style={{textAlign: "center"}}>
                        <button style={{width:"200px"}} href="Dashboard"><b>Log In</b></button> 
                    </div><br></br>
                  <a href="Employerreg">Don't Have an account? Click Here</a>
                  <br></br><br></br>
                    </div>
            </form>
        </div>
        <br></br>
        <br></br><br></br><br></br><br></br>
    </main>
    <footer className="footer">
        <div className="container-fluid bg-dark">
            <hr></hr>
            <h1 style={{color:"aliceblue"}}> Bhavishya Dwar </h1>
            <div className="container">
                <p style={{color:"blue"}}>
                    <a className="nav-link" href="Aboutus">About Us</a>
                    <a className="nav-link" href="Contactus">Contact Us</a>
                    <br></br>
                </p>
                <p style={{color:"aliceblue"}}></p>
            </div>
        </div>
    </footer>
        </div>
    );

}
export default employerlogin;