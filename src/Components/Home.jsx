import React from 'react';
import home from "../images/home.svg";
import Common from './Common';
import Card from './Card';
import ServiceData from './ServiceData';
import Footer from './footer';

const Home = () => {
    return (
        <>
            <Common 
                name='Optimize your resume with ' 
                imgsrc={home} 
                isCompName={true}
                compName="ATS Hacker"
                visit='/services' 
                btnname="Get Started" 
            />

          <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ServiceData.map((val, index) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
         <Footer />
        </>
    )
}

export default Home;
