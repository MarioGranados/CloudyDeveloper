import Button from "./Button"

const Banner = () => {
    return (
        <>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Company Name</h1>
                    <p className="lead">Residential Lawn Care Services</p>
                    <p>Company subtitle(optional)</p>
                    <Button>Services</Button>
                </div>
            </div>
        </>
    );
}
export default Banner;
