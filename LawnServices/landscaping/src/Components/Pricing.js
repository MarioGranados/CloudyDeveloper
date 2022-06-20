import Cards from "./Cards";
import {maintenance} from "../Utils/Data";

const Pricing = () => {
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner mt-5 py-2">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row justify-content-around align-content-center d-flex">
                                <div className="col-6">
                                    <Cards {...maintenance}/>
                                </div>
                                <div className="col-6">
                                    <Cards {...maintenance}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row justify-content-around align-content-center d-flex">
                                <div className="col-6">
                                    <Cards {...maintenance}/>
                                </div>
                                <div className="col-6">
                                    <Cards {...maintenance}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row justify-content-around align-content-center d-flex">
                                <div className="col-6">
                                    <Cards {...maintenance}/>
                                </div>
                                <div className="col-6">
                                    <Cards {...maintenance}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"
                        data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators"
                        data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </>
    );

}
export default Pricing;
