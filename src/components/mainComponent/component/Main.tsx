import React from 'react';
import Estimate from "../../move/component/Estimate";
import MovingType from "../../move/component/MovingType";
import VideoUploadPage from "../../videoUpload/VideoUploadPage";
import MovingDate from "../../move/component/MovingDate";
import MovingStartPoint from "../../move/component/movingPoint/MovingStartPoint";
const Main = () => {
    return (
        <div>
          <h1>메인</h1>
            <MovingDate/>
            <MovingType/>
        <MovingStartPoint/>
        </div>
    );
};

export default Main;