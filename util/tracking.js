import KeenTracking from 'keen-tracking'


const client = new KeenTracking({
  projectId: '5cacc49ac9e77c00012203f2',
  writeKey: process.env.KEEN_WRITE_KEY
});

const view = url => {
  const host = process.browser ? window.location.host :
    (process.env.NODE_ENV === 'development' ? 'localhost' : 'christophfranke.info')
  
  client.recordEvent('view', {
    url,
    host,
    ip_address: "${keen.ip}",
    keen: {
      addons: [{
        name: "keen:ip_to_geo",
        input: {
          ip: "ip_address"
        },
        output: "keen.location"
      }]
    }  
  })
}

export default {
  view
}