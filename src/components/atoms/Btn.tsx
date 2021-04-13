import React from "react";
import {Link} from "react-router-dom";

type Props = {
    directory: string;
    text: string;
};

const Btn: React.FC<Props> = ({directory, text}) => {
    return (
            <Link
                className="btn"
                to={directory}
            >
                {text}
            </Link>
    );
}

export default Btn;