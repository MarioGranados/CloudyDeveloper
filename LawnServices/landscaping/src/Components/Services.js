
import Cards from "./Cards"
import {lawnMover, leafCleanups, maintenance, overgrown} from "../Utils/Data";

const Services = () => {
    return(
        <>
            <div className="container py-5">
                <h4 className='display-4 mb-5 font-weight-bolder text-dark'>Services</h4>
                <div className="row">
                    <div className="col">
                        <Cards {...maintenance}/>
                    </div>
                    <div className="col">
                        <Cards {...overgrown}/>
                    </div>
                    <div className="col">
                        <Cards {...leafCleanups}/>
                    </div>
                </div>

            </div>
        </>
    );

}
export default Services;
