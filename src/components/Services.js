import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info: 'this room will give you good experiences'
            },
            {
                icon:<FaHiking/>,
                title:'free hiking course',
                info: 'this room will give you good experiences'
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info: 'this room will give you good experiences'
            },
            {
                icon:<FaBeer/>,
                title:'free beer, yeahhhh!',
                info: 'this room will give you good experiences'
            }
        ]
    };
    render () {
        return (
            <section className="services">
            <Title title="services"/>
                <div className="services-center">
                  {this.state.services.map((item, index) =>{
                        return (
                            <article key={index} className="service">
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