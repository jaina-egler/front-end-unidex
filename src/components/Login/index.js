import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_cima}></div>
      <div className={styles.login_baixo}>
        <div className={styles.login_centro}>
          <div className={styles.login_esquerda}>
            <img className={styles.carrinho} src="/caixas.png" />
          </div>

          <div className={styles.login_direita}>
            <div>
              <img src="/unidex_logo_nova.png" />
            </div>

            <div>
              <form className={styles.form}>
                <label>Usuário</label>
                <input name="usuario" id="usuario" />

                <label>Senha</label>
                <input name="senha" id="senha" />

                <button type="submit">Entrar</button>
              </form>

              <p className={styles.esqueci}>Esqueci minha senha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
