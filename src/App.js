import React, { Component } from 'react'
import shortid from 'shortid'
import mt from 'mersenne-twister'
import Typist from 'react-typist';

const gen = new mt()

const url = 'https://pichinose.imascg.moe'

const flip = () => Math.floor(gen.random() * 2)

class App extends Component {
  state = { index: flip() }

  componentDidMount = () => this.refs[`audio${this.state.index}`].play()

  componentDidUpdate = () => this.refs[`audio${this.state.index}`].play()

  render = () => {
    return (
     <div>
      {this.state.index === 0 ? (
        <Typist key={shortid.generate()} cursor={{ show: false }}>
          ぴちぴち！
          <Typist.Delay ms={500} />
          ぴちぴち！
        </Typist>
      ) : (
        <Typist key={shortid.generate()} cursor={{ show: false }}>
          ぴちぴち……
          <Typist.Delay ms={500} />
          ぴ
          <Typist.Delay ms={500} />
          ち……。
        </Typist>
      )}

      <input type='button' value='ぴちぴち！' onClick={() => this.setState({ index: flip() })} />

      <audio ref='audio0'>
        <source src={`${url}/pichinose1.mp3`} type='audio/mpeg' />
        お使いのブラウザではオーディオがサポートされてません。
      </audio>

      <audio ref='audio1'>
        <source src={`${url}/pichinose2.mp3`} type='audio/mpeg' />
        お使いのブラウザではオーディオがサポートされてません。
      </audio>
     </div>
    )
  }
}

export default App
