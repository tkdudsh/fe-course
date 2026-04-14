import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { fetchData } from './util.js/fetch';
import { useState,useEffect } from 'react';

export default function App() {
  const [data,setData]=useState({});
  useEffect(()=>{
    const loadData=async ()=>{
      const jsonData = await fetchData("http://localhost:5173/data/portfolio.json");
      setData(jsonData)

    }
    loadData();
  },[])

  console.log(data)

  return (
    <>
    <Header data={data.header}></Header>
    <Content></Content>
    <Footer></Footer>
    </>
  )
}
