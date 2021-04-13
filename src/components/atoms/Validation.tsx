import React from "react";

type Props = {
    display: string;
    color: string;
    text: string;
};

const Validation: React.FC<Props> = ({display, color, text}) => {
    return (
        <p
            style={{
                display: `${display}`,
                color: `${color}`,
                paddingTop: "1rem",
                textAlign: "center"}}
        >
            {text}
        </p>
    );
}

export default Validation;