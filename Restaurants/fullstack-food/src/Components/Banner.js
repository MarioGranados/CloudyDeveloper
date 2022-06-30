import './Banner.css'

const Banner = () => {
    return (<>
        <div className="vh-100 d-flex align-items-center justify-content-center flex-column banner_background text-light">
            <h4 className="display-1 my-3">Restaurant Name</h4>
            <div className="row">
                <div className="col">
                    <button className='btn btn-outline-light btn-lg mx-2'>Order Now</button>
                    <button className='btn btn-outline-light btn-lg mx-2'>See Menu</button>
                </div>
            </div>
        </div>
    </>);

}
export default Banner
