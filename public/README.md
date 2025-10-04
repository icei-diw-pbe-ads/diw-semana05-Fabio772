# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome:Fábio Henrique Alves Do Amaral Prado
- Matricula:1551991
- Proposta de projeto escolhida:Pessoas e Produções Pessoa Publicações / Obras / Projetos Autores e livros, pesquisadores e artigos, artistas e álbuns
- Breve descrição sobre seu projeto:O tema “Pessoas e Produções” explora a relação entre indivíduos e as obras, pesquisas ou criações que eles realizam. A ideia central é mostrar como diferentes pessoas interessadas nas áreas do conhecimento, da arte e da cultura, destacando suas produções e impacto.

## Print da Home-Page

<<  ![](<home page smn 5.png>) >>

## Print da página de detalhes do item

<< ![](<pagina de detalhe.png>) >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    const dados = 
  {id:1,nome:"Antônio Silva",categoria:"Autor",trabalhos:["Livro: Introdução à Literatura","Livro: Contos Modernos"],imagem:"img/literatura-brasileira.png",descricao:"Autor renomado da literatura brasileira.", data:"2025-01-15"},
  {id:2,nome:"Maria Oliveira",categoria:"Autor",trabalhos:["Livro: História do Brasil","Livro: Geografia Contemporânea"],imagem:"img/origem-da-literatura-brasileira.png",descricao:"Pesquisadora e escritora de obras acadêmicas.", data:"2025-02-10"},
  {id:3,nome:"Lucas Pereira",categoria:"Pesquisador",trabalhos:["Artigo: Inteligência Artificial na Educação","Artigo: Big Data e Sociedade"],imagem:"img/1_foto_da_ia-28557316.png",descricao:"Pesquisador em tecnologia e impacto social.", data:"2025-03-05"},
  {id:4,nome:"Carla Mendes",categoria:"Pesquisador",trabalhos:["Artigo: Mudanças Climáticas Globais","Artigo: Sustentabilidade e Economia"],imagem:"img/150209-geral-mudanca-climatica.png",descricao:"Especialista em clima e sustentabilidade.", data:"2025-03-20"},
  {id:5,nome:"João Santos",categoria:"Artista",trabalhos:["Álbum: Caminhos","Álbum: Origem"],imagem:"img/ab67616d0000b273b09209c44470c8a8.png",descricao:"Cantor e compositor de MPB.", data:"2025-04-01"},
  {id:6,nome:"Letícia Costa",categoria:"Artista",trabalhos:["Álbum: Horizontes","Álbum: Noites e Sonhos"],imagem:"img/ab67616d00001e02a44c507de10203dc.png",descricao:"Cantora pop brasileira.", data:"2025-04-15"}
  }
]
```