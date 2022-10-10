import './App.css';
import Card from './component/Card';
import Nav from "./component/Nav.jsx";
import data from './component/mock';
import { useState } from 'react';


function App() {

  const [text,setText]  =useState('');

 const textdata=(val)=>{
      setText(val)
      
  }
  console.log(text)
const datas=data.filter((data)=>{
    return data.title.toUpperCase().indexOf(text.toUpperCase())>-1
})
  return (
    <div className="App">
        <Nav textdata={textdata}/>
        <div className='d-flex p-2 justify-content-center  flex-wrap'>

         {
       
              

        datas.map((item,index)=>{
              return(
                <Card key={index} item={item} text={text}/>
              )
            })
          }
        
        {/* <Card/><Card/><Card/><Card/><Card/> */}
        </div>
    </div>
  );
}

export default App;
