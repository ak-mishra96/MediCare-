import React from 'react'

const Biography = ({image}) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img
          src={image}
          alt="img"
        />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
          neque libero incidunt possimus. Fugiat hic labore libero, facere quasi
          minima sed reprehenderit? Culpa ab ad assumenda architecto ducimus
          consequatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, eaque.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas nostrum obcaecati! Dolorem, atque minima. Animi repellat doloremque nulla doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui eveniet illo!</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </div>
  );
}

export default Biography

