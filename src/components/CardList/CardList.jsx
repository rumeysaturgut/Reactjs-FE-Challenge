import React from 'react';
import { Style } from "react-style-tag";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFav: true
        }
    }

    toggleFavorite = (item) => {
        var contents = getItemLS("favorites");
        var hasAdded = false;
        if (contents) {
            hasAdded = contents.some(function(content){
                return content.id === item.id;
            })
        }
        var plus = document.getElementById("favoriteButton"+(item.id-1));
        if(hasAdded) {
            console.log("kaldır");
            removeFavorites(item);
        } else {
            addFavorites(item);
        }
        plus.classList.toggle("added")
        contents = getItemLS("favorites");
        this.props.arrivalData(contents);
    }

    render() {
        const {items, name} = this.props;
        return (
            <>
                <div className="row">
                    <h3>{name}</h3>
                    {items.map((item, index) => (
                            <div className="columns" key={index}>
                                <img src={"/images/" + item.image} alt=" "/>
                                <div className="modal">
                                    <p>
                                        {item.title}
                                        <br/>
                                        <b>{new Date(item.published_date).getFullYear()}</b>
                                    </p>
                                    <div className="plus" id={"favoriteButton"+index} onClick={() => this.toggleFavorite(item)}>+</div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <Style>
                    {`
                    .row {
                    margin: 0 auto;
                    text-align: center;
                    margin-left: -10px;
                    margin-right: -10px;
                    font-size: 0;
                    }

                    h3 {
                    font-size: 40px;
                    color: white;
                    padding-left: 10px;
                    padding-right: 10px;
                    width: 114px;
                    height: 49px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.2;
                    letter-spacing: normal;
                    text-align: center;
                    }

                    .columns{
                    display: inline-block;
                    position: relative;
                    width: 270px;
                    height: 385px;
                    margin:0 auto;
                    line-height: 1.2;
                    font-size: 0px;
                    margin-left: 10px;
                    margin-right: 10px;
                    margin-bottom: 20px;
                    box-sizing: border-box;
                    }

                    .columns:hover .modal{
                    display: block;
                    }

                    .columns img{
                    width: 260px;
                    height: 385px;
                    position: relative;
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    margin: 0px 0px;
                    }

                    .modal{
                    background-color: rgba(0, 0, 0, 0.75);
                    display: none;
                    position: absolute;
                    right: 0px;
                    top:0px;
                    left: 0px;
                    bottom: 0px;
                    }

                    .modal p{
                    position: absolute;
                    bottom: 5px;
                    left: 40px;
                    width: 180px;
                    height: 82px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 22px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.2;
                    letter-spacing: normal;
                    text-align: left;
                    color: #ffffff;
                    }

                    .modal .plus{
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    color: white;
                    font-size: 32px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    width: 40px;
                    height: 40px;
                    line-height: 35px;
                    border-radius: 50%;
                    border: solid 1px white;
                    text-align: center;
                    overflow: hidden;
                    font-weight: bold;
                    background-color: transparent;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    transition: .3s;
                    }

                    .modal .plus.added {
                    transform: rotate(45deg);
                    background-color: #15A2E1;
                    }
                `}
                </Style>
            </>
        );
    }
}

function addFavorites(content) {
    var contents = localStorage.getItem("favorites");
    if(!getItemLS("favorites")){
        setItemLS("favorites", [content]);
    } else {
        contents = JSON.parse(contents);
        contents.push(content);
        setItemLS("favorites", contents);
    }
}
function removeFavorites(content) {
    var contents = getItemLS("favorites");
    for(var i=0; i<contents.length; i++){
        if(content.id === contents[i].id) {
            contents.splice(i,1);
        }
    }
    setItemLS("favorites", contents)
}
function getItemLS(key){
    return JSON.parse(localStorage.getItem(key));
}
function setItemLS(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

export default CardList;