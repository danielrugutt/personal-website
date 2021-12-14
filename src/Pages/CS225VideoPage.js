import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function CS225VideoPage() {
    return (
        <video autoPlay controls >
            <source src={'../videos/cs225_final_project_video.mp4'} type="video/mp4"/>
        </video>
    )
}

export default CS225VideoPage; 