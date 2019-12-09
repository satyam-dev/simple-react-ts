import * as React from 'react';
interface IState {
    toggle?: boolean
}

class ClassToggle extends React.Component<IState>{

    public state: IState = {
        toggle: true
    };

    toggle = () => {
        this.setState({
            toggle : !this.state.toggle
        });
    };

    render() {
        return <button className="Button" onClick={this.toggle}>{this.state.toggle ? 'On' : 'Off'}</button>;
    }
}

export default ClassToggle;
