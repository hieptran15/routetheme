import React, { Component } from 'react';
import dl from './Data.json'; 
import NewsRelated from './NewsRelated';
class Newd extends Component {
    
    render() {
    //  var  x = 2;
    //  var y="2";
    //  y = parseInt(y,20);
    //  if(x===y){ console.log('bang nhau')}
    // console.log(typeof(y))
     //console.log(typeof(this.props.match.params.id));
      var dem =1;
        return (        
            <div>
                <div>
  <header className="masthead tintuc1">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content text-center mx-auto">
            <h1 className="mb-2">thông tin chi tiết</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  <div className="container">
    <div className="row mt-3">
      <div className="col-12">
      <div className="row">
     {
      dl.map((val,key) => {     
       //console.log(typeof(val.id))
          if(val.id == parseInt(this.props.match.params.id,20)){
            return (
              <div className="jumbotron" key={key}>   
              <a className="" href="/"> <img className="card-img-top" src={val.anh} alt="" /></a>
              <h3>{val.tieuDe}</h3>
              <p>{val.noiDung}</p>                         
            </div>
            )
          }
          
     })
     }
      </div> 
              <div className="row">
                {dl.map((val,key)=>{
                  if(dem<=4){
                    dem++;
                     return (
                    <NewsRelated 
                    key={key}
                    tinId={val.id}
                    anh={val.anh}
                    tieuDe={val.tieuDe}
                    noiDung={val.noiDung}
                   />               
                  )
                  }                
                })}
              </div>
  </div>
  {/* end  tintuc */}
</div>
            </div>
      </div> 
    </div>      
        );
    }
    
}

export default Newd;