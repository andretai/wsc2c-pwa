import React, { Component } from 'react';

export default class Whatsapp extends Component {
  state = {
    number: '',
    message: ''
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    // CSS
    const div = "mx-6 font-hairline";
    const guide_title = "capitalize font-semibold text-center text-red-500";
    const guide_list = "list-decimal mx-3 my-6 text-justify text-sm";
    const input_labels = "font-semibold text-gray-700 text-sm";
    const input_boxes = "block w-full my-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500";
    const button = "w-1/2 mx-auto my-6 px-2 py-1 bg-green-500 border border-gray-200 rounded-full shadow-sm text-white text-center"
    return (
      <div>
        <div className={div}>
          {/* Guide */}
          <p className={guide_title}>important</p>
          <ol className={guide_list}>
            <li>
              <p>Number must be in international format without the plus '+' or hashes '-'.</p>
            </li>
            <li>
              <p>Message can be left blank.</p>
            </li>
            <li>
              <p>Consider adding us to Home screen for a better experience and data usage.</p>
            </li>
          </ol>
          {/* Form */}
          <label htmlFor="number" className={input_labels}>Phone Number</label>
          <input type="text" 
            id="number" 
            name="number" 
            placeholder="E.g. 60123456789"
            value={this.state.number}
            onChange={this.onChange}
            className={input_boxes}></input>
          <label htmlFor="message" className={input_labels}>Message</label>
          <textarea type="text" 
            id="message" 
            name="message" 
            placeholder="Write your message here..."
            value={this.state.message}
            onChange={this.onChange}
            className={input_boxes} style={{ height: '150px' }}></textarea>
          <div className={button}>
            <a href={`https://wa.me/${this.state.number}?text=${this.state.message}`} target="_blank" rel="noopener noreferrer">Send via WhatsApp</a>
          </div>
        </div>
      </div>
    )
  }
}

