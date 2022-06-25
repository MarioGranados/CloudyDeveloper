const Testimonials = () => {
    return (
        <>
            <h4 className="display-4 text-center ">Testimonials</h4>

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="container">
                    <div className="carousel-inner py-5">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="card py-5 card_border_none">
                                <div className="card-body py-5">
                                    <h5 className="card-title text-center">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted text-center">Card subtitle</h6>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error ex id repudiandae. Aperiam asperiores dignissimos error exercitationem iusto maiores, minus non odit optio veritatis!</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="card py-5 card_border_none">
                                <div className="card-body py-5">
                                    <h5 className="card-title text-center">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted text-center">Card subtitle</h6>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facilis illum laboriosam laborum, nemo tempora.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card py-5 card_border_none">
                                <div className="card-body py-5">
                                    <h5 className="card-title text-center">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted text-center">Card subtitle</h6>
                                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aliquid assumenda dolorem et pariatur perspiciatis quas similique soluta!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev visually-hidden" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next visually-hidden" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
        ;
}
export default Testimonials;
