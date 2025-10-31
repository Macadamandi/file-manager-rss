import { hostname } from "node:os";

const getUsername = () => {
    const userName = hostname();
    console.log(`System user name: ${userName}`);
};

export default getUsername;
