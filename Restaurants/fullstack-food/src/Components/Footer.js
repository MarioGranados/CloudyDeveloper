const Footer = () => {
    return(
        <>
            <div className="container-fluid bg-dark text-white py-5 h-50">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa, dolorum excepturi nihil quis sapiente voluptatum!</p>
                        </div>
                        <div className="col">
                            <div className="row">
                                <h4>Lunch</h4>
                                <p className='my-0'>Lorem ipsum.</p>
                                <p className='my-0'>Lorem ipsum.</p>
                                <p className='my-0'>Lorem ipsum.</p>
                                <p className='my-0 mb-1'>Lorem ipsum.</p>
                            </div>
                            <div className="row">
                                <h4>Dinner</h4>
                                <p className='my-0'>Lorem ipsum.</p>
                                <p className='my-0'>Lorem ipsum.</p>
                                <p className='my-0'>Lorem ipsum.</p>
                                <p className='my-0 mb-1'>Lorem ipsum.</p>
                            </div>

                        </div>
                        <div className="col">
                            <div className="row">
                                <h4>Follow Us</h4>
                                <button>
                                    click me
                                </button>

                            </div>
                            <div className="row">
                                newsletter
                                <label htmlFor="newsletter"></label>
                                <input type="text" className='form-control'id='newsletter'/>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Footer;
