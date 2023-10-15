import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const [isGridView, setGridView] = useState(false);

  const toggleView = () => {
    setGridView(!isGridView);
  };

  return (
    <div className={`data-view ${isGridView ? 'grid-view' : 'list-view'}`}>
      <h2>{isGridView ? 'Grid View' : 'List View'}</h2>
      <div className={isGridView ? 'grid-container' : 'list-container'}>

          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
          <div className={isGridView ? 'grid-item' : 'list-item'} >
            hello
          </div>
      </div>
      <button onClick={toggleView}>Toggle View</button>
    </div>
  );
};

export default Table;
