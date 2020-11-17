import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework.'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among Engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'Blue'
    }
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};
const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />
    }
};
const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
};
const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />
    }
};



export default () => {
    return <div>
        {showAccordion()}
        {showList()}
        {showDropdown()}
        {showTranslate()}
    </div>
};




