// app.js
const dados = [
  {id:1,nome:"Antônio Silva",categoria:"Autor",trabalhos:["Livro: Introdução à Literatura","Livro: Contos Modernos"],imagem:"img/literatura-brasileira.png",descricao:"Autor renomado da literatura brasileira.", data:"2025-01-15"},
  {id:2,nome:"Maria Oliveira",categoria:"Autor",trabalhos:["Livro: História do Brasil","Livro: Geografia Contemporânea"],imagem:"img/origem-da-literatura-brasileira.png",descricao:"Pesquisadora e escritora de obras acadêmicas.", data:"2025-02-10"},
  {id:3,nome:"Lucas Pereira",categoria:"Pesquisador",trabalhos:["Artigo: Inteligência Artificial na Educação","Artigo: Big Data e Sociedade"],imagem:"img/1_foto_da_ia-28557316.png",descricao:"Pesquisador em tecnologia e impacto social.", data:"2025-03-05"},
  {id:4,nome:"Carla Mendes",categoria:"Pesquisador",trabalhos:["Artigo: Mudanças Climáticas Globais","Artigo: Sustentabilidade e Economia"],imagem:"img/150209-geral-mudanca-climatica.png",descricao:"Especialista em clima e sustentabilidade.", data:"2025-03-20"},
  {id:5,nome:"João Santos",categoria:"Artista",trabalhos:["Álbum: Caminhos","Álbum: Origem"],imagem:"img/ab67616d0000b273b09209c44470c8a8.png",descricao:"Cantor e compositor de MPB.", data:"2025-04-01"},
  {id:6,nome:"Letícia Costa",categoria:"Artista",trabalhos:["Álbum: Horizontes","Álbum: Noites e Sonhos"],imagem:"img/ab67616d00001e02a44c507de10203dc.png",descricao:"Cantora pop brasileira.", data:"2025-04-15"}
];

let filtroAtual = "Todos";

// Monta os cards
function montarCards(filtro = "Todos") {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  const searchValue = document.getElementById("search-input")?.value.toLowerCase() || "";

  const itensFiltrados = dados.filter(d => 
    (filtro === "Todos" || d.categoria === filtro) &&
    d.nome.toLowerCase().includes(searchValue)
  );

  itensFiltrados.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("fade-in");

    card.innerHTML = `
      <div class="card p-3 h-100">
        <img src="${item.imagem}" class="card-img-top rounded mb-2" alt="${item.nome}">
        <div class="card-body">
          <h3 class="card-title">${item.nome}</h3>
          <p><strong>${item.categoria}</strong></p>
          <ul class="list-unstyled">
            ${item.trabalhos.map(trabalho => `<li>${trabalho}</li>`).join("")}
          </ul>
          <button class="btn btn-info mt-2" onclick="toggleMore(this)">Ver mais</button>
          <div class="more-content">
            <p>${item.descricao}</p>
            <p><strong>Data de registro:</strong> ${item.data}</p>
            <p><strong>Categoria:</strong> ${item.categoria}</p>
            <ul class="list-unstyled">
              ${item.trabalhos.map(trabalho => `<li>${trabalho}</li>`).join("")}
            </ul>
            <div class="d-flex gap-2 mt-2">
              <button class="btn btn-success btn-sm" onclick="favoritar('${item.nome}')">⭐ Favoritar</button>
              <button class="btn btn-primary btn-sm" onclick="abrirModal(${item.id})">🔍 Ver Detalhes</button>
              <button class="btn btn-secondary btn-sm" onclick="compartilhar('${item.nome}')">🔗 Compartilhar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Toggle "Ver mais"
function toggleMore(button) {
  const more = button.nextElementSibling;
  if(more.style.display === "block") {
    more.style.display = "none";
    button.textContent = "Ver mais";
  } else {
    more.style.display = "block";
    button.textContent = "Ver menos";
  }
}

// Botão de filtro ativo
function filtrarCards(categoria, botao) {
  filtroAtual = categoria;
  montarCards(filtroAtual);

  const botoes = document.querySelectorAll("#filter-buttons .btn");
  botoes.forEach(b => b.classList.remove("btn-active"));
  botao.classList.add("btn-active");
}

// Pesquisar cards
function pesquisarCards() {
  montarCards(filtroAtual);
}

// Funções extras
function favoritar(nome) {
  alert(`Você favoritou ${nome}! ⭐`);
}

function compartilhar(nome) {
  alert(`Link de ${nome} copiado para compartilhar! 🔗`);
}

// Modal de detalhes
function abrirModal(id) {
  const item = dados.find(d => d.id === id);
  const modalContent = `
    <div class="modal fade show" id="modalDetalhes" style="display:block;" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content p-3">
          <div class="modal-header">
            <h5 class="modal-title">${item.nome} - Detalhes</h5>
            <button type="button" class="btn-close" onclick="fecharModal()"></button>
          </div>
          <div class="modal-body">
            <img src="${item.imagem}" class="img-fluid rounded mb-2" alt="${item.nome}">
            <p><strong>Descrição:</strong> ${item.descricao}</p>
            <p><strong>Data de registro:</strong> ${item.data}</p>
            <p><strong>Categoria:</strong> ${item.categoria}</p>
            <ul>
              ${item.trabalhos.map(t => `<li>${t}</li>`).join("")}
            </ul>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="fecharModal()">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalContent);
}

// Fechar modal
function fecharModal() {
  const modal = document.getElementById("modalDetalhes");
  if(modal) modal.remove();
}

// Inicializa cards
document.addEventListener("DOMContentLoaded", () => montarCards());
