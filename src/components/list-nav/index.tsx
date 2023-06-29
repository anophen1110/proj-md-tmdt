import { NavLink } from "react-router-dom"
const LinkList: { id: number; to: string; title: string }[] = [
    {
        id: 1,
        to: "/",
        title: "Home",
    },
    {
        id: 2,
        to: "/contact",
        title: "Contact",
    },
    {
        id: 3,
        to: "/about",
        title: "About",
    },
    {
        id: 4,
        to: "/signup",
        title: "Sign Up",
    },
];


const ListNav = () => {
    return (
        <div className='flex gap-x-10 font-normal leading-6 translate-x-10'>
            {LinkList.map((item: { id: number; to: string; title: string }, index: number) => (
                <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) =>
                        isActive
                            ? "border border-b-[#534949] border-t-transparent border-r-transparent border-l-transparent pb-2 transition-all"
                            : ""
                    }>
                    {item.title}
                </NavLink>
            ))}
        </div>
    );
};

export default ListNav;