(window.webpackJsonp=window.webpackJsonp||[]).push([[1,2],{61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=a(5),l=a(65),n=(r=l)&&r.__esModule?r:{default:r},u=a(16);t.default=(0,o.connect)(function(e){return{products:e.product.products}},function(e){return{fetchProducts:function(){e((0,u.fetchProducts)())}}})(n.default)},64:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=a(5),l=a(69),n=(r=l)&&r.__esModule?r:{default:r},u=a(16);t.default=(0,o.connect)(function(e){return{defaultProd:e.product.defaultProduct,loading:e.loading}},function(t){return{saveProduct:function(e){t((0,u.saveProduct)(e))}}})(n.default)},65:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e};function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=u(a(0)),n=u(a(66));function u(e){return e&&e.__esModule?e:{default:e}}var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,l.default.Component),r(s,[{key:"componentDidMount",value:function(){console.log("Hello"),this.props.fetchProducts()}},{key:"render",value:function(){var e=this.props.products;return l.default.createElement("div",null,1<=e.length?e.map(function(e){return l.default.createElement(n.default,{product:e})}):l.default.createElement("p",null,"No Products to display"))}}]),s);function s(e,t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,t))}t.default=c},66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e};function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l,n=a(0),u=(l=n)&&l.__esModule?l:{default:l};var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,u.default.Component),r(s,[{key:"render",value:function(){var e=this.props.product;return u.default.createElement(u.default.Fragment,null,u.default.createElement("ul",{className:"product"},u.default.createElement("li",{onClick:this.showDetails},e.name,this.state.showDetails?u.default.createElement("ul",{className:"productDetails"},u.default.createElement("li",null,e.price),u.default.createElement("li",null,e.camera),u.default.createElement("li",null,e.ram),u.default.createElement("li",null,e.display),u.default.createElement("li",null,e.color)):"")))}}]),s);function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,t));return a.showDetails=function(){a.setState({showDetails:!a.state.showDetails})},a.state={showDetails:!1},a}t.default=c},69:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e};function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=u(a(0)),n=u(a(61));function u(e){return e&&e.__esModule?e:{default:e}}var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,l.default.Component),r(s,[{key:"componentWillReceiveProps",value:function(e){console.log("this - ",e),this.props.loading&&this.setState({name:this.props.defaultProd.name,price:this.props.defaultProd.price,camera:this.props.defaultProd.camera,ram:this.props.defaultProd.ram,display:this.props.defaultProd.display,color:this.props.defaultProd.color})}},{key:"render",value:function(){return l.default.createElement("section",{className:"componentClass"},l.default.createElement("div",{className:"form col-md-8"},l.default.createElement("div",{className:"col-md-12"},l.default.createElement("b",null,"Product Name"),l.default.createElement("input",{type:"text",className:"form-control col-md-6 pname",value:this.state.name,placeholder:"Product Name",onChange:this.captureValueFromTextBoxes})),l.default.createElement("div",{className:"col-md-12"},l.default.createElement("b",null,"Price "),l.default.createElement("input",{type:"number",className:"form-control col-md-6 price",value:this.state.price,placeholder:"Product Price",onChange:this.captureValueFromTextBoxes})),l.default.createElement("div",{className:"col-md-12"},l.default.createElement("b",null,"Camera "),l.default.createElement("input",{type:"text",className:"form-control col-md-6 camera",value:this.state.camera,placeholder:"Camera",onChange:this.captureValueFromTextBoxes})),l.default.createElement("div",{className:"col-md-12"},l.default.createElement("b",null,"RAM "),l.default.createElement("input",{type:"text",className:"form-control col-md-6 ram",value:this.state.ram,placeholder:"ram",onChange:this.captureValueFromTextBoxes})),l.default.createElement("div",{className:"col-md-12"},l.default.createElement("b",null,"Display "),l.default.createElement("input",{type:"text",className:"form-control col-md-6 display",value:this.state.display,placeholder:"Display",onChange:this.captureValueFromTextBoxes})),l.default.createElement("div",{className:"col-md-12"},l.default.createElement("b",null,"Color "),l.default.createElement("input",{type:"text",className:"form-control col-md-6 color",value:this.state.color,placeholder:"Color",onChange:this.captureValueFromTextBoxes})),l.default.createElement("input",{type:"button",className:"btn btn-primary col-md-3",value:"Save Product",onClick:this.saveProduct})),l.default.createElement("br",null),l.default.createElement(n.default,null))}}]),s);function s(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e,t));return r.captureValueFromTextBoxes=function(e){var t=e.target,a=t.classList.toString();0<=a.indexOf("pname")?r.setState({name:t.value}):0<=a.indexOf("price")?r.setState({price:parseInt(t.value)}):0<=a.indexOf("camera")?r.setState({camera:t.value}):0<=a.indexOf("color")?r.setState({color:t.value}):0<=a.indexOf("display")?r.setState({display:t.value}):r.setState({ram:t.value})},r.saveProduct=function(){r.props.saveProduct(r.state)},r.state={name:e.defaultProd.name,price:e.defaultProd.price,camera:e.defaultProd.camera,ram:e.defaultProd.ram,display:e.defaultProd.display,color:e.defaultProd.color},r}t.default=c}}]);