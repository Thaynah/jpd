import {MoonIcon, SunIcon} from '@heroicons/react/24/solid'
import { useEffect } from 'react';

const ToggleTheme = () => {
    const systemPreferences = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const pageClasses = document.documentElement.classList;

    useEffect(() => {
        systemPreferences && pageClasses.add('dark');
    });

    const toggle = () => {
        pageClasses.toggle('dark');
    }

    return <>
        <MoonIcon className='h-8 text-gray-500 block dark:hidden cursor-pointer' onClick={toggle}/>
        <SunIcon className='h-8 text-gray-500 hidden dark:block cursor-pointer' onClick={toggle}/>
    </>
}

export default ToggleTheme;