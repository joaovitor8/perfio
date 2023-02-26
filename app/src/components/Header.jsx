import { Link } from "react-router-dom"


export const Header = () => {
  return(
    <div className="Header">
      <span> &lt;JV /&gt; </span>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
      </nav>
    </div>
  )
}
