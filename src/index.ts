
import * as Peer from 'simple-peer';

const peer = new Peer({
  initiator: location.hash === '#init',
  trickle: false
})

const yourId = (<HTMLInputElement>document.getElementById('yourId'))
const otherId = (<HTMLInputElement>document.getElementById('otherId'))
const messages = (<HTMLInputElement>document.getElementById('messages'))
const yourMessage = (<HTMLInputElement>document.getElementById('yourMessage'))
const connectBtn = (<HTMLButtonElement>document.getElementById('connect'))
const sendBtn = (<HTMLButtonElement>document.getElementById('send'))

peer.on('signal', data => {
  yourId.value = JSON.stringify(data)
})
peer.on('data', data => {
  messages.textContent += data + '\n'
})

connectBtn.addEventListener('click', e => {
  peer.signal(JSON.parse(otherId.value))
})

sendBtn.addEventListener('click', () => {
  peer.send(yourMessage.value)
  console.log(yourMessage.value)
})

