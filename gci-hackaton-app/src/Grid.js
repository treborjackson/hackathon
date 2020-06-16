import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    listOFCommittees: null,
      columnDefs: [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Description", field: "desc" },
        { headerName: "LOB", field: "lob" },
        { headerName: "Sub LOB", field: "sublob" }]
    }
  }

  componentDidMount() {
    // Simple GET request using fetch
        const headers = { 'Content-Type': 'application/json', 'mode': "no-cors" }
        fetch('https://tr8k8hwxie.execute-api.us-east-2.amazonaws.com/default/ffigetinventories', { headers })
            .then(response => response.json())
            .then(data => this.setState({ listOFCommittees: data }));
}

  render() {
    console.log('list: ', this.state.listOFCommittees);
    return (
      <div className="ag-theme-bootstrap" style={ {height: '200px'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.listOFCommittees}>
        </AgGridReact>
      </div>
    );
  }
}

export default Grid;
