import React from 'react';
import CardList from '../CardList/CardList';
import Menu from '../Menu/Menu';
import Search from "../Search/Search";
import Headline from "../Headline/Headline";
import "./App.css";
import { Style } from "react-style-tag";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            series: [],
            tabs: [],
            text1: '',
            text2: '',
            favorites: []
        }
    }

    componentDidMount() {
        fetch("https://dtv-projects.firebaseio.com/sections.json")
            .then(res => res.json())
            .then(response => {
                this.setState({
                    movies: response[0].data,
                    series: response[1].data
                })
            })
            .catch(err => console.log('fetch request failed: ', err))

        fetch("https://dtv-projects.firebaseio.com/menu.json")
            .then(res => res.json())
            .then(result => this.setState({tabs: result}))
            .catch(err => console.log('fetch request failed: ', err))

        this.setState({
            text1: "LOREM IPSUM",
            text2: "DOLOR SIT AMET"
        })
    }

    myCallback = (dataFromChild) => {
        this.setState({ favorites: dataFromChild });
    }

    render() {
        const { movies, series, tabs, text1, text2, favorites } = this.state;
        //const favoritesSection = favorites.length>2 ? <CardList items={favorites} name="Favorilerim" arrivalData={this.myCallback}></CardList> : null;
        return(
            <>
                <div className="container">
                    <div className="menuCol">
                        <Menu items={tabs}></Menu>
                        <Search></Search>
                    </div>
                    <Headline title1={text1} title2={text2}></Headline>
                    {(() => {
                        if (favorites.length > 2) {
                            return <CardList items={favorites} name="Favorilerim" arrivalData={this.myCallback}></CardList>;
                        }
                    })()}
                    <CardList items={movies} name="Filmler" arrivalData={this.myCallback}></CardList>
                    <CardList items={series} name="Diziler" arrivalData={this.myCallback}></CardList>
                </div>

                <Style>
                    {`
                    .container {
                        margin: 0 auto;
                        width: 1140px;
                      }
                      
                      .menuCol {
                        height: 33px;
                        font-family: OpenSans;
                        font-size: 24px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.2;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffffff;
                        position: relative;
                        margin-top: 20px;                       
                      }
                      
                      body{
                        overflow-x: hidden;
                        margin: 0;
                        background-image: url('/images/Bg.png');
                        background-color: black;
                        background-repeat: no-repeat;
                        background-size: 100%;
                      }
                    `}
                </Style>
            </>

        )
    }
}

export default App;

