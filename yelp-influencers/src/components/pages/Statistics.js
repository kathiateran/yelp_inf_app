import React, {Fragment, useRef, useEffect} from 'react'


const { tableau }= window;

const Statistics = () => {

    const ref = useRef(null);
    
    const url = "https://public.tableau.com/views/Influencers_15937356512060/Dashboard1";

   
    function initViz(){
        new tableau.Viz(ref.current, url);
    }

    useEffect(()=> {
        initViz();
    }, []);


    return (
        <Fragment>
            <h6>Tableau Infographics</h6>
            <div ref={ref}></div>
        </Fragment>
    );
};


export default Statistics