import '../app.css';
export default function Header(){
    return(
        <header className="header">
        <img
         src="./trollFace.png" alt="trollFace" 
         className="header--image"
         />
        <h2 className="header--title">Create your own meme.</h2>
        <h4 className="header--project">React Course - Project 3</h4>
        </header>
        
    )
}
