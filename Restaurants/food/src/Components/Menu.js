import HorizontalCard from "./HorizontalCard";

const Menu = () => {

    return(
        <>
            <h4 className="text-center display-4 mt-5">Menu</h4>
            <p className="lead-text text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore nesciunt, quod. Asperiores, voluptates.</p>
            <ul className="nav nav-tabs border_none justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role='presentation'>
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Appetizers</button>
                </li>
                <li className="nav-item" role='presentation'>
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Chef's Choice</button>
                </li>
                <li className="nav-item" role='presentation'>
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Salads</button>
                </li>
            </ul>
            <div className="tab-content container w-50 vh-100 m-auto" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                     tabIndex="0">
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"
                     tabIndex="0">
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab"
                     tabIndex="0">
                    <HorizontalCard/>
                    <HorizontalCard/>
                    <HorizontalCard/>
                </div>
            </div>
        </>
    );

}
export default Menu;
