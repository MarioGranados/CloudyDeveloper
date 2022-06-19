const Gallery = ({img}) => {
    return (
        <>
            <div className="col mt-5">
                <img src={img} alt={img} style={{width: '100%', margin: 'auto'}}/>
            </div>
        </>
    );
}
export default Gallery
