import React from 'react';
import './Interface.css';
import Node from '../Node/Node'

export default class Interface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    const nodes = []
    for(let row = 0; row < 15; row++) {
      const currentRow = [];
      for(let col = 0; col < 50; col++) {
        currentRow.push([]);
      }
      nodes.push(currentRow);
    }
    this.setState({nodes});
  }

  render() {
    const {nodes} = this.state;
    return(
      <div className="grid">
        {nodes.map((row, rowIndex) => {
          return <div>
            {row.map((node, nodeIndex) => <Node />)}
          </div>
        })}
      </div>
    );
  }
}
