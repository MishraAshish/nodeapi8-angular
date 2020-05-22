"use strict"
import React from "react";
import DisplayProductsComponent from "../../Container/Product/DisplayProductsContainer";

export default class ProductComponent extends React.Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            name : props.defaultProd.name,
            price : props.defaultProd.price,
            camera : props.defaultProd.camera,
            ram : props.defaultProd.ram,
            display : props.defaultProd.display,
            color : props.defaultProd.color
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("this - ", nextProps);
        if (this.props.loading) {
            this.setState({
                name :this.props.defaultProd.name,
                price : this.props.defaultProd.price,
                camera : this.props.defaultProd.camera,
                ram : this.props.defaultProd.ram,
                display : this.props.defaultProd.display,
                color : this.props.defaultProd.color
            })
        }
    }

    captureValueFromTextBoxes = (evt) =>{
        let target = evt.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("pname")>=0){
            this.setState({
                name: target.value
            })
        }else if(classlist.indexOf("price")>=0){
            this.setState({
                price: parseInt(target.value)
            })
        }else if(classlist.indexOf("camera")>=0){
            this.setState({
                camera: target.value
            })
        }else if(classlist.indexOf("color")>=0){
            this.setState({
                color: target.value
            })
        }
        else if(classlist.indexOf("display")>=0){
            this.setState({
                display: target.value
            })
        }
        else{
            this.setState({
                ram: target.value
            })    
        }
    }

    saveProduct = ()=>{
        this.props.saveProduct(this.state);
    }

    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 pname" value={this.state.name} 
                            placeholder="Product Name"
                            onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6 price" value={this.state.price} 
                          placeholder="Product Price"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Camera </b>
                    <input type="text" className="form-control col-md-6 camera" value={this.state.camera} 
                          placeholder="Camera"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>RAM </b>
                    <input type="text" className="form-control col-md-6 ram" value={this.state.ram} 
                          placeholder="ram"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>

                    <div className="col-md-12">
                        <b>Display </b>
                    <input type="text" className="form-control col-md-6 display" value={this.state.display} 
                          placeholder="Display"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>

                    <div className="col-md-12">
                        <b>Color </b>
                    <input type="text" className="form-control col-md-6 color" value={this.state.color} 
                          placeholder="Color"
                          onChange={this.captureValueFromTextBoxes} />
                    </div>
                    
                    
                    <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={this.saveProduct}/>
                </div>
                
                <br/>
                
                <DisplayProductsComponent />
            </section>
        )
    }
}