import Cards from "./Cards";
import {maintenance} from "../Utils/Data";

const Procedure = () => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Cards {...maintenance}/>
                    </div>
                    <div className="col">
                        <Cards {...maintenance}/>
                    </div>
                    <div className="col">
                        <Cards {...maintenance}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Procedure;
