import React, {Component} from 'react';

export default class AddList extends Component {
  enterChange(e) {
    if (e.keyCode == 13) {
      let value = this.refs.input.value;
      if (!value) return false;

      this.props.addListItem(value);
      this.refs.input.value = '';
    }
  }

  render() {
    return (<div className="col-lg-7">
      <input type="text" ref="input" className="form-control" onKeyDown={this.enterChange.bind(this)}/>
    </div>)
  }
}