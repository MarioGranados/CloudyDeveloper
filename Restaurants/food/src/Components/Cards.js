const Cards = ({title, subtitle, context, learnMore, seeFullMenu}) => {
    title = 'title';
    subtitle = 'subtitle'
    context = 'lorem ipsum notof irus asdomen omsom implu'
    seeFullMenu = 'see full menu'
    learnMore = 'learn more'
    return(
        <>
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    <p className="card-text">{context}</p>
                    <a href="#" className="card-link">{learnMore}</a>
                    <a href="#" className="card-link">{seeFullMenu}</a>
                </div>
            </div>
        </>
    );

}
export default Cards
