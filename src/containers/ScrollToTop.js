import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    // useEffect(() => {
    //     if (pageYOffset > 400) {
    //         setVisiblity(true);
    //     } else {
    //         setVisiblity(false);
    //     }
    // }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    // if (!visible) {
    //     return false;
    // }

    return (
        <>
            {/* {scrollToTop()} */}
        {/* <div
            className="scroll-to-top cursor-pointer text-center"
            // onClick={scrollToTop}
        >
            
            <svg style ={{color:'red'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" />
            </svg>
        </div> */}
        </>
    );
};

export default ScrollToTop;

