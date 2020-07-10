import React from 'react';

function Testimonials({ actions, testimonials }) {
    React.useEffect(() => {
        actions.fetchTestimonials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            Testimonials
        </div>
    );
}

export { Testimonials };
