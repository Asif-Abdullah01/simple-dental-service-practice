import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import ServiceCard from "../ServiceCard";
import Feedback from "../Feedback";

const Home = () => {
    const services = useLoaderData();
    const {servicesData,feedbackData} = services;
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4 gap-4">
                {
                    servicesData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
           <button className="mx-auto block btn btn-primary mt-4">
           <NavLink to={'/allTreatments'}>Show More</NavLink>
           </button>


           <Feedback feedbackData={feedbackData}></Feedback>
        </div>
    );
};

export default Home;