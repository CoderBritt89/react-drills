import React, {Component} from 'react';

class Image extends Component {  //Child component passing in props from the URL in app.js




render (){
return (
    <div>
        <img src={this.props.url}/> 
    </div>
)


}    
}

export default Image;