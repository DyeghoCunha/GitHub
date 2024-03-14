import { Avatar } from "../Avatar";
import styles from "./cardPost.module.css"
import Image from "next/image";


export const CardPost = ({post})=>{
  return(
        <article>
          <header>
            <figure>
              <img  src={post.cover}/>
            </figure>
          </header>
          <section>
            <h2>{post.title}</h2>
             <p>{post.body}</p>
          </section>
          <footer>
            <Avatar imageSrc={post.author.avatar} name={post.author.username}/>
          </footer>
        </article> 
  )
}