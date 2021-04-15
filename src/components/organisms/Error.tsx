import React from 'react';

type Props = {
    error: string;
};

const Error: React.FC<Props> = ({error}) => {
    return(
        <div className="error">
            <h2>{error}</h2>
        </div>
    );
}

export default Error;