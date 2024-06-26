import React from 'react';
import { Carousel, ConfigProvider } from 'antd';
import './Carousel.css';
import carouselItems from './carouselItems.js';

const contentStyle = {
  margin: 0,
  minHeight: '175px',
  height: 'fit-content',
  color: '#fff',
  background: 'transparent',
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
};

const CarouselComponent = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          dotWidth: 10,
          dotHeight: 10,
          dotActiveWidth: 10,
        },
      },
    }}
  >
    <div className="w-screen h-80">
      <Carousel arrows infinite dotPosition="top" effect="fade" autoplay autoplaySpeed={4500}>
        {
          carouselItems.map((item) => (
            <div key={item.key}>
              <div style={contentStyle}>
                <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }} className="gradient__text">{item.title}</span>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  </ConfigProvider>
);

export default CarouselComponent;
