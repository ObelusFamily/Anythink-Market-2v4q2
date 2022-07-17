const mongoose = require('mongoose');
const models = require('../models');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment');
const Item = mongoose.model('Item');

if (!process.env.MONGODB_URI) {
    console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose.connect(process.env.MONGODB_URI).then(async () => {
    await Promise.all([User.count().exec(), Item.count().exec()]).then(async (counts) => {
        console.log('ps ' + counts);
        const min = Math.max(...counts) + 1;
        console.log('min ' + min);
        for (var idx = min; idx <= min + 100; idx++) {
            console.log('Populating user, item, comment ' + idx);
            const u = new User({ username: 'user' + idx, email: 'u' + idx + '@anythink.net' });
            u.validateSync();
            await u.save();
            const i = new Item({ slug: 'item' + idx, title: 'item ' + idx, seller: u._id });
            await i.save();
            const c = new Comment({ body: 'Hey there! Test comment ' + idx, seller: u._id, item: i._id });
            await c.save();
        }
    });
}).finally(() => {
    process.exit(0);
});