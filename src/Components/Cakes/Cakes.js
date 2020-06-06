import React, { Component } from 'react';
import unlike from './../../Images/unlike.png';
import like from './../../Images/like.png';
import './Cakes.css';
import axios from './../../axois';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Cakes extends Component {
  constructor(props) {

    super(props);
    this.state = {
      cakes: [],
      count: 0
    };
    this.getCakesData();
  }

  fetchMoreData = () => {
    if(this.state.cakes.length <= 30){
      setTimeout(() => {
        this.setState({
          cakes: this.state.cakes.concat(this.state.cakes)
        });
      }, 1500);
    } else{
      alert('All Product Finish')
    }
  };

  getCakesData() {
    axios
      .get(`/`, {})
      .then(res => {
        const cakes = res.data
        this.setState({
          cakes: this.state.cakes.concat(cakes)
        })
      })
      .catch((error) => {
        console.log(error)
      })

  }
  like(sku) {
    const cakeObj = this.state.cakes.find(x => x.sku === sku);
    const updatedCakeObj = {
      title: cakeObj.title,
      sku: cakeObj.sku,
      sellingPrice: cakeObj.sellingPrice,
      ratingCount: cakeObj.ratingCount,
      reviewCount: cakeObj.reviewCount,
      imgSrc: cakeObj.imgSrc,
      landingPage: cakeObj.landingPage,
      bestSeller: cakeObj.bestSeller,
      like: true,
    };
    this.updateCakes(sku, updatedCakeObj);
  }
  unlike(sku) {
    const cakeObj = this.state.cakes.find(x => x.sku === sku);
    const updatedCakeObj = {
      title: cakeObj.title,
      sku: cakeObj.sku,
      sellingPrice: cakeObj.sellingPrice,
      ratingCount: cakeObj.ratingCount,
      reviewCount: cakeObj.reviewCount,
      imgSrc: cakeObj.imgSrc,
      landingPage: cakeObj.landingPage,
      bestSeller: cakeObj.bestSeller,
      like: false,
    };
    this.updateCakes(sku, updatedCakeObj);
  }
  updateCakes(sku, updatedCakeObj) {
    return this.state.cakes.map((item, index) => {
      if (item.sku !== sku) {
        return item;
      }
      const updatedCakesState = [
        ...this.state.cakes.slice(0, index),
        updatedCakeObj,
        ...this.state.cakes.slice(index + 1)
      ];
      return this.setState({ cakes: updatedCakesState });
    });
  };
  render() {
    return (
      <div className="Cakes">
        <div className="container-fluid">
            <InfiniteScroll
              className="row"
              dataLength={this.state.cakes.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {this.state.cakes.map((cake, index) => (
                <div className="col-lg-4 col-md-3 col-sm-2 p-0 " key={index}>
                  <Card >

                    {cake.bestSeller ? (
                      <div className="bestSeller">best seller</div>

                    ) : (
                        <div></div>
                      )}

                    {cake.like ? (
                      <button className="likeButton btn btn-link" onClick={() => this.unlike(cake.sku)}> <Image src={like} className="likeImage" /></button>) :
                      (<button className="unlikeButton btn btn-link" onClick={() => this.like(cake.sku)}> <Image src={unlike} className="unlikeImage" /></button>)}


                    <Card.Img variant="top" src={cake.imgSrc} />
                    <Card.Body>
                      <a href={cake.landingPage} target="blank" >
                        <h5 className="text-center">{cake.title}</h5>
                        <h1 className="text-center">₹ {Math.round(parseInt(cake.sellingPrice) - (parseInt(cake.sellingPrice) * 15) / 100)}</h1>
                        <p className="text-center"><span className="discount">15%</span> ₹ <del>{cake.sellingPrice}</del></p>

                        <div className="rating">
                          <label className="reviewCount">{cake.reviewCount} Reviews</label>
                          <input type="radio" name="rating" value="5" id="5" />
                          <label htmlFor="5">☆</label>
                          <input type="radio" name="rating" value="4" id="4" />
                          <label htmlFor="4">☆</label>
                          <input type="radio" name="rating" value="3" id="3" />
                          <label htmlFor="3">☆</label>
                          <input type="radio" name="rating" value="2" id="2" />
                          <label htmlFor="2">☆</label>
                          <input type="radio" name="rating" value="1" id="1" />
                          <label htmlFor="1">☆</label>
                          <label className="ratingCount">{cake.ratingCount}</label>
                        </div>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </InfiniteScroll>
          </div>
      </div>
    )
  };
}

