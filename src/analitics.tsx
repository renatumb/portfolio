import ReactGA from 'react-ga4';

export const initGA = () => {
    ReactGA.initialize('G-BH98CQL6G2');
    ReactGA.send({hitType: "pageview", page: window.location.pathname, title: "Renato Bonfim - Portfolio"});
    console.log( "GA ANALYTICS");
};


export const logEvent = (category: string, action: string, label: string) => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
