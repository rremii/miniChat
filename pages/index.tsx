import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Provider} from 'react-redux'
import styles from '../styles/Home.module.css'
import store from "../app/Redux/ReduxStore";
import {Ipost, postsApi} from "../app/api/api";
import {useInput} from "../app/hooks/useInput";

const Home: NextPage = () => {

    let {data, error} = postsApi.useGetPostsQuery(undefined, {
        pollingInterval: 2000,
    })
    const [addPost] = postsApi.useAddPostMutation()
    const [deletePost] = postsApi.useDeletePostMutation()
    const {val, reset, bind} = useInput('')
    const AddPost = () => {
        if (!val) return
        addPost(val)
        reset()
    }
    const DeletePost = (id: number) => {
        deletePost(id)
    }
    return (
        <div>
            <div>
                <input {...bind} type="text"/>
                <button onClick={AddPost}>send</button>
            </div>
            <div>
                {data?.map(({id, title}) => {
                    return <div key={id}>{title}
                        <button onClick={() => DeletePost(id)}>delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home
