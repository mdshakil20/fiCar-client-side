import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const UiLoader = () => {
    const { setUiLoaded, uiloaded } = useContext(AuthContext);
    return (
        <div>
            <div className="flex items-center justify-center space-x-2 h-screen">
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
            </div>
            <img
                style={uiloaded ? {} : { display: 'none' }}
                className=' mx-auto mt-6 -mb-2 z-0 '
                src={'https://i.ibb.co/5shFvnT/Group-9-1.png'}
                onLoad={() => setUiLoaded(true)}
            />
        </div>


    );
};

export default UiLoader;