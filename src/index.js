import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Wheelsurf from './wheelsurf'

class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.ws = new Wheelsurf(this.ws)
  }
  start() {
    const { lock, onStart } = this.props
    if (lock) return
    const rotate = (deg, dur) => {
      this.ws.rotate(deg, dur, () => {
        // console.log(`转盘旋转结束`)
        this.props.onFinish && this.props.onFinish()
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
