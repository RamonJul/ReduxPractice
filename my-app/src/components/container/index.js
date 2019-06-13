import React, {Component} from  'react';
import {connect} from 'react-redux'
import {fetch} from './../../actions/fetch'

class Container extends  Component{

    componentDidMount(){
        this.props.fetch()
    }

render(){

    return(
            <div className="container">

            </div>
    )
}
}

const mapStateToProps=state=>({
    data:state.reducer.items
    //this will create a this.props.data from the state
})

export default connect(mapStateToProps,{fetch})(Container)