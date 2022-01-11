'use strict';

const hoge_e = React.createElement;

class HogeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hoge: false };
  }

  render() {
    if (this.state.hoge) {
      return this.props.commentID + 'hogehogehgoe hogehoge hogea.';
    }

    return hoge_e(
      'button',
      { onClick: () => this.setState({ hoge: true }) },
      'Hoge'
    );
  }
}

// const hogeDomContainer = document.querySelector('#hoge_button_container');
// ReactDOM.render(hoge_button_e(HogeButton), hogeDomContainer);

document.querySelectorAll('.hoge_button_container')
    .forEach(domContainer => {

    const commentID =  parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(hoge_e(HogeButton, {commentID:commentID}), domContainer);
    
});