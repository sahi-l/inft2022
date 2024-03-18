


document.addEventListener('DOMContentLoaded', function () {
    fetchBlogPosts();
});

// Function to fetch blog posts
async function fetchBlogPosts() {
    try {
        // Retrieve posts from the provided URL
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Initialize an array to hold promises for fetching images for the top 20 posts
        let fetchImagePromises = [];
        for (let i = 0; i < 20 && i < posts.length; i++) {
            fetchImagePromises.push(fetchImage(posts[i].id));
        }
        
        // Wait for all image URL fetches to complete
        const imageUrls = await Promise.all(fetchImagePromises);
        
        // Once images are fetched, proceed to display the posts and images
        displayBlogPosts(posts.slice(0, 20), imageUrls);
    } catch (error) {
        // Log any errors encountered during the fetch operation
        console.error('Error fetching blog posts:', error);
    }
}

// Function to display blog posts on the webpage
function displayBlogPosts(posts, imageUrls) {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Iterating through each post and creating a card for it   
    posts.forEach((post, index) => {
        const postCard = createPostCard(post, imageUrls[index]);
        blogPostsContainer.appendChild(postCard);
    });
}

// Function to create a card for a blog post
function createPostCard(post, imageUrl) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.height = '100%'; 

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = post.title;

    // Creating and setting up image element
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = imageUrl; 
    image.style.width = '100%'; 
    image.style.height = 'auto'; 

    const content = document.createElement('p');
    content.classList.add('card-text');
    content.textContent = post.body;

    const button = document.createElement('button');
    button.classList.add('btn-know-more'); 
    button.textContent = 'Know More';

    // Appending elements to build the card
    cardBody.appendChild(title);
    cardBody.appendChild(image);
    cardBody.appendChild(content);
    cardBody.appendChild(button); 

    card.appendChild(cardBody);

    return card;

    
}

async function fetchImage(searchQuery) {
    const apiKey = '42930142-edd18e0e848da2115bb4859bf';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&image_type=photo`;

    try {
        const result = await fetch(url);
        if (result.ok) {
            const content = await result.json();
            if (content.hits && content.hits.length > 0) {
                return content.hits[0].webformatURL;
            } else {
                console.error('No image found for:', searchQuery);
                return '1.jpg'; // Default image path
            }
        } else {
            throw new Error('Failed to retrieve image, server responded with: ' + result.status);
        }
    } catch (error) {
        console.error('Error during image fetch:', error);
        return '1.jpg'; // Default error image path
    }
}

