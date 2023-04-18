import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = { APIlist:[] }

  componentDidMount() {
    let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(resp => {
      let listOfEntries = resp.data.entries;
      console.log("listOfEntries: '" + listOfEntries.toString() + "'");
      let listOfEntriesAsArray = Object.entries(listOfEntries);
      let entryDetails = listOfEntriesAsArray.map((entryDetails) => {
        return <tr style={{color: "green", border: "1px solid black"}}>
          <th style={{ border: "1px solid black", textAlign: "left", color: "red" }}>{entryDetails[1]["API"]}</th>
          <th style={{ border: "1px solid black", textAlign: "left", color: "red" }}>{entryDetails[1]["Link"]}</th>
        </tr>
      })
      this.setState({APIlist:<table style={{ border: "1px solid black" }}>{entryDetails}</table>})
    })
    .catch(err => {
      console.log(err.toString())
    });
  }

  render() {
    const colorStyle = {
      color:this.props.color,
      fontSize:this.props.size+"px"
    }
    return (
      <div style={colorStyle}>
        <h2>APIs List</h2>
        <br/>
        <div>
          {
            this.state.APIlist
          }
          <p>Done</p>
        </div>
      </div>
    );
  }
}

export default App;
