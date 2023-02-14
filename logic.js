const Tweeter = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [

                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]


    let postIdCounter = 2;
    let commentIdCounter = 7;

    function getPosts() {
        return _posts;
    }
    function addPost(post) {
        let newPost = {
            text: post,
            id: "p" + postIdCounter++,
            comments: [],
        };
        _posts.push(newPost);
    }
    const removePost = function(postId) {
        let i = 0
        for (newPost of _posts) {
            if (newPost.id === postId) {
                _posts.splice(i, 1)
            }
            i ++
        }
    }

    const addComment = function(postId, comment) {
        for (newPost of _posts) {
            if (newPost.id === postId) {
                newPost.comments.push({id: "c" + commentIdCounter, text: comment})
                commentIdCounter ++
            }
        }
    }
    const removeComment = function(postId, commentID ) {
        for (newPost of _posts) {
            if (newPost.id === postId) {
                let i = 0
                for (comment of newPost.comments) {
                    if (comment.id === commentID) {
                        newPost.comments.splice(i, 1)
                    }
                    i ++
                }
            }
            
        }
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    };
}


