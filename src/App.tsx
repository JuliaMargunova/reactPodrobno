import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title="App Title"/>
            Article 1
            <Accordion title={"Menu"} collapsed={true}/>
            <Rating value={1}/>
            Article 2
            <Accordion title={"Menu"} collapsed={true}/>
            <Rating value={5}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (<h1>{props.title}</h1>);
}

export default App;
