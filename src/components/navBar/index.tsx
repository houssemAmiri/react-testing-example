import React from "react";
interface IProps{
    items: {
        name: string;
        link: string
    } []
    
}
const NavBar = ({items}: IProps) =>(<div>
    {
        items.map((item)=><div key={item.link}>
            <a role="navigation" href={item.link}>{item.name}</a>
        </div>)
    }

</div>)
    

export default NavBar