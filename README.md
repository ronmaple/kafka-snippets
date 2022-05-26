# Kafka snippets

### Personal use, for basic producer/ subscriber snippet
- Nodejs
- Dockerized Kafka/Zookeeper
- Kafkajs

* Note that this is specifically configured for M1 Mac. There's currently no documentation online on Kafka setup in docker.


notes:
manually checking the consumer:
(docker Kafka folder location is tricky to find...):
- inside kafka-server docker cli
- `cd /opt/kafka/bin`
- `kafka-console-consumer.sh --bootstrap-server INSIDE://:9095 --topic test-topic --from-beginning`