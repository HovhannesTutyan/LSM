import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">User Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Username</label>
                                    <input type="email" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input type="email" className="form-control"></input>
                                </div>
                            </form>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;