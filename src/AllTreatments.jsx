import { useLoaderData } from "react-router-dom";
import ServiceCard from './components/ServiceCard';

const AllTreatments = () => {
    const services = useLoaderData()
    return (
        <div className="grid grid-cols-4 gap-4 w-[80%] mx-auto max-w-[1200px] mt-6">
        {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
    </div>
    );
};

export default AllTreatments;