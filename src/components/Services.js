import React, { Component } from "react";
import {
  FaCamera,
  FaMountain,
  FaAudioDescription,
  FaFilm,
} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCamera />,
        title: "Partner Studios",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaMountain />,
        title: "Indoor/Outdoor Setting",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaAudioDescription />,
        title: "Free Script Counseling",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaFilm />,
        title: "Filming Studio",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
