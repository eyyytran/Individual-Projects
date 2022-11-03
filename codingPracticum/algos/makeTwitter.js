var Twitter = function () {
    this.users = new Map()
    this.tweets = []
}

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.users.has(userId)) this.users.set(userId, [])
    const tweet = { userId, tweetId }
    this.tweets.unshift(tweet)
}

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const usersTweets = []
    const followees = this.users.get(userId)

    for (const tweet of this.tweets) {
        if (usersTweets.length === 10) break
        if (tweet.userId === userId) usersTweets.push(tweet.tweetId)
        else if (followees.includes(tweet.userId)) usersTweets.push(tweet.tweetId)
    }
    usersTweets.slice(0, Math.min(usersTweets.length, 10))
    return usersTweets
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, [followeeId])
    } else {
        const followees = this.users.get(followerId)
        followees.push(followeeId)
    }
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.users.has(followeeId)) return
    const followees = this.users.get(followerId)
    const followeeIndex = followees.indexOf(followeeId)
    if (followeeIndex === -1) return
    followees.splice(followeeIndex, 1)
}

const newTwitter = new Twitter()
newTwitter.postTweet(1, 5)

console.log(newTwitter.getNewsFeed(1))

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
