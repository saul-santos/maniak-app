import React from "react";
import { Testimonial as View } from "./testimonial.jsx";

function Testimonial() {
    async function getData() {
        const response = await fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json');
        const data = await response.json();

        console.log(data)
    }

    React.useEffect(() => {
        getData();
    });

    return <View />;
}

export { Testimonial };