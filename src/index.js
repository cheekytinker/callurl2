import fs from 'fs';
import readLine from 'readline';
import Stream from 'stream';
import agent from 'superagent';
import elasticSearch from 'elasticsearch';

const readStream = fs.createReadStream('temp');
const outStream = new Stream();
const rl2 = readLine.createInterface(readStream, outStream);
const client = new elasticSearch.Client({
  host: 'localhost:9200',
  log: 'trace',
  ignore: [404],
});

let id = 100;
rl2.on('line', (line) => {
  console.log(`calling${line}`);
  id += 1;
  console.log(id);
  ((theId) => {
    console.log(theId);

    agent.get(line).end(() => {
      console.log(`completed${line}`);
      ((myId) => {
        console.log(myId);
        client.create({
          index: 'test1',
          type: 'comment',
          id: `${myId}`,
          body: {
            text: line,
          },
        });
      })(theId);
    });
  })(id);
});

rl2.on('close', () => {
  console.log('done');
});
