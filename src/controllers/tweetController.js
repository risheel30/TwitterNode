const Tweet = require('../models/tweet');
const Comment = require('../models/comment');
const create = async function(req, res) {
    try {
        await Tweet.create({
            content: req.body.content,
            user: req.user._id
        });    
        req.flash('info', 'Tweet Created Successfully');
        return res.redirect('back');
    } catch(err) {
        console.error("Error in creating a tweet");
        return;
    }
    
}

const destroy = async function(req, res) {
    // console.log(req);
    try {
        const tweet = await Tweet.findById(req.params.id)
        if(tweet.user == req.user.id) {
            tweet.remove();
            Comment.deleteMa
    
}
module.exports = {create, destroy};
