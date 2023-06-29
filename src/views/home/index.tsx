import GroupInputHome from "@components/group-input-home";
import NavBar from "@layoutStore/nav";
import TitleHead from "@layoutStore/title-head";



const PageHome = () => {
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<GroupInputHome></GroupInputHome>}</NavBar>
            this is home

        </>
    );
};

export default PageHome;