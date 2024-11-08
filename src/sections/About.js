import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';
import theme from '../Theme'; // Your theme definition

const AboutContainer = styled.div`
    padding: 100px 100px; // Add top padding to account for fixed navbar
    background-color: ${theme.background}; // Dark background for contrast
    text-align: left;
    

    h1 {
        color: hsla(0, 0%, 100%, 0.88);
        line-height: 72px;
        margin-top: 18px;
        font-size: 60px;
        font-weight: 700;
        span {
            color: #828282;
        }
    }

    p {
        font-size: 1.2rem;
        max-width: 800px;
        line-height: 1.6;
        font-weight: 700;
    }
`;

const FaceImg = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${theme.face_color};
    border-radius: 50%;
    overflow: hidden;
    transition: background-color 0.3s ease;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        background-color: #555; // Hover effect
    }
`;

const FaceColor = styled.span`
    color: ${theme.primary_color}!important;
`
const About = () => {
    const [currentText, setCurrentText] = useState("design");

    useEffect(() => {
        const texts = ["design", "develop", "create"];
        let index = 0;
        const interval = setInterval(() => {
            setCurrentText(texts[index]);
            index = (index + 1) % texts.length;
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedSection id="about">
            <AboutContainer>
                <FaceImg>
                    <img src={require('../images/avatar.png')} alt="Amirbek's avatar" />
                </FaceImg>
                <h1>
                    Hi, I'm Amirbek <span>(Amir)</span>
                    <br />
                    I <FaceColor>{currentText}</FaceColor> user-friendly products.
                </h1>
            </AboutContainer>
        </AnimatedSection>
    );
};

export default About;
