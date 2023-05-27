import React,{useEffect, useState} from "react";
import axios from "axios";
import DashboardTable from "../Components/Tables/DashTables";

export const getOrders = () => {
    return fetch ("https://dummyjson.com/carts/1").then((res)=> res.json())
} 

export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json())
  };

export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  }; 

export const getUsers = () => {
   return fetch('https://dummyjson.com/users').then(res => res.json());
}

