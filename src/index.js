import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wheelsurf from './wheelsurf'
import './index.css';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.ws = new Wheelsurf(this.ws)
  }
  start() {
    const { lock, onStart, onFinish } = this.props
    if (lock) return
    if (this.ws.isRotating) return
    const rotate = (deg, dur) => {
      this.ws.rotate(deg, dur, () => {
        onFinish && onFinish()
      })
    }
    onStart && onStart(rotate)
  }
  render() {
    const { outStyle, innerStyle, pointerStyle } = this.props
    return (
      <div className='cjx-container'>
        <div className='cjx-outTable' style={outStyle}>
          <div className='cjx-innerTable' style={innerStyle} ref={res => { this.ws = res }}></div>
          <div className='cjx-pointer' style={pointerStyle} onClick={this.start.bind(this)}></div>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  lock: PropTypes.bool,
  outStyle: PropTypes.object,
  innerStyle: PropTypes.object,
  pointerStyle: PropTypes.object,
  onStart: PropTypes.func,
  onFinish: PropTypes.func
}
Index.defaultProps = {
  lock: false,
  outStyle: {},
  innerStyle: {},
  pointerStyle: {},
  onStart: null,
  onFinish: null
}

export default Index;
