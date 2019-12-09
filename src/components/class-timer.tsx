import * as React from 'react'
interface IState {
    time: Date
}

class ClassTimer extends React.Component<any, IState> {
    private timer: any;
    public state: IState = {
        time: new Date()
    };

    componentDidMount(): void {
        this.timer = setInterval(()=> {
            this.setState({time: new Date()});
        }, 1000)
    }

    componentWillUnmount(): void {
        clearInterval(this.timer);
    }

    render() {
        return <div>{this.state.time.toLocaleTimeString()}</div>
    }
}

export default ClassTimer;
