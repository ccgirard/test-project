import * as React from "react";
import { Button } from "antd";
import 'antd/dist/antd.css';

export default class AntButton extends React.Component {
  // Set default properties
  static defaultProps = {
    width: 68,
    height: 32,
    label: "Label",
    type: "default",
    size: "default",
    icon: "",
    disabled: false,
    ghost: false,
    circle: false,
    onClick: () => {}
  };

  render() {
    const { label, type, size, icon, disabled, ghost, circle, onClick } = {
      ...this.props
    };
    const labeledButton = (
      <Button
        type={type}
        size={size}
        icon={icon}
        disabled={disabled}
        ghost={ghost}
        onClick={onClick}
        block={true}
      >
        {label}
      </Button>
    );
    const circledButton = (
      <Button
        type={type}
        size={size}
        icon={icon}
        disabled={disabled}
        ghost={ghost}
        onClick={onClick}
        shape="circle"
      />
    );

    return circle ? circledButton : labeledButton;
  }
}
