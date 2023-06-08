import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";

export type StarType = 0 | 1 | 2 | 3 | 4 | 5;

function App() {
    const [isOn, setOn] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<StarType>(3)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const items = [
        {title: 'item1', value: '1'},
        {title: 'item2', value: '2'},
        {title: 'item3', value: '3'},
        {title: 'item4', value: '4'},
        {title: 'item5', value: '5'}]

    function onChangeOnOff() {

    }
    function setTitle(value:any){

    }

    return (
        <div className={'app'}>
            <UncontrolledRating onChange={()=>{}} />
            <UncontrolledAccordion title={'Julia syper'}/>
            <UncontrolledOnOff onChange={onChangeOnOff}/>
            <PageTitle title="App Title"/>
            Article 1
            <Accordion title={"Menu"} collapsed={collapsed} items={items} onClick={setTitle}
                       setCollapsed={() => setCollapsed(!collapsed)}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<Select value={"item1"} items={items} />*/}
            <Select items={items} value={'1'} title={'Menu'} onClick={()=>{}}/>
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
