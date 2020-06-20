import React, { useState }  from 'react'
import Navigation from '../components/navigation/navigation';

export default function Layout() {

    const [expanded, setExpanded] = useState(false);

    const toggleNavigation = () => {
        console.log("toggleNavigation")
        const oldValue = expanded;
        setExpanded(!oldValue);
    }

    return (
        <div>
            <Navigation expanded={expanded} toggleNavigation={toggleNavigation}/>
            <main className={`layout-container${expanded ? '-expanded' : ''}`}>
                hello
            </main>
        </div>
    )
}
