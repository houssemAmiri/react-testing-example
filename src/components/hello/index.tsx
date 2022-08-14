import React from 'react'

interface IProps {
    name: string
}
const Hello = ({name}: IProps)=>(<div role="information">Hello, my name is {name}</div>)
export default Hello