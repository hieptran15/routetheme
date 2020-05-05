import React, { Component } from 'react';
import Newsitem from './Newsitem';
import dl from './Data.json';

class News extends Component { 
    render() {
      // var so=[1,2,3,4,5,6];
      // var x=so.map((value ,key) =>value*2  + 'va chi so la:'+key);
      // console.log(x);
     
        return (
            <div>
                <div>
  <header className="masthead tintuc1">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content text-center mx-auto">
            <h1 className="mb-2">trang danh sách tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  <div className="container">
    <div className="row mt-3">

   { 
      dl.map((value,key)=>{
          return (
          <Newsitem  key={key}
          tinId={value.id}
          anh={value.anh} 
          tieuDe={value.tieuDe}
          noiDung={value.noiDung} />)
          })
    }
    
    </div>
  </div>
  {/* end  tintuc */}
</div>

            </div>
        );
    }
}

export default News;