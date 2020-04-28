import React from 'react';
import { Style } from "react-style-tag";

const Menu = (props) => {
    const { items } = props;
    return(
        <>
            <div className="tabsContainer">
                {items.map(item => (
                    <a target={item.target} title={item.title} href={item.url}>{item.title}</a>
                ))}
            </div>
            <Style>
                {`
                    .tabsContainer {
                        float: left;
                    }
                    
                    a {
                        width: 427px;
                        height: 33px;
                        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-size: 18px;
                        text-decoration: none;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.2;
                        letter-spacing: normal;
                        color: #ffffff;
                        padding: 20px;
                    }
                    
                    a:hover{
                        color:#15A2E1;
                    }
                `}
            </Style>
        </>
    )
}

export default Menu;