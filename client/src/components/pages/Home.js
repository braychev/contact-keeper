import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = props => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (localStorage.token) {
            authContext.loadUser();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter></ContactFilter>
                <Contacts />
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
