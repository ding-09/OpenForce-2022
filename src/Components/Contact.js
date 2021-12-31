import React from 'react';
import './styles/Contact.css';
import ReactDOM from 'react-dom';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
        }
    }
 
 
  render() {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact Us</h2>
                            <p>Let us know what you think! In order to provide better service,
                                 please do not hesitate to give us your feedback. Thank you.</p><hr/>
                            <form id="contact-form"
                                method="POST">
                            <div className="form-group">
                            <div className="row">
                            <div className="col-md-6">
                                <input placeholder = "Name"  id="name" type="text" 
                                   className="form-control" required value={this.state.name} />
                            </div>
                            <div className="col-md-6">
                                <input placeholder = "Email"  id="email" type="email"
                                  className="form-control" aria-describedby="emailHelp"
                                  required value={this.state.email}/>
                            </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <input placeholder = "Subject"  id="subject" type="text"
                                  className="form-control" required value={this.state.subject}/>
                            </div>
                            <div className="form-group">
                                <textarea placeholder = "Message"  id="message" 
                                   className="form-control" rows="1" 
                                   required value={this.state.message}/>
                            </div>
                            <button type="submit" className="primary-btn submit">Submit</button>
                            </form>
                        </div>
                    </div>
 
                </div>
 
            </div>
        </div>
    );
  }
 
  }
export default Contact;