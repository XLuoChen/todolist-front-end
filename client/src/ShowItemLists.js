import React,{Component} from 'react';

export default class ShowListItems extends Component{
  updateListItem(id){
    this.props.updateListItem(id);
  }

  deleteListItem(id){
    this.props.deleteListItem(id);
  }

  render(){
    const itemLists = this.props.itemLists.map((item, index) => {
      return <li key={index} className="list-group-item list-item">
        <input type="checkbox" className="form-check-input" onChange={this.updateListItem.bind(this, item.id)}/>
        <span className="item-text">{item.text}</span>
        <button type="button" className="btn btn-danger" onClick={this.deleteListItem.bind(this, item.id)}>delete
        </button>
      </li>
    });

    return (
      <ul>
        {itemLists}
      </ul>
    )
  }
}