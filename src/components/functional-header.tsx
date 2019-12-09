import * as React from 'react';

interface IProps {
    name?: string;
}

const FunctionalHeader: React.FC<IProps> = (props: IProps) => (
    <h1 className="Background">This is a {props.name}!</h1>
);

FunctionalHeader.defaultProps = {
    name: 'world',
};

export default FunctionalHeader;
