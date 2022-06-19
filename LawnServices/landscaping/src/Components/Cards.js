const Cards = ({title, cardText, icon}) => {

    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <p className='title'>{icon}</p>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{cardText}</p>
                </div>
            </div>
        </>
    );
}
export default Cards;
