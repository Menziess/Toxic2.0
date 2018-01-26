

// var DHT = require('bittorrent-dht')
// // var magnet = require('magnet-uri')

// var uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157'
// var parsed = magnet(uri)

// console.log(parsed.infoHash) // 'e3811b9539cacff680e418124272177c47477157'

// var dht = new DHT()

// dht.listen(20000, function () {
//   console.log('now listening')
// })

// dht.on('peer', function (peer, infoHash, from) {
//   console.log('found potential peer ' + peer.host + ':' + peer.port + ' through ' + from.address + ':' + from.port)
// })

// // find peers for the given torrent info hash
// dht.lookup(parsed.infoHash)





// var SimplePeer = require('simple-peer')

// const peer1 = new SimplePeer({ initiator: true })
// console.log(peer1)

// peer1.on('signal', data => {

// })





// var peer1 = new SimplePeer({ initiator: true })
// var peer2 = new SimplePeer()

// peer1.on('signal', function (data) {
//   // when peer1 has signaling data, give it to peer2 somehow
//   peer2.signal(data)
// })

// peer2.on('signal', function (data) {
//   // when peer2 has signaling data, give it to peer1 somehow
//   peer1.signal(data)
// })

// peer1.on('connect', function () {
//   // wait for 'connect' event before using the data channel
//   peer1.send('hey peer2, how is it going?')
// })

// peer2.on('data', function (data) {
//   // got a data channel message
//   console.log('got a message from peer1: ' + data)
// })







import * as Peer from 'simple-peer';

if (!Peer.WEBRTC_SUPPORT) { alert("no support!") }

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

yourId.addEventListener('focus', () => {
  yourId.select();
  try {
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
    console.error('Oops, unable to copy');
  }
})
connectBtn.addEventListener('click', e => {
  peer.signal(JSON.parse(otherId.value))
})
sendBtn.addEventListener('click', () => {
  peer.send(yourMessage.value)
})

