import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Daniel Rugutt</span></h4>
                <p className="paragraph">
                Hey! I have always had an interest in computers and figuring out how 
                unique features work through experimenting. I love to work on projects 
                that help solve critical problems, especially problems that affect our 
                world today. I bring team building experience in the form of communication 
                and impactful leadership, and I have a strong work ethic to help push through 
                challenges and bring a positive mindset that will inspire others.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>University</p>
                        <p>Graduation Year</p>
                        <p>Major</p>
                    </div>
                    <div className="info">
                        <p>: Daniel Rugutt</p>
                        <p>: 19</p>
                        <p>: Kenyan-American </p>
                        <p>: English, Swahili (Proficient), Spanish (Intermediate) </p>
                        <p>: Normal, Illinois / Kericho, Kenya</p>
                        <p>: University of Illinois at Urbana-Champaign</p>
                        <p>: May 2024</p>
                        <p>: Statistics and Computer Science</p>
                    </div>
                </div>
                <PrimaryButton title={'Open Resume'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
