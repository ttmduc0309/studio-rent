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
        info: "We have close collaborations with experienced and reputable studios nationwide.",
      },
      {
        icon: <FaMountain />,
        title: "Indoor/Outdoor Setting",
        info: "Promote, collaborate with numerous beautiful and unique tourist destinations and landscapes for everyone",
      },
      {
        icon: <FaAudioDescription />,
        title: "Free Script Counseling",
        info: "A team of friendly and enthusiastic consulting staff wholeheartedly dedicated to customer care",
      },
      {
        icon: <FaFilm />,
        title: "Filming Studio",
        info: "The production workshops of our studios always ensure high-quality, safe, and efficient working environments.",
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
