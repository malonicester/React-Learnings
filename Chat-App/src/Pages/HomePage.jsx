import React, { useMemo } from 'react';
import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const HomePage = () => {
  const socket = useMemo(() => io.connect(`http://localhost:4000`));

  const [me, setMe] = useState("");
  const [stream, setStream] = useState("");
  const [recieveingCall, setRecieveingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();


  // useEffect(() => {
  //   navigator.mediaDevices.getUserMedia({
  //     video: true,
  //     audio: true
  //   }).then((stream) => {
  //     setStream(stream);
  //     myVideo.current.srcObject = stream


  //     socket.on('me', (id) => {
  //       setMe(id);
  //     });

  //     socket.on('callUser', (data) => {
  //       setRecieveingCall(true);
  //       setCaller(data.from);
  //       setName(data.name);
  //       setCallerSignal(data.signal);
  //     })
  //   })
  // }, [])

  // const callUser = (id) => {
  //   const peer = new Peer({
  //     initiator: true,
  //     trickle: false,
  //     stream: true
  //   })

  //   peer.on('signal', (data) => {
  //     socket.emit('callUser', {
  //       userToCall: id,
  //       signalData: data,
  //       from: me,
  //       name: name
  //     })
  //   })

  //   peer.on('stream', (stream) => {
  //     userVideo.current.srcObject = stream;
  //   })

  //   socket.on('callAccepted', (signal) => {
  //     setCallAccepted(true);
  //     peer.signal = signal;
  //   })

  //   connectionRef.current = peer;
  // }


  // const answerCall = () => {
  //   setCallAccepted(true);
  //   const peer = new Peer({
  //     initiator: false,
  //     trickle: false,
  //     stream: stream
  //   })

  //   peer.on('signal', (data) => socket.emit('answerCall', {
  //     signal: data,
  //     to: caller
  //   }))

  //   peer.on('stream', (stream) => {
  //     userVideo.current.srcObject = stream;
  //   })

  //   peer.signal(callerSignal);
  //   connectionRef.current = peer;
  // }

  // const leaveCall = () => {
  //   setCallEnded(true);
  //   connectionRef.current.destroy();
  // }

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center', color: 'fff' }}  >Zoomish</h1>
      <div className="video">
        {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: '300px' }} />}
      </div>
      <div className="video">
        {callAccepted && !callEnded ? <video playsInline ref={userVideo} autoPlay style={{ width: '300px' }} /> : null}
      </div>
    </div>
  )
}

export default HomePage