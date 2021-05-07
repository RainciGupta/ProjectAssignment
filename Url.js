import React from "react";
export default class FetchRandomUser extends React.Component{
state={
loading: true
}
componentDidMount(){
const url="www.example.com/api/get/1 
";
cont response=fetch(url);
}
render(){
return <div>
{this.state.loading?<div>loding...</div>
</div>

}
}