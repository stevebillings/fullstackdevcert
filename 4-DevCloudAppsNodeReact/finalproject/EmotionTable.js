import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      let tableBody = getTableBody(this.props.emotions);
      //Returns the emotions as an HTML table
      // return <div>{tableBody}</div>;
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
              {tableBody}
            </tbody>
          </table>
          </div>
          );
        }
    
}

function getTableBody(emotions) {
    return Object.entries(emotions).map((mapentry) => {
        return <tr><th>{mapentry[0]}</th><th>{mapentry[1]}</th></tr>;
    });
}
export default EmotionTable;

