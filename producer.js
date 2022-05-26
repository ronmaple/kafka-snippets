const {
  Kafka,
  // https://kafka.js.org/docs/2.0.0/migration-guide-v2.0.0
  Partitioners
} = require('kafkajs')
const {getBroker} = require('./utils')


const kafka = new Kafka({
  clientId: 'test-producer',
  brokers: [getBroker()]
})
const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner
})

const topic = 'test-topic'
const publish = async (message) => {
  try {
    await producer.send({
      topic,
      messages: [message]
    })
  } catch (e) {
    console.error(e)
  }
}

const run = async () => {
  await producer.connect()
  await publish({ value: 'new' })

  // TODO: force escape on success if manual publishing
}

run().catch(console.error)
