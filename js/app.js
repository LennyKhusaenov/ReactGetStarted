var Comments = React.createClass({
    render: function () {
        return (
            <div className="comments">
                Нет новостей и комментировать нечего
            </div>
        );

    }
})


var News = React.createClass({
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if(data.length>0){
        newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                    <p className="news_author"><strong>{item.author}</strong></p>
                    <p className="news_description">{item.text}</p>
                </div>
            )
        })
        }else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }

        // console.log(newsTemplate);

        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length>0?'':'none'}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});

var my_news = [
    {
        author: 'Petr Pechkin',
        text: 'once uppon a time ...'
    },
    {
        author: 'Simple Vasya',
        text: 'wanna go fest ...'
    },
    {
        author: 'Guest',
        text: 'Free. Download. Best service - http://localhost:3000'
    }

];

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                Всем привет, я компонент App!Я умею отображать новости.
                <News data={my_news}/>{/*добавили свойство data */}
                <Comments />
            </div>
        );
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
