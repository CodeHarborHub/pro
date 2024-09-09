import React, { useState, useEffect } from "react";
import "./services.css";
import Img from "../../assets/images/service.png";
import { useAuth } from "../../store/auth";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {API} = useAuth();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(API+"/data/services");
        const data = await response.json();
        setServices(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [API]);

  return (
    <main>
      <div className="services-page">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Explore a wide range of services tailored to your business needs.</p>
        </div>
        <div className="services-container">
          {isLoading ? (
            <div className="loading">
                <div className="loader">
                    <h3>Loading...</h3> <br />
                    <div className="circle"></div>
                </div>
            </div>
          ) : (
            services.map((service) => (
              <div className="service-card" key={service._id}>
                <img
                  src={service.image || Img}
                  alt={service.service}
                  className="service-image"
                />
                <div className="service-details">
                  <h2>{service.service}</h2>
                  <p>{service.description}</p>
                  <div className="service-info">
                    <span>Price: ${service.price}</span>
                    <span>Provider: {service.provider}</span>
                  </div>
                  {/* <button className="learn-more-btn">Learn More</button> */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Services;