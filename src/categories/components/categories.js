import React from 'react';
import Category from "./category";
import SearchContainer from '../../widgets/containers/search';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
      <SearchContainer />
      {
        props.categories.map((category) => {
          return <Category key={category.id} handleOpenModal={props.handleOpenModal} {...category} />
        })
      }
    </div>
  )
}

export default Categories;