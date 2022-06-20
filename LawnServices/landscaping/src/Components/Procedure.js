import Cards from "./Cards";
import {stepOne, stepThree, stepTwo} from "../Utils/Data";

const Procedure = () => {
    return(
        <>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col">
                        <Cards {...stepOne}/>
                    </div>
                    <div className="col">
                        <Cards {...stepTwo}/>
                    </div>
                    <div className="col">
                        <Cards {...stepThree}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Procedure;
