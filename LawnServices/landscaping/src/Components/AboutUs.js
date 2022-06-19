import Button from "./Button";

const AboutUs = ({title, context, subContext}) => {
    return (
        <>
            <div className="jumbotron mt-5">

                <div className="container">
                    <h4 className='display-4 text-center'>About Us</h4>
                    <div className="row">
                        <div className="col-6">
                            <img src="https://images.dog.ceo/breeds/whippet/n02091134_7862.jpg" alt="dog"/>

                        </div>
                        <div className="col-6">
                            <h6>Who we are</h6>
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem
                                blanditiis eius id ipsum quas recusandae tempore ut velit veniam!</p>
                            <br/>
                            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem
                                blanditiis eius id ipsum quas recusandae tempore ut velit veniam!</p>
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        <li>loremz</li>
                                        <li>this</li>
                                        <li>is</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li>an </li>
                                        <li>example</li>
                                        <li>of you</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs;
