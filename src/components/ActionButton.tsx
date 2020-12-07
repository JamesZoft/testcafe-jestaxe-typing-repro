import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  
  &:hover {
    background-color: ${(props) => props.theme.button.invertColour};
  }
  cursor: pointer;
`;

interface ActionButtonWithChildrenProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface ActionButtonWithLabelProps extends HTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
}

type ActionButtonProps = ActionButtonWithChildrenProps | ActionButtonWithLabelProps;

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return <Button {...otherProps}>{children}</Button>;
};

export default ActionButton;
