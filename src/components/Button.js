import React from "react";
import { Button } from "antd";

import 'antd/dist/antd.css';

const ButtonPrimary = (props) =>{
    return(
        <Button type="danger">{props.text}</Button>
    )
}

export default ButtonPrimary;