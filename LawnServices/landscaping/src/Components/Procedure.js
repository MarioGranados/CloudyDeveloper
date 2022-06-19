import Cards from "./Cards";
import {obj1} from "../Utils/Data";

const Procedure = () => {
    return(
        <>
            <div className="container">
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
export default Procedure;
