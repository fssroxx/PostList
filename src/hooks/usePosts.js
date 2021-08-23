


import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('функция отработала')
        if(sort) {
            return [...posts].sort((a, b)=>a[sort].localeCompare(b[sort]))
        }
        return posts;
    },[sort, posts]);

    return sortedPosts;
}

 export const usePosts = (post, sort, query) => {
    const sortedPosts = useSortedPosts(post, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    },[query, sortedPosts]);

    return sortedAndSearchedPosts;
}