import React, {Component} from "react";
import Article from './Article.js';

class News extends Component {
    // propTypes: {
    //   data: React.PropTypes.array.isRequired
    // }
    getInitialState() {
        return {
            visitorCounter: 0
        };
    }

    increaseVisitorCounter(e) {
        e.preventDefault();
        this.setState({counter: ++this.state.visitorCounter});
    }

    render() {
        var data = this.props.data;
        var newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item}/>
                    </div>
                )
            })
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        return (
            <div className='news'>
                <a onClick={this.increaseVisitorCounter} href="#">Всего посещений: {this.state.visitorCounter}</a>
                {newsTemplate}
                <strong className={
                    'news__count' +
                    ' ' +
                    (data.length > 0 ? '' : 'none') }
                >
                    Всего новостей: {data.length}
                </strong>
            </div>
        );
    }
}

export default News;
