import * as React from 'react';

interface IProps {
    text?: string;
}

class ClassFooter extends React.Component<IProps> {

    public static defaultProps: Partial<IProps> = {
        text: 'Some footer text',
    };

    public render() {
        return (
           <h1 className="Background">So this footer is a {this.props.text}</h1>
        );
    }
}

export default ClassFooter;
