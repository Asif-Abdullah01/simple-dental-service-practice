import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const { treatment, image, description, cost,id } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-auto object-cover blur-sm"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">${cost}</div>
                </h2>
                <p title={description}>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}>
                        <button className="badge badge-outline bg-blue-500 p-4 text-white font-bold">CheckOut more</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;