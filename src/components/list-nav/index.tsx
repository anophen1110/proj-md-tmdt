import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom"
const LinkList: { id: number; to: string; title: string }[] = [
    {
        id: 1,
        to: "/",
        title: "home",
    },
    {
        id: 2,
        to: "/contact",
        title: "contact",
    },
    {
        id: 3,
        to: "/about",
        title: "about",
    },
    {
        id: 4,
        to: "/signup",
        title: "signup",
    },
];


const ListNav = () => {
    const { t } = useTranslation();
    return (
        <div className='flex gap-x-10 font-normal leading-6 translate-x-24'>
            {LinkList.map((item: { id: number; to: string; title: string }, index: number) => (
                <NavLink
                    to={item.to}
                    key={item.id}
                    className={({ isActive }) =>
                        isActive
                            ? "border border-b-[#534949] border-t-transparent border-r-transparent border-l-transparent pb-2 transition-all"
                            : ""
                    }>
                    {t(item.title)}
                </NavLink>
            ))}
        </div>
    );
};

export default ListNav;