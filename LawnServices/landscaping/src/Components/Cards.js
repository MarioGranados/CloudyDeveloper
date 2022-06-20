const Cards = ({title, cardText, icon, bgColor}) => {
    return(
        <>
            <div className='card box_shadow text-white' style={{width: '18rem', backgroundColor: bgColor, minHeight: '18rem'}}>
                <div className="card-body">
                    <p className='title text-dark'>{icon}</p>
                    <h5 className="card-title text-dark font-weight-bolder">{title}</h5>
                    <p className="card-text">{cardText}</p>
                </div>
            </div>
        </>
    );
}
export default Cards;
