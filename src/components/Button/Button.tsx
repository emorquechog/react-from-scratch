import React from 'react';
type Props = {
    count: number;
}
const Button = ({ count }: Props) => (
    <h1>this is a title {count}</h1>
);

export default Button;