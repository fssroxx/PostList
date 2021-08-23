import React, {useState, useEffect} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/page";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import Pagination from "../components/UI/Pagination/Pagination";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";


function Posts() {
    const [posts, setPosts] = useState([
        {id:1, title:'a', body:'description2'},
        {id:2, title:'b 2', body:'description3'},
        {id:3, title:'c 3', body:'description1'},
    ]);
    // const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');

    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({sort:'', query:''});
//todo: черех юзМемо переписать



    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
            const response = await PostService.getAll(limit, page);
            setPosts(response.data);
            const totalCount = (response.headers['x-total-count'])
            setTotalPages(getPageCount(totalCount, limit))
        }
    );

    useEffect(() => {
        fetchPosts();
    },[page])

//

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts();
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>Get Posts</button>
            <MyButton style={{marginTop:'20px'}} onClick={() => setModal(true)}>Создать пользователя</MyButton>
            <MyModal visible={modal} setVisible={setModal}> <PostForm create={createPost}/></MyModal>

            <hr style={{margin:'15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                postError && <h1>произошла ошибка ${postError} </h1>
            }
            {isPostLoading &&
                <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><Loader/></div>
            }
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="посты по джиэс"/>
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;
