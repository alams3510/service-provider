import React from 'react'

const Card = ({item,text}) => {

   

        
  return (
    <>
        <div className="card m-2" style={{width: 500}}>
  <img src={item.link} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">If you are facing any trouble in this appliances then feel free to contact the expert mechanic, You can contact by clicking by below given button.</p>
    <a href="#" className="btn btn-primary">Contact </a>
  </div>
</div>
    </>
  )

}

export default Card