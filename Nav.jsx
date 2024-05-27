const setActive = ({ isActive }) =>(isActive ? "active" : "");
class Nav extends React.Component {
    render() {
        return (<nav style={{backgroundColor: "#a17856", paddingTop: 15, paddingBottom: 15}}>
            <NavLink to="/" className={setActive}>Главная</NavLink>
            <NavLink to="/info" className={setActive}>About City</NavLink>
            <NavLink to="/sight" className={setActive}>Sight</NavLink>
            <NavLink to="/otherSight" className={setActive}>Other Sight</NavLink>
            <NavLink to="/pictures" className={setActive}>Images</NavLink>
        </nav>);
    }
}
