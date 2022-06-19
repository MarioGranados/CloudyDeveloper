import {obj1} from "../Utils/Data";
import Cards from "./Cards"
const Services = () => {
    return(
        <>
            <div className="container">
                <h4 className='display-4 text-center'>Services</h4>
                <div className="row">
                    <div className="col">
                        <Cards {...obj1}/>
                    </div>
                    <div className="col">
                        <Cards {...obj1}/>
                    </div>
                    <div className="col">
                        <Cards {...obj1}/>
                    </div>
                </div>

            </div>
        </>
    );

}
export default Services;
