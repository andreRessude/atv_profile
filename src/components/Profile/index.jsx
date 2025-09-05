import styles from './style.module.css'

export default function Profile(props) {

    const github = "https://github.com/andreRessude"
    const linkedin = "https://www.linkedin.com/in/andr%C3%A9-ressude-7962a9255/"
    const gitpages = "https://andreressude.github.io/"

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img className={styles.image} src={props.image} alt="Imagem perfil" />
            </div>

            <h2 className={styles.nome}>{props.nome}</h2>

            <div className={styles.info}>
                <p>{props.carrer}</p>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>

            <div className={styles.buttons}>
                <a href={github} target="_blank" className={styles.button}>GitHub</a>
                <a href={linkedin} target="_blank" className={styles.button}>Linkedin</a>
                <a href={gitpages} target="_blank" className={styles.button}>Github Pages</a>
            </div>
        </div>
    )
}
