import Gallery from "./Gallery";

const OurWork = () => {
    return(
        <>
            <div className="container mt-5 py-5 min-vh-100">

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                           aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                           aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                           aria-controls="contact" aria-selected="false">Contact</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="container">
                            <div className="row">
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                            </div>
                            <div className="row">
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="container">
                            <div className="row">
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                            </div>
                            <div className="row">
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                            </div>
                        </div>                </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="container">
                            <div className="row">
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                            </div>
                            <div className="row">
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                                <Gallery img='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg'/>
                            </div>
                        </div>                </div>
                </div>
            </div>

        </>
    );
}
export default OurWork;
