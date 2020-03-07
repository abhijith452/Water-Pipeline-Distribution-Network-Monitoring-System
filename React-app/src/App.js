import React, { Component } from 'react'

    class App extends Component {
   
      componentDidMount() {
        fetch('https://iotdata23.table.core.windows.net/Iotdata?sv=2019-02-02&ss=bfqt&srt=sco&sp=rwdlacup&se=2020-02-29T11:20:26Z&st=2020-02-29T03:20:26Z&spr=https&sig=WIL%2BBPZ6akcHwhssmOfzxXJes8KGdQWvVsY1Xz0a%2FlA%3D')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
    
    }