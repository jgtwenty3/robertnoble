import { Link } from "react-router-dom";


const navItems = ["HOME", "ABOUT", "WRITINGS", "JOURNAL","CONTACT"];

const NavBar = () => {
  return (
    <div>
        <div className="flex justify-between md:justify-around p-2">
          {navItems.map((item,index)=>(
            <Link key = {index} to={`/${item === 'HOME' ? '' : item.toLowerCase()}`}  className="font-inconsolata text-black">
              {item}
            </Link>
          ))}
        </div>
    </div>
  )
}

export default NavBar