import React, { Component } from 'react';
import './App.css';
// import News from './News.js';
import Add from './Add.js';



class App extends Component {

    getInitialState() {
        return {
            news: [
                {
                    author: 'Саша Печкин',
                    text: 'В четчерг, четвертого числа...',
                    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
                },
                {
                    author: 'Просто Вася',
                    text: 'Считаю, что $ должен стоить 35 рублей!',
                    bigText: 'А евро 42!'
                },
                {
                    author: 'Гость',
                    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
                    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
                }
            ]
        }
    }


    componentDidMount() {
        // var self = this;
        // window.ee.addListener('News.add', function(item) {
        //     var nextNews = item.concat(self.state.news);
        //     self.setState({news: nextNews});
        // });
    }
    componentWillUnmount() {
        // window.ee.removeListener('News.add');
    }

    render() {
        console.log(this);
        return (
            <div ref='app' className="app">
                {/*<Add />*/}
                <h1>Новости:</h1>
                {/*<News data={this.state.news}/>*/}
            </div>
        );
    }
}

export default App;
