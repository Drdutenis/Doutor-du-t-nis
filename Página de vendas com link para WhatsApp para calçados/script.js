// Dados dos produtos
const produtos = [
    {
        id: 1,
        nome: "Sandália Tiras Pretas",
        preco: "R$ 45,99",
        categoria: "sandalia",
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
        descricao: "Sandália elegante com tiras entrelaçadas"
    },
    {
        id: 2,
        nome: "Sandália Nude Tiras",
        preco: "R$ 45,99",
        categoria: "sandalia",
        imagem: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=300&fit=crop",
        descricao: "Sandália nude com múltiplas tiras"
    },
    {
        id: 3,
        nome: "Sandália Salto Nude",
        preco: "R$ 48,99",
        categoria: "sandalia",
        imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        descricao: "Sandália de salto com detalhes metálicos"
    },
    {
        id: 4,
        nome: "Sandália Rasteira Azul",
        preco: "R$ 46,99",
        categoria: "sandalia",
        imagem: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=300&fit=crop",
        descricao: "Sandália rasteira azul com tiras"
    },
    {
        id: 5,
        nome: "Sandália Plataforma Preta",
        preco: "R$ 46,99",
        categoria: "sandalia",
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
        descricao: "Sandália plataforma com corda"
    },
    {
        id: 6,
        nome: "Scarpin Azul",
        preco: "R$ 45,99",
        categoria: "scarpin",
        imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        descricao: "Scarpin de salto alto azul"
    },
    {
        id: 7,
        nome: "Scarpin Preto",
        preco: "R$ 46,99",
        categoria: "scarpin",
        imagem: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=300&fit=crop",
        descricao: "Scarpin de salto alto preto"
    },
    {
        id: 8,
        nome: "Tênis Branco",
        preco: "R$ 45,99",
        categoria: "tenis",
        imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        descricao: "Tênis casual branco"
    },
    {
        id: 9,
        nome: "Tênis Cinza",
        preco: "R$ 45,99",
        categoria: "tenis",
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
        descricao: "Tênis esportivo cinza"
    },
    {
        id: 10,
        nome: "Bota Marrom",
        preco: "R$ 48,99",
        categoria: "bota",
        imagem: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=300&fit=crop",
        descricao: "Bota de cano baixo marrom"
    },
    {
        id: 11,
        nome: "Bota Dourada",
        preco: "R$ 48,99",
        categoria: "bota",
        imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        descricao: "Bota dourada com cadarço"
    },
    {
        id: 12,
        nome: "Bota Estampada",
        preco: "R$ 45,99",
        categoria: "bota",
        imagem: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
        descricao: "Bota com estampa de leopardo"
    },
    {
        id: 13,
        nome: "Bota Preta",
        preco: "R$ 45,99",
        categoria: "bota",
        imagem: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=300&fit=crop",
        descricao: "Bota preta de cano baixo"
    },
    {
        id: 14,
        nome: "Bota Preta Estampada",
        preco: "R$ 48,99",
        categoria: "bota",
        imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
        descricao: "Bota preta com detalhes estampados"
    }
];

// Função para renderizar produtos
function renderizarProdutos(produtosFiltrados = produtos) {
    const grid = document.getElementById('produtos-grid');
    grid.innerHTML = '';
    
    produtosFiltrados.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'produto-card';
        produtoCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <div class="produto-info">
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-categoria">${produto.categoria.charAt(0).toUpperCase() + produto.categoria.slice(1)}</p>
                <p class="produto-preco">${produto.preco}</p>
                <a href="https://wa.me/5562985249959?text=Olá! Tenho interesse no produto: *${produto.nome}* - ${produto.preco}%0A%0APodem me enviar mais informações sobre este produto?" 
                   class="produto-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    Comprar via WhatsApp
                </a>
            </div>
        `;
        grid.appendChild(produtoCard);
    });
}

// Função para filtrar produtos
function filtrarProdutos(categoria) {
    const botoes = document.querySelectorAll('.filtro-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    const botaoAtivo = document.querySelector(`[data-categoria="${categoria}"]`);
    botaoAtivo.classList.add('active');
    
    if (categoria === 'todos') {
        renderizarProdutos(produtos);
    } else {
        const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
        renderizarProdutos(produtosFiltrados);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar produtos iniciais
    renderizarProdutos();
    
    // Adicionar event listeners aos botões de filtro
    const botoesFiltro = document.querySelectorAll('.filtro-btn');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            filtrarProdutos(categoria);
        });
    });
    
    // Smooth scroll para navegação
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animação de scroll para cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards de produtos
    setTimeout(() => {
        const cards = document.querySelectorAll('.produto-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// Função para destacar seção ativa na navegação
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

