import { Link } from "react-router-dom"

const linkStyle = {
    color: '#1746A2'
}


const HomePage = () => {
  return (
  <>
  <h1>Top TV</h1>
  <em>All about the smaller silver screen</em>
  <ul>
    <li>
        <Link to="shows" style ={linkStyle}>
            Explore Shows</Link>
    </li>
    <li>
        <Link to="search" style={linkStyle}>
            Explore Shows</Link>
    </li>
  </ul>
  </>
)
}

export default HomePage



