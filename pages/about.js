// this is going to be our /about
// import css module
import styles from '../styles/About.module.css'

export default function About(){
    return (
        <div className={styles.body}>
            <h1>about</h1>
            <p>dont use apostrophes unless they are in backticks</p>
            <h2>I am different</h2>
            <style jsx>{`
                h2 {
                    color: black;
                }
            `}</style>

            {/* two ways of rendering images: stored locally or a url */}
            <img 
                src='/next.svg'
                alt='logo'
            />

            <img 
                src='https://placekitten.com/1000/600'
                alt='katto'
            />
        </div>
    )
}