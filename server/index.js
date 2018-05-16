
const createChannelsSites = require('./api/createChannelsSites');

createChannelsSites.updateSites()
.then(() => createChannelsSites.updateChannels())
.then(() => {
  console.log("FINISHED CHANNELS PROMISE")
});
