const ContactCard = () => {
    return (
        <>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <h5 className="card-title">Card title</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Example label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                               placeholder="Example input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Another label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2"
                               placeholder="Another input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Example label</label>
                        <input type="text" className="form-control" id="formGroupExampleInput"
                               placeholder="Example input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Another label</label>
                        <textarea className="form-control" id="formGroupExampleInput2"
                                  placeholder="Another input placeholder"
                                  rows='10'
                                  cols='10'
                        />
                    </div>
                </form>
            </div>
        </>
    )

}
export default ContactCard;
