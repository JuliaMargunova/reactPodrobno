import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UnvontrolledRating} from "./components/UnvontrolledRating/UnvontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type StarType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
    const [isOn, setOn] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<StarType>(3)
    const [collapsed, setCollapsed]= useState<boolean>(true)
    return (
        <div className={'app'}>
            <UnvontrolledRating/>
            <UncontrolledAccordion title={'Julia syper'}/>
            <UncontrolledOnOff/>
            <PageTitle title="App Title"/>
            Article 1
            <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)} />
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*Article 2
            <Accordion title={"Menu"} collapsed={true}/>*/}
            {/* <Rating value={5}/>*/}
            <OnOff isOn={isOn} setOnHandler={setOn}/>
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
