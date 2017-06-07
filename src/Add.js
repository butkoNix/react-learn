import React, {Component} from "react";
import ReactDOM from "react-dom";

class Add extends Component {
    getInitialState() { //устанавливаем начальное состояние (state)
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.author).focus();
    }

    onBtnClickHandler(e) {
        e.preventDefault();
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        var text = textEl.value;
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        // var bigText = ReactDOM.findDOMNode(this.refs.bigText).value;
        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];

        window.ee.emit('News.add', item);
        textEl.value = '';
        this.setState({textIsEmpty: true});
    }

    onCheckRuleClick(e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked}); //устанавливаем значение в state
    }

    onFieldChange(e) {
        var fieldName = e.target.name;
        var next = {};
        var isNotValid = Boolean(e.target.value.trim().length > 0);
        next[fieldName] = !isNotValid;
        this.setState(next);
    }

    render() {
        var agreeNotChecked = this.state.agreeNotChecked,
            authorIsEmpty = this.state.authorIsEmpty,
            textIsEmpty = this.state.textIsEmpty;
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    name="authorIsEmpty"
                    onChange={this.onFieldChange}
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    name="textIsEmpty"
                    onChange={this.onFieldChange}
                    placeholder='Текст новости'
                    ref='text'
                />
                <label className='add__checkrule'>
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
                </label>

                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
                >
                    Добавить новость
                </button>
            </form>
        );
    }
}

export default Add;
