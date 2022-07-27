import React from "react";
import ContentLoader from 'react-content-loader'
import './loader.css'

function ToDoLoader (){
        return (
            <div className="LoaderCenter">
                <ContentLoader
                speed={2}
                width={900}
                height={400}
                backgroundColor="#000000e7"
                foregroundColor="#1b1b01bd"
            >
                <rect x="0" y="24" rx="4" ry="4" width="100%" height="72" />
                <rect x="0" y="120" rx="4" ry="4" width="100%" height="72" />
                <rect x="0" y="216" rx="4" ry="4" width="100%" height="72" />
                <rect x="0" y="312" rx="4" ry="4" width="100%" height="72" />
                </ContentLoader>
            </div>
        )
}
export { ToDoLoader };