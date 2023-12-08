import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/page/2">Page 2</Link>
            <Link to="/tinder">Tinder</Link>
            <Link to="/iceberg">IcebergGame</Link>
        </div>
    )
}

export default Header;