import { Button, IconButton, TextField } from '@mui/material/'
import { Assignment, Phone } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const App = () => {
    const [me, setMe] = useState('')
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState('')
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState('')
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    return <div className='App'>Hello</div>
}

export default App
