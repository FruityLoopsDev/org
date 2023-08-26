import "./Footer.css";
const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <a href='https://www.aluracursos.com/'>
            <img src='/img/Logo.png' alt='org' />
        </a>
        <span>
            <strong className="copy">Desarrollado por: </strong>
            <br></br><a href="https://www.linkedin.com/in/cesarcruztrader/">Julio Fermin</a> en Colaboración
            <br></br>con Harland Lohora by Alura Latam
        </span>

    </footer>;
};
export default Footer;