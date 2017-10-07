import React from 'react';
import ReactDom from 'react-dom';
import request from 'superagent';
import '../style/index.less';
import ShowItemLists from './ShowItemLists';
import AddListItem from "./AddListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemLists: []
    }
  }

  getIndexOfItem(id){
    const itemLists = this.state.itemLists;
    return itemLists.indexOf(itemLists.find(item => item.id === id));
  }

  componentDidMount() {
    request.get('/api/todoitems')
      .end((err, res) => {
        if (err) {
          return;
        }
        this.setState({itemLists: res.body.items});
      })
  }

  addListItem (value){
    // request.post('http://192.168.30.11/todoitems')
    //   .send(value)
    //   .end((err, res)=>{
    //     if (err) {
    //       return err;
    //     }
    //
    //     this.state.itemLists.push(res.body.todoItem);
    //   })
  }

  updateListItem(id) {
    // request.put(`http://192.168.30.11/todoitems/${id}`)
    //   .end((err, res) => {
    //     if (err) {
    //       return err;
    //     }
    //
    //     this.state.itemLists.splice(this.getIndexOfItem(id), 1, res.body);
    //     this.setState({itemLists: this.state.itemLists});
    //   })
  }

  deleteListItem(id) {
    // request.delete(`http://192.168.30.11/todoitems/${id}`)
    //   .end((err, res) => {
    //     if (err) {
    //       return err;
    //     }
    //
    //     this.state.itemLists.splice(this.getIndexOfItem(id), 1);
    //
    //     this.setState({itemLists: this.state.itemLists});
    //   })
  }

  render() {
    return (
      <div className="col-lg-offset-1">
        <AddListItem addListItem={this.addListItem.bind(this)}/>
        <ShowItemLists itemLists={this.state.itemLists} updateListItem={this.updateListItem.bind(this)}/>
      </div>
    );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
