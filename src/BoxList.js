import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
    }

    removeBox(id) {
        //we cant access the key zatoa stavame dole id = {box.id}
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    addBox(newBox) {

        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
                id={box.id}
                key={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                delete={() => this.removeBox(box.id)} //cisto za primer so arrow function ince podobro .bind gore vo constructor
            />
        ))
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm addBox={this.addBox} />
                {boxes}
            </div>

        );
    }
}

export default BoxList;