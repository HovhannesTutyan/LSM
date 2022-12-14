import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <>
            <div className="container mt-4">
                {/*  Latest Courses  */}
                <h3 className="pb-1 mb-4 mt-5"> Latest Courses <a href="" className="float-end"> See All</a> </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="detail/1"><img src="logo512.png" className="card-img-top" /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="detail/1">Course title</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="detail/1"><img src="logo512.png" className="card-img-top" /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="detail/1">Course title</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                {/*  Latest Courses  */}
                <h3 className="pb-1 mb-4 mt-5"> Popular Courses <a href="" className="float-end"> See All</a> </h3>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="detail/1"><img src="logo512.png" className="card-img-top" /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="detail/1">Course title</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <Link to="detail/1"><img src="logo512.png" className="card-img-top" /></Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to="detail/1">Course title</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="pb-1 mb-4 mt-5"> Students Testimonials <a href="" className="float-end"> See All</a> </h3>
            </div>

        </>
    );
}

export default CartItem;