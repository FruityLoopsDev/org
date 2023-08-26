import footerbg from "../../img/footer.png";
const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: 'url(${footerbg})' }}>
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
        <strong>Desarrollado por Alura</strong>
    </footer>;
};
export default Footer;
