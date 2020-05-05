import React, { Component } from 'react';
import { Redirect} from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state={
        isRedirect: false,
        fNgay:"thu4"
    }
  }
  isChange = (event) =>{
    const ten=event.target.name;
    const giatri=event.target.value;
     this.setState({
       [ten]: giatri
     });
  }
  isFileChange = (event) =>{
      const tenanh= event.target.files[0].name;
      this.setState({
        fAnh:tenanh
      })
      
  }
   subMitcontact=(event)=>{
     event.preventDefault();
      this.setState({
        isRedirect:true
      });
   }
   getGiatri= () =>{
     var noiDung="";
     noiDung+="ten nhan duoc la:"+ this.state.fName;
     noiDung+="/email nhan duoc la:"+ this.state.fMail;
     noiDung+="/phone nhan duoc la:"+ this.state.fPhone;
     noiDung+="/message nhan duoc la:"+ this.state.fMess;
     noiDung+="/ngày nhan duoc la:"+ this.state.fNgay;
     noiDung+="/anh nhan duoc la:"+ this.state.fAnh;
     return noiDung;
   }
    render() {
      if(this.state.isRedirect){
        console.log(this.getGiatri())
        return <Redirect to="/home" />
      }
        return (
            <div>
                <div>
  <header className="masthead tintuc1">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content text-center mx-auto">
            <h1 className="mb-2">Lien he</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin contact */}
  {/* Contact Section */}
  <section className="page-section" id="contact">
    <div className="container">
      {/* Contact Section Heading */}
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
      {/* Icon Divider */}
      <div className="divider-custom">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon">
          <i className="fas fa-star" />
        </div>
        <div className="divider-custom-line" />
      </div>
      {/* Contact Section Form */}
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Name</label>
                <input onChange={(event)=> this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Email Address</label>
                <input onChange={(event)=> this.isChange(event)} name="fMail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Phone Number</label>
                <input onChange={(event)=> this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Message</label>
                <textarea onChange={(event)=> this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>select date</label>
                 
                   <select value={this.state.fNgay} onChange={(event)=> this.isChange(event)} className="form-control" name="fNgay" >
                     <option value="thu2">thứ 2</option>
                     <option value="thu3">thứ 3</option>
                     <option value="thu4">thứ 4</option>
                     <option value="thu5">thứ 5</option>
                     <option value="thu6">thứ 6</option>
                     <option value="thu7">thứ 7</option>
                   </select>
                 
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label>select date</label>
                 
                  <input onChange={(event)=> this.isFileChange(event)} type="file" className="form-control-file" name="fAnh" />
                 
                <p className="help-block text-danger" />
              </div>
            </div>
            
            <br />
            <div id="success" />
            <div className="form-group">
              <button type="submit" onClick={(event)=> this.subMitcontact(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* end  contact */}
</div>

            </div>
        );
    }
}

export default Contact;