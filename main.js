const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function() {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
}

$("#posts").on("click", ".delete", function() {
    let postId = $(this).closest(".post").data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", ".add-comment-btn", function() {
    let postId = $(this).closest(".post").data().id
    let commentText = $(this).siblings("input").val()
    tweeter.addComment(postId, commentText)
    renderer.renderPosts(tweeter.getPosts())
})


$("#posts").on("click", ".delete-comment", function() {
    let postId = $(this).closest(".post").data().id
    let commentId = $(this).closest(".single-comment").data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})