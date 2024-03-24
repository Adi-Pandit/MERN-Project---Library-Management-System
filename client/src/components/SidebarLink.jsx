import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"

const SidebarLink = ({ to, icon, text }) => {
    const location = useLocation()

    return (
        <Link
            to={to}
            className={`flex gap-2 rounded-md px-2 py-2 transition duration-300 ${location.pathname === to
                ? "bg-green-500 text-white"
                : "hover:bg-green-200 hover:text-gray-500"
                }`}
        >
            {icon}
            {text}
        </Link>
    )
}

SidebarLink.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
};

export default SidebarLink