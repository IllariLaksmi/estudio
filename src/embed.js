import "./App.css";
import React from "react";
import * as typeformEmbed from '@typeform/embed'
import "@typeform/embed/build/css/widget.css";


class Series extends React.Component {
    componentDidMount(){
      const popup1 = typeformEmbed.createPopup('eenVetHr')
      document.getElementById('bt-popup').addEventListener('click', function(){
        popup1.toggle()
      })
    }
    render(){
      return (
        <div>
          <button id='bt-popup' className='my-button'>Click</button>
        </div>
      )

    }
}
export default Series;