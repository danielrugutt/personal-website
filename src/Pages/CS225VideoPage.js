import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function CS225VideoPage() {
    return (
    <div className='player-wrapper'>
        <ReactPlayer
            className='react-player fixed-bottom'
            url= 'https://cs225-final-project-video.s3.us-east-2.amazonaws.com/cs225_final_project_video.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLWVhc3QtMiJIMEYCIQC8bq9XeLXOShQgYzjtXJ0q9E1bCRuktr8KyKOBlF5t0wIhAKvZGGKcPJ9ICDn4KUJGmVBZTcP%2BKHN5OZ0YUZlFPEzCKvYCCFIQABoMMzcxMDI1NDQ3NjQ5IgwXi9D8kPUcXyhYKwoq0wKUcSA2gqU8LJZX63kca4BLTtcR2koGviOIR9nlXYBpbnf8JWr94NKxzGellGWV0UikTaEjZmTeEsznMBggH98ULtXXQFmJxu%2FXJMCkPo4w0LubPQXmPg0Ov3UwH%2Fm7i01UAWIxXZVoIqOKRaTedNrX1rkKB%2B1qXsQpO%2BoQrIzvpozmGy3ljWfKEXoHoYbpxLCE4EwE6oqKokPki1KRmHOzjm187WcI72bozb4V8iqt2QD%2FsTx1kjZygfR%2B7hPbVs1EduA4MVKabGbtTUOS5tYh3SiCRcn0A2VQjV1K3aY5IsYrdz9Qo5k5Vi5YjJi7Qyj4cIK42nd7l0FuraCO1%2FXqUNrYwMO9S9%2Bb9HSrU23tVtha%2F4TKLoqgJYHfe1oeHAWy4Fn7fJcQFckd%2F3bGDCI4gzsZoFjYRCG%2FhXBDKse3EPycZNX1rXU93DZBewxuGPE54mQw0eLfjQY6sgLnY1E5KpNrZIEdYLsOX8gr1QX9JJAJnoGgiwUHDM31rspvRW8LAhf%2FZKFgGaGMLtvLiqGEIkpyHZu9qrT%2FG9k3BELcbEA5reKt%2FBiRHHadh%2FFRB%2FbIZsDUW9URupWrrHDyE8FEVYtggU9bAarWk4pIGPNa5yuM6nHekaN9BKLBBu7Y9gPuz1nlL6sGeP%2FGxYevLpYTJw6Z0tqFpKBv54Q4CAQajpzHqU29DMsv83k3cmbq0VGBrlWel8nmnCz2Zw1l2OqYz%2F6kXM2%2BAmpIefPgRFvclava3BAcUgQszoxA1LSDXhkGb9D2cMw%2BeN%2B1JKlUJZqFUHxHz2i4i9lDenvt%2FqwPkWuyPMAoyLRyHIqfwsIeIiVQ2iptdh%2F3%2FdEZnTYx0Dlso5eIT95jLbR8i6yTdQE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211214T013349Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAVMYWXBLQ4TCCONMT%2F20211214%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=7d8ea918e976e979502eec0ade77d4e18f7950a7b2d2fd6a283d75f98956c388'
            width='100%'
            height='100%'
            controls = {true}
            muted={false}
            playing={true}

        />
    </div>
    )
}

export default CS225VideoPage;