import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AchievementCard from './AchievementCard';
import AchievementSection from './AchievementSection';
import './Achievement.css'
const AchievementCaraousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        
        <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-dark'>
            <Carousel.Item>
                <AchievementSection body1={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}
                body2={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}
                body3={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}/>
            </Carousel.Item>
            <Carousel.Item>
                <AchievementSection body1={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}
                body2={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}
                body3={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}/>
            </Carousel.Item>
            <Carousel.Item>
                <AchievementSection body1={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}
                body2={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}
                body3={
                    " Ph.D. student Mr. Ravi Yadav working under the guidance of Dr. Ravi Panwar awarded with Swachhta Saarthi Fellowship under the Waste to Wealth Mission of the Government of India, 2021."}/>
            </Carousel.Item>
            </Carousel>
            </>
    );
}

export default AchievementCaraousel