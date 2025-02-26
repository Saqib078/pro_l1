import { Link } from "react-router"
const Home = () => {
  return (
    <>
    <div>
        <div>
            <Link to='/compone'>Compone</Link>
        </div>
        <div>
            <Link to='/compsec'>Compsec</Link>
        </div>
        <div>
            <Link to='/compthird'>Compthird</Link>
        </div>
        <div>
            <Link to='/compfour'>Compfour</Link>
        </div>
    </div>
    </>
  )
}

export default Home