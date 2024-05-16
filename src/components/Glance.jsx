import React from 'react'
import "../styles/Glance.css"
import img1 from "./asset/msg-fr-dir-1.jpeg"
import img2 from "./asset/msg-fr-dir-2.jpeg"
import img3 from "./asset/msg-fr-dir-3.jpeg"

const Glance = () => {
    return (
        <div className='glance-body'>
            <div className='gl-he'>
                <div className="gl-he1">GLANCE</div>
                <div className="gl-he2">Get a glance of snapshots of our work.</div>
            </div>
            <div className="gl-corousel">
                <div className="gl-cr-1">
                    
                </div>
              
            </div>
        </div>
    )
}

export default Glance





{/* <div className="gl-corousel-box ">

<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>

</div>
<br/>
<div className="gl-corousel-box " style={{backgroundColor:"teal"}}>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>

</div>
<br/>
<div className="gl-corousel-box " style={{backgroundColor:"teal"}}>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>
<div className="card box one" style={{ width: "18rem" }}>
    <div className="box1">
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
    </div>
</div>

</div> */}