import React from 'react'
import { connect } from 'react-redux'
import { newMsg, newErrRateMsg } from '../../redux/actions'
import Table from 'rc-table'

import io from 'socket.io-client'
import projectConst from '../../../consts'

const socketPath = projectConst.serverPath
const socket = io.connect(socketPath)

const columns = projectConst.columns

class ShowContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    socket.on('msg', data => {
      dispatch(newMsg(data))
    })
    socket.on('errRateMsg', data => {
      dispatch(newErrRateMsg(data.dateTime))
    })
  }

  componentDidUpdate() {
    // console.log(getClientHeight(), getScrollTop(), getScrollHeight())
    document.body.scrollTop = getScrollHeight()
    const isBottom = getClientHeight() + getScrollTop() + 30 >= getScrollHeight() ? true : false
    if (isBottom) {
      setScrollTop(getScrollHeight() - getClientHeight())
    }
  }

  // onScrollHandle(event) {}

  render() {
    const { msgList } = this.props
    if (msgList === null || msgList === undefined) {
      return <div />
    }
    //ref={node => (this.contentNode = node)}
    return (
      <div>
        <div style={{ display: 'inline', float: 'left' }}>
          <div>
            {/* <Show msgList={msgList} /> */}
            <Table columns={columns} data={msgList} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  msgList: state.newMsg,
  errRateMsg: state.newErrRateMsg,
})

function getScrollTop() {
  if (!document.documentElement.scrollTop) {
    return document.body.scrollTop
  } else {
    return document.documentElement.scrollTop
  }
}

function getScrollHeight() {
  if (!document.documentElement.scrollHeight) {
    return document.body.scrollHeight
  } else {
    return document.documentElement.scrollHeight
  }
}

function getClientHeight() {
  if (!document.documentElement.clientHeight) {
    return document.body.clientHeight
  } else {
    return document.documentElement.clientHeight
  }
}

function setScrollTop(scrollTop) {
  if (!document.documentElement.scrollTop) {
    document.documentElement.scrollTop = scrollTop
  } else {
    document.documentElement.scrollTop = scrollTop
  }
}

export default connect(mapStateToProps)(ShowContainer)
