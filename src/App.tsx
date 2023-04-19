import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    const [isOnOff, setOnOff] = useState<boolean>(false)
    return (
        <div>
            <PageTitle title="App Title"/>
            Article 1
            <Accordion title={"Menu"} collapsed={true}/>
            <Rating value={1}/>
            Article 2
            <Accordion title={"Menu"} collapsed={true}/>
            <Rating value={5}/>
            <OnOff/>
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
