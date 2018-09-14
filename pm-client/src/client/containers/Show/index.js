import React from 'react'
import { connect } from 'react-redux'
import { newMsg, newErrRateMsg } from '../../redux/actions'
import Table from 'rc-table'

import io from 'socket.io-client'
import projectConst from '../../../consts'

import 'rc-table/assets/index.css'
import '../../../../assets/mycss.css'

const socketPath = projectConst.serverPath
const socket = io.connect(socketPath)

const columns = projectConst.columns
const sumColumns = projectConst.sumColumns
const warnColumns = projectConst.warnColumns
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
    return (
      <div>
        <div style={{ display: 'inline', float: 'none' }}>
          <div>
            <Table rowClassName="warnRow" columns={warnColumns} data={msgList.warnMsg} scroll={{ x: false, y: projectConst.warnTableHeight || false }} />
          </div>
        </div>

        <div style={{ display: 'inline', float: 'none' }}>
          <div>
            <Table columns={columns} data={msgList.msg} scroll={{ x: false, y: projectConst.msgHeight || false }} />
          </div>
        </div>

        <div style={{ display: 'inline', float: 'none' }}>
          <div>
            <Table columns={sumColumns} data={msgList.sumMsg} scroll={{ x: false, y: projectConst.logHeight || false }} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    msgList: state.newMsg,
    errRateMsg: state.newErrRateMsg,
  }
}

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
