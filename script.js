/* codigo mov de navegacao */

function abrirSobre() {
  window.location.href = "sobre.html";
}

const imagens = document.querySelectorAll(".imagem");
const textos = document.querySelectorAll(".textMouse");

imagens.forEach((imagem, index) => {
  const texto = textos[index];
  imagem.addEventListener("mouseover", function () {
    texto.style.opacity = "1"; // texto visível
  });

  imagem.addEventListener("mouseout", function () {
    texto.style.opacity = "0"; // texto invisível
  });
});

/*the end */

/* navecao entre as paginas */

async function includeHTML() {
  try {
    const response = await fetch("header.html");
    const html = await response.text();
    document.getElementById("header-container").innerHTML = html;
  } catch (error) {
    console.error("Erro ao carregar o conteúdo do header:", error);
  }
}

includeHTML();

function abrirlinke() {
  window.open(
    "https://www.linkedin.com/in/vitoria-martins-958565155/",
    "_blank"
  );
}

function abrirGit() {
  window.open("https://github.com/Vitoria-Martins", "_blank");
}

function abrirInsta() {
  window.open("https://www.instagram.com/vihmarttins_/", "_blank");
}

//volta a pagina home
function btnSobre() {
  window.location.href = "index.html";
}
0;
0;
//abre os links da sessao de contato

function abrirWhats() {
  window.open("https://wa.me/5511956856106", "_blank");
}

function abrirGmail() {
  window.open("mailto:vitorianogueira299@gmail.com", "_blank");
}

// função para mudar a cor ao clicar no botao
// Função para aplicar as cores salvas no localStorage
document
  .getElementById("changeColorButton")
  .addEventListener("click", function () {
    var backColor = "white";
    var textColor = "black";

    // Verifica se as cores personalizadas já foram aplicadas
    var isCustomized =
      document.body.style.backgroundColor === backColor &&
      document.body.style.color === textColor;

    // Se as cores personalizadas já foram aplicadas, restaura as cores originais
    if (isCustomized) {
      backColor = ""; // Cor de fundo originals
      textColor = ""; // Cor do texto original
    }

    // Aplica as cores
    document.body.style.backgroundColor = backColor; // Cor de fundo
    document.body.style.color = textColor; // Cor do texto

    // Atualiza o localStorage com as cores aplicadas
    localStorage.setItem("backgroundColor", backColor);
    localStorage.setItem("textColor", textColor);
  });

// Aplica as cores salvas ao carregar a página
window.addEventListener("load", function () {
  var savedBackColor = localStorage.getItem("backgroundColor");
  var savedTextColor = localStorage.getItem("textColor");

  // Se houver cores salvas, aplica as cores
  if (savedBackColor && savedTextColor) {
    document.body.style.backgroundColor = savedBackColor;
    document.body.style.color = savedTextColor;
  }
});

// Verifica se está na página sobre
var isSobrePage = window.location.pathname.includes("sobre.html");
// Verifique o título da página

if (isSobrePage) {
  // Se estiver na página sobre, você pode adicionar aqui o código específico para essa página
  // Por exemplo, se houver elementos na página que precisam ter suas cores alteradas, você pode fazer isso aqui
}
