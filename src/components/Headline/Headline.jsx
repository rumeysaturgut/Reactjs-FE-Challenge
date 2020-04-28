import React from "react";
import { Style } from "react-style-tag";

const Headline = (props) => {
    const { title1, title2} = props;
    return (
        <>
            <div className="maintext">
                <h1>{title1}<br/><b>{title2}</b></h1>
            </div>
            <Style>
                {`
                    .maintext {
                    position: relative;
                    height: 470px;
                    }
                    
                    .maintext h1 {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 100%;
                    margin: 0 auto;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 40px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.2;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff;
                    box-sizing: border-box;
                    padding-left: 50px;
                    padding-right: 50px;
                    }
                `}
            </Style>
        </>
    );
}

export default Headline;
