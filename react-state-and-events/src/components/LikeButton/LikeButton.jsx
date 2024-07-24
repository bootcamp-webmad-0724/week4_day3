import './LikeButton.css'
import notLikedImage from './../../assets/heart-off.svg'
import likedImage from './../../assets/heart-on.svg'
import { useState } from 'react'

const LikeButton = () => {

    const [doesLike, setDoesLike] = useState(false)

    const handleLike = () => {
        setDoesLike(!doesLike)
    }

    return (
        <div className="LikeButton">

            <img onClick={handleLike} src={doesLike ? likedImage : notLikedImage} alt="Heart" />

            {
                doesLike ? <h1>Le gusta muxo aw :3</h1> : <h1>No le gusta D:</h1>
            }

        </div >
    )
}

export default LikeButton