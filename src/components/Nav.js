// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Nav extends Component {
    
//     render() {

//         return (
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//                 <div className="container-fluid">
//                     <a className="navbar-brand">Hestus</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                         <div className="navbar-nav">
//                             {
//                                 this.props.user.apitoken
//                                 ?
//                                 <>
//                                     <Link className="nav-link" to="/Home" style={{color: 'white'}}>Home</Link>
//                                     <Link className="nav-link" to="/" onClick={this.props.logMeOut} style={{color: 'white'}}>Log Out</Link>
//                                     <p className='nav-link' style={{color: 'white'}}>{this.props.user.username}</p>
//                                 </>
//                                 :
//                                 <>
//                                     <Link className="nav-link active" aria-current="page" to="/" style={{color: 'white'}}>Home</Link>
//                                     <Link className="nav-link" to="/login" style={{color: 'white'}}>Log In</Link>                                                        
//                                     <Link className="nav-link" to="/signup" style={{color: 'white'}}>Sign Up</Link>
//                                 </>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// };

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        const { user, logMeOut } = this.props;
        const isAuthenticated = user && user.apitoken;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Hestus</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {isAuthenticated ? (
                                <>
                                    <Link className="nav-link" to="/Home" style={{color: 'white'}}>Home</Link>
                                    <Link className="nav-link" to="/" onClick={logMeOut} style={{color: 'white'}}>Log Out</Link>
                                    <span className='nav-link' style={{color: 'white'}}>{user.username}</span>
                                </>
                            ) : (
                                <>
                                    <Link className="nav-link active" aria-current="page" to="/" style={{color: 'white'}}>Home</Link>
                                    <Link className="nav-link" to="/login" style={{color: 'white'}}>Log In</Link>
                                    <Link className="nav-link" to="/signup" style={{color: 'white'}}>Sign Up</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
