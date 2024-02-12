import { ResponseCardWrapper } from "../assets/wrappers/ResponseCard.styles"
import starOutline from '../assets/images/starOutline.svg'
import { useState } from "react"
import starFill from '../assets/images/starFill.svg'

const Responses = () => {
    const [isFavourite, setIsFavourite] = useState(false)
  return (
    <ResponseCardWrapper>
        <div className="card">
            <div>
                <h6>Answer to the first question</h6>
                <div className="date-and-time"><p>30/24/2023 </p> | <p>16:24pm</p></div>
            </div>
            <div className="favourite-view">
                <img src={isFavourite?  starFill : starOutline} onClick={()=> setIsFavourite(!isFavourite)}/>
                <p>View</p>
            </div>
        </div>
        <div className="card">
            <div>
                <p>Answer to the first question</p>
                <div className="date-and-time"><p>30/24/2023 </p> | <p>16:24pm</p></div>
            </div>
            <div className="favourite-view">
                <img src={isFavourite?  starFill : starOutline} onClick={()=> setIsFavourite(!isFavourite)}/>
                <p>View</p>
            </div>
        </div>
        <div className="card">
            <div>
                <p>Answer to the first question</p>
                <div className="date-and-time"><p>30/24/2023 </p> | <p>16:24pm</p></div>
            </div>
            <div className="favourite-view">
                <img src={isFavourite?  starFill : starOutline} onClick={()=> setIsFavourite(!isFavourite)}/>
                <p>View</p>
            </div>
        </div>
        <div className="card">
            <div>
                <p>Answer to the first question</p>
                <div className="date-and-time"><p>30/24/2023 </p> | <p>16:24pm</p></div>
            </div>
            <div className="favourite-view">
                <img src={isFavourite?  starFill : starOutline} onClick={()=> setIsFavourite(!isFavourite)}/>
                <p>View</p>
            </div>
        </div>
        <div className="card">
            <div>
                <p>Answer to the first question</p>
                <div className="date-and-time"><p>30/24/2023 </p> | <p>16:24pm</p></div>
            </div>
            <div className="favourite-view">
                <img src={isFavourite?  starFill : starOutline} onClick={()=> setIsFavourite(!isFavourite)}/>
                <p>View</p>
            </div>
        </div>
        <div className="card">
            <div>
                <p>Answer to the first question</p>
                <div className="date-and-time"><p>30/24/2023 </p> | <p>16:24pm</p></div>
            </div>
            <div className="favourite-view">
                <img src={isFavourite?  starFill : starOutline} onClick={()=> setIsFavourite(!isFavourite)}/>
                <p>View</p>
            </div>
        </div>

    </ResponseCardWrapper>
  )
}

export default Responses