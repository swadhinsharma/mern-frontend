import React  from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Api from '../Pages/Phonepages/Api'
// import Api from './Api'

const Searchitem = ({data}) => {
  const {term} = useParams()
  const [filterData, setFilterData]= useState([])
  useEffect(() => {
  const filteredData = () =>{
    const items = data.filter((p)=> p.brand.toLowerCase().includes(term.toLowerCase()));
    setFilterData(items)
  }
  filteredData();
  },[term]);
  return (
    <div>
      {/* <Navbar/> */}
      <Api data={filterData}/>
    </div>
  )
}

export default Searchitem
