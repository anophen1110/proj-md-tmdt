import GroupInputHome from "@components/group-input-home";
import NavBar from "@layoutStore/nav";
import TitleHead from "@layoutStore/title-head";
import { useTranslation } from "react-i18next"


const PageHome = () => {
    const {t} = useTranslation()
    return (
        <>
            <TitleHead></TitleHead>
            <NavBar>{<GroupInputHome></GroupInputHome>}</NavBar>
            {t('login')} <br />
            {t('Already')} <br />
            {t('okBaybi')}
        </>
    );
};

export default PageHome;