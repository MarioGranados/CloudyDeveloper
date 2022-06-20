import Button from "./Button"
import '../App.css'
const Banner = () => {
    return (
        <>
            <div className="jumbotron banner_background min-vh-100 text-white">
                <div className="container mt-5">
                    <h1 className="display-2 font-weight-bold">Company Name</h1>
                    <p className="lead display-4 font-weight-bold">Residential Lawn Care Services</p>
                    <h4 className='lead mb-4'>Company subtitle(optional)</h4>
                    <Button>Services</Button>
                </div>

            </div>
        </>
    );
}
export default Banner;
