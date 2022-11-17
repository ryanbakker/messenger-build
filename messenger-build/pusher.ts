import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

// Add to envs 

export const severPusher = new Pusher({
    appId: '1506907',
    key: '5902df04fcbcd76c06a5',
    secret: '4cdb9b06ee46743cbd4a',
    cluster: 'ap1',
    useTLS: true,
})

export const clientPusher = new ClientPusher('5902df04fcbcd76c06a5', {
    cluster: 'ap1',
    forceTLS: true,
  });