import React, { useEffect, useState } from 'react'
import products from "../Data/products.json";
import Header from '../Components/Header';
import Container from 'react-bootstrap/Container';
import { category } from '../Category';
import Cart from './Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


const Main = () => {
    const [data, setData] = useState(products.products);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("products")) || []);
    const [input, setInput] = useState("");
    const [title, setTitle] = useState("Главное");
    
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cart));
    }, [cart]);

    const categoryClick = (text) => {
        const newList = products.products.filter((elem) =>
        elem.category === text);
        setData([...newList]);
        setTitle(text)
    };

    const addToCard = (id) => {
        const newList = products.products.find((elem) => elem.id === id);
        if(newList){
            alert("succes product")
        }
        setCart([...cart, newList]);
    };

    const deleteToCart = (index) => {
        console.log(index);
        const newList = cart.filter((elem, i) => i !== index);
        const conf = window.confirm("Are you sure you want to delete?");
        if(conf){
            setCart(newList)
        }
    };

    const searchClick = () => {
        console.log("input>>>", input);
        const newList = products.products.filter((elem) => elem.title.toLowerCase().
        indexOf(input.toLowerCase()) > -1);
        setData(newList);
    }
  return (
    <div>
      <Header
      category={category}
      categoryClick={categoryClick}
      input={input}
      setInput={setInput}
      searchClick={searchClick}
      />
      <Container>
        <Routes>
            <Route
            path='/'
            element={<Home data={data} addToCard={addToCard} title={title} />}
            />
            <Route path='/cart' element={<Cart cart={cart} deleteToCart={deleteToCart}  />} />
        </Routes>
      </Container>
    </div>
  )
}
export default Main