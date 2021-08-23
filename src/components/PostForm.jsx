import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''});
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({title:'', body:''});
        //очищаем инпуты, после добавления поста
    };

    return (

            <form>
                {/*управляемый компонент*/}
                <MyInput type='text'
                         placeholder='название поста'
                         value={post.title}
                         onChange={e => setPost({...post, title: e.target.value})}/>
                {/*<input ref={bodyInputRef}type="text"/>*/}
                {/*неуправляемый/неконтролируемый компонент*/}
                {/*<MyInput ref={bodyInputRef} type='text' placeholder='описание поста'/>*/}
                <MyInput value={post.body}
                         onChange={e => setPost({...post, body:e.target.value})} type='text' placeholder='описание поста'/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton >
            </form>

    );
};

export default PostForm;