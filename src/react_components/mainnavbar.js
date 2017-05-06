import React from 'react';

class MainNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick() {

        }

    render() {
        return (
            <nav className="navbar navbar-custom-style" role="navigation">
                <div className="container-fluid">
                    {/*Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand navbar-brand-custom" href="#"><img id="brand-icon" src="../public/images/Spiral.png"/>Find Fun</a>
                    </div>

                    {/*Collect the nav links, forms, and other content for toggling */}

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input id="searchbox"type="text" className="form-control" placeholder="Search"/>
                                <img id="searchNavIcon" src="../public/images/lupa2.png" alt="icono" width={'5%'} height={'5%'} onClick={this.handleClick()}/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right navbar-right-custom">
                            <li><p className="navbar-text">Entra o unete</p></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle dropdown-toggle-custom" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
                                <ul id="login-dp" className="dropdown-menu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-12">
                                                Login via
                                                <div className="social-buttons">
                                                    <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
                                                    <a href="#" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
                                                </div>
                                                or
                                                <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                                    <div className="form-group">
                                                        <label className="table"  htmlFor="exampleInputEmail2">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="sr-only"  htmlFor="exampleInputPassword2">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                                            <div className="help-block text-right"><a href="">Forget the password ?</a></div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="bottom text-center">
                                               ¿ Nuevo Aqui ? <a href="#"><b>Unete</b></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>  {/*/.navbar-collapse*/}
                </div>  {/* /.container-fluid */}
            </nav>
        );
    }
}

export default MainNavBar;