var Twitter = function () {
    this.users = new Map()
    this.tweets = new Map()
    this.users.set(1, { followers: [], followees: [] })
}

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    const tweet = { userId, tweetId }
    this.tweets.set(this.tweets.size, tweet)
    if (!this.users.has(userId)) this.users.set(userId, { followers: [], followees: [] })
}

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const usersTweets = []
    const tweetsToDisplay = []
    const { followers, followees } = this.users.get(userId)

    this.tweets.forEach((tweet, timestamp) => {
        if (tweet.userId === userId) usersTweets.push([timestamp, tweet.tweetId])
        else if (followees.includes(tweet.userId)) usersTweets.push([timestamp, tweet.tweetId])
    })

    usersTweets.sort((a, b) => b[0] - a[0])
    usersTweets
        .slice(0, Math.min(usersTweets.length, 10))
        .forEach(([timestamp, tweetId]) => tweetsToDisplay.push(tweetId))
    return tweetsToDisplay
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.users.has(followerId)) {
        this.users.set(followerId, { followers: [], followees: [followeeId] })
    } else {
        const { followers, followees } = this.users.get(followerId)

        this.users.set(followerId, {
            followers: followers,
            followees: [...followees, followeeId],
        })
    }
    if (!this.users.has(followeeId)) {
        this.users.set(followeeId, { followers: [followerId], followees: [] })
    } else {
        const { followers, followees } = this.users.get(followeeId)
        this.users.set(followeeId, {
            followees: followees,
            followers: [...followers, followerId],
        })
    }
}

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.users.has(followerId) || !this.users.has(followeeId)) return
    const { followers, followees } = this.users.get(followerId)
    const followeeIndex = followees.indexOf(followeeId)
    if (followeeIndex === -1) return
    followees.splice(followeeIndex, 1)
    this.users.set(followerId, {
        followers,
        followees,
    })

    const userToBeUpdated = this.users.get(followeeId)
    const followeesToBeUpdated = userToBeUpdated.followees
    const followersToBeUpdated = userToBeUpdated.followers
    const followerIndex = followersToBeUpdated.indexOf(followerId)
    followersToBeUpdated.splice(followerIndex, 1)
    this.users.set(followeeId, {
        followers: followersToBeUpdated,
        followees: followeesToBeUpdated,
    })
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
