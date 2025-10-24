import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<p><span className="loading loading-ring loading-xl"></span></p>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;