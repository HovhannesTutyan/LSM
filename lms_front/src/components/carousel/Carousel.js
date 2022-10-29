import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {

    return (
        <>
            <div classNameName="mt-4">
                <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h3>quote is here</h3>
                        </div>
                        <div className="carousel-item">
                            <h3>quote is here</h3>
                        </div>
                        <div className="carousel-item">
                            <h3>quote is here</h3>
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Slider;