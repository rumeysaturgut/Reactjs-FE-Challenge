import React from 'react';
import { Style } from "react-style-tag";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Arama'
        }
    }

    handleFocus = (event) => {
        let input = event.target.value;
        if (input === 'Arama') {
            this.setState({
                value: ''
            })
        } else {
            this.setState({
                value: input
            })
        }
    }

    handleBlur = (event) => {
        let input = event.target.value;
        if (input === '') {
            this.setState({
                value: 'Arama'
            })
        } else {
            this.setState({
                value: input
            })
        }
    }

    render() {
        return (
            <>
                <div className="contSearch">
                    <input type="text" className="inputtext" value={this.state.value} onFocus={this.handleFocus} onChange={this.handleFocus} onBlur={this.handleBlur}/>
                    <button>
                        <img src="../images/searchicon.png" alt=" "/>
                    </button>
                </div>
                <Style>
                    {`
                        .contSearch{
                        height: 25px;
                        width: 210px;
                        border-bottom: 1px solid currentColor;
                        line-height: 0.8;
                        float: right;
                        }
                        
                        .contSearch button{
                        outline: none;
                        background-color: transparent;
                        border: 0px;
                        float: right;
                        cursor: pointer;
                        display: inline-block;
                        width: 10%;
                        }
                    
                        .contSearch .inputtext{
                        outline: none;
                        background: transparent;
                        border: none;
                        font-style: normal;
                        opacity: 0.7;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        font-size: 15px;
                        color: #ffffff;
                        display: inline-block;
                        width: 90%;
                        }
                    `}
                </Style>
            </>
        )
    }

}

export default Search;