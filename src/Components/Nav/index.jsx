import './index.css';
 
const Nav = ({ prev, next, setCurrentPage }) => {
    const navigate = (page) => {
        if (page) {
            setCurrentPage(page)
        }
    }
    return (
        <div className={"nav"}>
            <button className="prev" onClick={ () => navigate(prev) }>Prev</button>
            <button className="next" onClick={ () => navigate(next) }>Next</button>
        </div>
    )
}

export default Nav;