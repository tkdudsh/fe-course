import React from 'react';
import { Title, SubTitle } from '../commons/Titles.jsx';
import Categories from '../content/Categories.jsx';
import Projects from '../content/Projects.jsx';
import { useOutletContext } from 'react-router-dom';

export default function Work() {
    const data=useOutletContext();
    return (
        <section id="work" class="section container">
            <Title title="My Work" />
            <SubTitle subTitle="Projects" />
            <Categories categories={data?.work?.categories}/>
            <Projects projects={data?.work?.projects} />
        </section>
    );
}

