require('dotenv').config()

const getBroker = () => {
  let broker = 'localhost:9092'
  if (process.env.LOCAL_PUBLIC_IP) {
    broker = process.env.LOCAL_PUBLIC_IP + ':9092'
  }
  console.log('broker:', broker)
  return broker
}

module.exports = {
  getBroker
}
