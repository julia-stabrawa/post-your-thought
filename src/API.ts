export const fetchPosts = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const data = await (await fetch(url)).json();
    console.log(data);
}
