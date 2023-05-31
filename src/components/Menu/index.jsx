import * as React from "react";
import Image from "next/image";
import Avatar from "../../../public/assets/user-avatar-filled.svg";
import styles from "./styles.module.css";
import ButtonLink from "./ButtonLink";
import Cadastro from "../../../public/assets/cadastros.svg";
import Home from "../../../public/assets/home.svg";
import manutencaoIcon from "../../../public/assets/tools.svg";
import AbastecimentoIcon from "../../../public/assets/abastecimentos.svg";
import RelatorioIcon from "../../../public/assets/report.svg";
import CheckListIcon from "../../../public/assets/Vector.svg";
import ArrowMenuRight from "../../../public/assets/arrow-menu-right.svg";
import ArrowMenuLeft from "../../../public/assets/arrow-menu-left.svg";
import Sair from "../../../public/assets/sair.svg";
import Link from "next/link";

function Menu() {
  const [user, setUser] = React.useState("Guilherme");
  const [role, setRole] = React.useState("Administrador");
  const [toogle, setToogle] = React.useState(true);

  const cadastros = [
    {
      path: "/veiculos",
      label: "Veículos",
    },
    {
      path: "/produtos",
      label: "produtos",
    },
    {
      path: "/fornecedores",
      label: "fornecedores",
    },
    {
      path: "/usuarios",
      label: "usuarios",
    },
  ];
  const manutencao = [
    {
      path: "/preventivas",
      label: "Preventivas",
    },
    {
      path: "/corretivas",
      label: "Corretivas",
    },
  ];

  function finishSession() {
    console.log("encerrando sessão");
  }

  if (toogle) {
    return (
      <nav className={styles.containerMain}>
        <div className={styles.navHeader}>
          <Image
            src={Avatar}
            alt="Avatar usuário"
            style={{ marginRight: "0.5rem", color: "white" }}
          />
          <div className={styles.navHeaderDesc}>
            <h3 className={styles.navHeaderDescTitle}>Olá, {user}</h3>
            <p className={styles.navHeaderDescSubtitle}>{role}</p>
          </div>
        </div>
        <div>
          {/* home */}
          <ButtonLink label={"Home"} svgIcon={Home} path={"home"} />

          {/* cadastro */}
          <ButtonLink
            label={"Cadastros"}
            hasChildren={true}
            svgIcon={Cadastro}
            links={cadastros}
          />

          <ButtonLink
            label={"Manutenção"}
            hasChildren={true}
            svgIcon={manutencaoIcon}
            links={manutencao}
          />

          <ButtonLink
            label={"Relatório"}
            svgIcon={RelatorioIcon}
            path={"relatorio"}
          />

          <ButtonLink
            label={"Abastecimento"}
            svgIcon={AbastecimentoIcon}
            path={"abastecimento"}
          />

          <ButtonLink
            label={"Checklist"}
            svgIcon={CheckListIcon}
            path={"checklist"}
          />
        </div>
        <div className={styles.containerArrow}>
          <Image
            src={ArrowMenuLeft}
            alt="Arrow left"
            onClick={() => setToogle(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.sairContainer}>
          <Image
            src={Sair}
            alt="sair"
            style={{ marginRight: "1rem", cursor: "pointer" }}
            onClick={() => finishSession()}
          />
          <p
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => finishSession()}
          >
            Sair
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={styles.containerMain} style={{ width: "5%" }}>
        <div
          className={styles.navHeader}
          style={{ paddingLeft: 0, marginLeft: "0.3rem" }}
        >
          <Image
            src={Avatar}
            alt="Avatar usuário"
            style={{
              color: "white",
              cursor: "pointer",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "36vh",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Image
            src={Home}
            alt="Home"
            width={30}
            height={30}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={Cadastro}
            alt="Cadastro"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={manutencaoIcon}
            alt="Manutencao"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={RelatorioIcon}
            alt="relatorio"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={AbastecimentoIcon}
            alt="abastecimento"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={CheckListIcon}
            alt="checklist"
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div
          className={styles.containerArrow}
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <Image
            src={ArrowMenuRight}
            alt="Arrow left"
            onClick={() => setToogle(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.sairContainer}>
          <Image
            src={Sair}
            alt="sair"
            style={{ marginRight: "1rem", cursor: "pointer" }}
            onClick={() => finishSession()}
          />
        </div>
      </nav>
    );
  }
}

export default Menu;
