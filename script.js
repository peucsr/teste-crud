// CRUD
const miniTwitter = {
    users: [
        {
        username: 'peucsr'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'peucsr',
            content: 'my first tweet'
        }
    ],
}

// CREATE
function createPosts(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
createPosts({owner: 'peucsr', content: 'my second post'});
console.log(miniTwitter.posts)

// READ
function pickPosts() {
    return miniTwitter.posts;
}

// UPDATE
function updateContentPosts(id, newContent) {
    const postWillBeUpdated = pickPosts().find((post) => {
        return post.id === id;
    });

}
updateContentPosts('new content of post')

// DELETE
function deletePost(id) {
  const listOfPostsUpdated = pickPosts().filter((postCurrent) => {
    return postCurrent.id !== id;
  });

  miniTwitter.posts = listOfPostsUpdated;


}