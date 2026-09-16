export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang: SupportedLanguage = 'en';

export const ui = {
  en: {
    // Meta & Site
    'site.title': 'MakeCharts | Free Online Pie & Bar Chart Generator',
    'site.description': 'An ultra-minimal, high-performance, 100% browser-based chart generator. Create responsive Pie and Bar charts with instant SVG and PNG downloads. 100% private.',
    
    // Navigation
    'nav.brand': 'MakeCharts',
    'nav.tagline': 'Free Online Chart Generator',
    'nav.themeToggle': 'Toggle theme',
    'nav.selectLanguage': 'Select language',
    'nav.support': 'Support the Developer',
    'nav.supportTooltip': 'Buy me a coffee to support free open tools',
    'nav.github': 'GitHub',

        // Breadcrumbs
    'breadcrumbs.home': 'Home',
    'breadcrumbs.studio': 'Chart Studio',

    // Hero
    'hero.badge': '100% Client-Side & Free',
    'hero.title': 'Free Online Pie & Bar Chart Generator',
    'hero.subtitle': 'Generate crisp vector charts instantly in your browser. Enter numbers manually or paste CSV data. Download high-res SVG or PNG files with zero server uploads.',
    'hero.cta': 'Create Chart Now',
    'hero.privacyBadge': 'Zero server uploads · 100% Private',

    // Workspace - Controls & Settings
    'workspace.title': 'Chart Studio',
    'workspace.chartTypeTitle': 'Chart Type',
    'workspace.typePie': 'Pie Chart',
    'workspace.typeDonut': 'Donut Chart',
    'workspace.typeBar': 'Bar Chart',
    'workspace.typeHorizontalBar': 'Horizontal Bar',
    'workspace.chartTitleLabel': 'Chart Title',
    'workspace.chartTitlePlaceholder': 'e.g., Q3 Revenue by Category',
    'workspace.showLegend': 'Show Legend',
    'workspace.showGrid': 'Show Grid Lines',
    'workspace.showWatermark': 'Watermark',

    // Workspace - Data Table
    'workspace.dataEditorTitle': 'Data Input',
    'workspace.dataEditorSubtitle': 'Add categories, numeric values, and custom colors',
    'workspace.colLabel': 'Category / Label',
    'workspace.colValue': 'Value',
    'workspace.colColor': 'Color',
    'workspace.colActions': 'Action',
    'workspace.addRow': 'Add Row',
    'workspace.pasteCsv': 'Paste CSV / TSV',
    'workspace.clearAll': 'Clear All',
    'workspace.loadSample': 'Load Sample',
    'workspace.deleteRow': 'Delete row',
    'workspace.total': 'Total',
    'workspace.rowsCount': 'rows',

    // Workspace - CSV Modal
    'workspace.csvModalTitle': 'Paste Data (CSV / TSV)',
    'workspace.csvModalDesc': 'Paste data copied from Excel, Google Sheets, or CSV files. First column for labels, second column for numbers.',
    'workspace.csvModalPlaceholder': 'Label, Value\nMarketing, 3400\nEngineering, 5200\nDesign, 2100\nOperations, 1800',
    'workspace.csvModalImport': 'Import Data',
    'workspace.csvModalCancel': 'Cancel',
    'workspace.csvModalError': 'Could not parse valid data rows. Please ensure each line has a label and a number.',

    // Workspace - Live Preview & Export
    'workspace.previewTitle': 'Live Preview',
    'workspace.exportSvg': 'Export SVG',
    'workspace.exportPng': 'Export PNG',
    'workspace.exporting': 'Exporting...',
    'workspace.downloadStarted': 'Chart downloaded successfully!',
    'workspace.emptyStateTitle': 'No Data to Display',
    'workspace.emptyStateDesc': 'Add at least one data row with a positive number or load sample data to generate your chart.',
    'workspace.sampleBrowserTitle': 'Browser Market Share',
    'workspace.sampleExpensesTitle': 'Monthly Project Budget',

    // Features
    'features.title': 'Built for Speed, Privacy & Precision',
    'features.subtitle': 'Generate publication-grade charts in seconds without friction.',
    'features.privacyTitle': '100% Local & Private',
    'features.privacyDesc': 'Zero tracking and zero server uploads. Your data stays strictly inside your browser session.',
    'features.svgTitle': 'Crisp Vector SVG Export',
    'features.svgDesc': 'Download vector SVG graphics that scale infinitely without pixelation, perfect for Figma, Illustrator, and PDFs.',
    'features.pngTitle': 'High-Resolution PNG',
    'features.pngDesc': 'Export sharp retina-ready PNG images formatted for pitch decks, academic reports, and presentations.',
    'features.csvTitle': 'Instant CSV / Sheets Paste',
    'features.csvDesc': 'Copy tabular data directly from Excel or Google Sheets and plot dozens of rows in a single click.',
    'features.responsiveTitle': 'Responsive & Interactive',
    'features.responsiveDesc': 'Fluid layout with dynamic tooltips and real-time color updates across both desktop and mobile screens.',
    'features.freeTitle': 'No Registration Required',
    'features.freeDesc': 'No account needed, no credit card, and no watermarks. Completely free for personal and commercial projects.',

    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Three straightforward steps to create and export your chart',
    'howItWorks.step1Title': '1. Input or Paste Data',
    'howItWorks.step1Desc': 'Enter your categories and numeric values manually in the table, or paste data rows directly from any spreadsheet.',
    'howItWorks.step2Title': '2. Choose Chart & Style',
    'howItWorks.step2Desc': 'Select Pie, Donut, Vertical Bar, or Horizontal Bar. Customize row colors, chart title, and toggle legends.',
    'howItWorks.step3Title': '3. Download Vector or Image',
    'howItWorks.step3Desc': 'Export crystal-clear vector SVG for graphic design tools, or high-res PNG for slides and documents.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions about MakeCharts, privacy, and exports.',
    'faq.q1': 'Is MakeCharts completely free to use?',
    'faq.a1': 'Yes, MakeCharts is 100% free with no hidden fees, subscriptions, or watermarks. You can use all generated charts for personal, academic, and commercial purposes.',
    'faq.q2': 'Is my financial or business data safe?',
    'faq.a2': 'Yes, your data is 100% private. MakeCharts runs entirely on client-side React code inside your browser. No data rows, titles, or numbers are ever sent to a server.',
    'faq.q3': 'What is the difference between SVG and PNG export?',
    'faq.a3': 'SVG is an XML-based vector format that can be resized indefinitely without losing sharpness—ideal for editing in Adobe Illustrator, Figma, or embedding on web pages. PNG is a high-resolution raster image that can be dropped immediately into PowerPoint, Word, or emails.',
    'faq.q4': 'Can I paste data directly from Excel or Google Sheets?',
    'faq.a4': 'Yes! Click the "Paste CSV" button and paste your copied spreadsheet rows. The parser automatically detects tab-separated or comma-separated values.',
    'faq.q5': 'Can I customize the color of each slice or bar?',
    'faq.a5': 'Yes, each row includes a dedicated color picker. You can choose any hex color to match your company branding or presentation theme.',
    'faq.q6': 'How can I support MakeCharts?',
    'faq.a6': 'If MakeCharts saves you time, you can support ongoing development and hosting costs by buying a coffee via the "Support the Developer" link. Every contribution helps keep the tool free and ad-free!',

    // Footer
    'footer.brandDesc': 'The fast, privacy-first Pie and Bar chart generator for creators, analysts, and students.',
    'footer.privacyPledge': '100% Client-Side. No telemetry. No servers.',
    'footer.supportPrompt': 'Found this tool helpful? Support further development:',
    'footer.supportButton': 'Buy Me a Coffee',
    'footer.copyright': 'All rights reserved. Free for commercial and personal use.',
    'footer.builtWith': 'Built with Astro, React & Recharts.',
  },

  es: {
    // Meta & Site
    'site.title': 'MakeCharts | Generador Gratis de Gráficos de Pastel y Barras',
    'site.description': 'Un generador de gráficos ultra minimalista, de alto rendimiento y 100% en el navegador. Crea gráficos de pastel y barras con descarga instantánea en SVG y PNG. 100% privado.',
    
    // Navigation
    'nav.brand': 'MakeCharts',
    'nav.tagline': 'Generador de Gráficos Online Gratis',
    'nav.themeToggle': 'Cambiar tema',
    'nav.selectLanguage': 'Seleccionar idioma',
    'nav.support': 'Apoyar al Desarrollador',
    'nav.supportTooltip': 'Invítame un café para apoyar herramientas libres',
    'nav.github': 'GitHub',

        // Breadcrumbs
    'breadcrumbs.home': 'Inicio',
    'breadcrumbs.studio': 'Estudio de Gráficos',

    // Hero
    'hero.badge': '100% en el Navegador y Gratis',
    'hero.title': 'Generador Gratuito de Gráficos de Pastel y Barras',
    'hero.subtitle': 'Genera gráficos vectoriales nítidos al instante en tu navegador. Ingresa datos manualmente o pega desde CSV. Descarga archivos SVG o PNG en alta resolución sin subir datos a ningún servidor.',
    'hero.cta': 'Crear Gráfico Ahora',
    'hero.privacyBadge': 'Cero subidas al servidor · 100% Privado',

    // Workspace - Controls & Settings
    'workspace.title': 'Estudio de Gráficos',
    'workspace.chartTypeTitle': 'Tipo de Gráfico',
    'workspace.typePie': 'Gráfico de Pastel',
    'workspace.typeDonut': 'Gráfico de Dona',
    'workspace.typeBar': 'Gráfico de Barras',
    'workspace.typeHorizontalBar': 'Barras Horizontales',
    'workspace.chartTitleLabel': 'Título del Gráfico',
    'workspace.chartTitlePlaceholder': 'ej., Ingresos del T3 por Categoría',
    'workspace.showLegend': 'Mostrar Leyenda',
    'workspace.showGrid': 'Mostrar Líneas de Cuadrícula',
    'workspace.showWatermark': 'Marca de agua',

    // Workspace - Data Table
    'workspace.dataEditorTitle': 'Entrada de Datos',
    'workspace.dataEditorSubtitle': 'Añade categorías, valores numéricos y colores personalizados',
    'workspace.colLabel': 'Categoría / Etiqueta',
    'workspace.colValue': 'Valor',
    'workspace.colColor': 'Color',
    'workspace.colActions': 'Acción',
    'workspace.addRow': 'Añadir Fila',
    'workspace.pasteCsv': 'Pegar CSV / TSV',
    'workspace.clearAll': 'Borrar Todo',
    'workspace.loadSample': 'Cargar Ejemplo',
    'workspace.deleteRow': 'Eliminar fila',
    'workspace.total': 'Total',
    'workspace.rowsCount': 'filas',

    // Workspace - CSV Modal
    'workspace.csvModalTitle': 'Pegar Datos (CSV / TSV)',
    'workspace.csvModalDesc': 'Pega datos copiados de Excel, Google Sheets o archivos CSV. Primera columna para etiquetas, segunda para números.',
    'workspace.csvModalPlaceholder': 'Etiqueta, Valor\nMarketing, 3400\nIngeniería, 5200\nDiseño, 2100\nOperaciones, 1800',
    'workspace.csvModalImport': 'Importar Datos',
    'workspace.csvModalCancel': 'Cancelar',
    'workspace.csvModalError': 'No se pudieron procesar filas válidas. Asegúrate de que cada línea tenga etiqueta y número.',

    // Workspace - Live Preview & Export
    'workspace.previewTitle': 'Vista Previa en Vivo',
    'workspace.exportSvg': 'Exportar SVG',
    'workspace.exportPng': 'Exportar PNG',
    'workspace.exporting': 'Exportando...',
    'workspace.downloadStarted': '¡Gráfico descargado con éxito!',
    'workspace.emptyStateTitle': 'Sin Datos para Mostrar',
    'workspace.emptyStateDesc': 'Añade al menos una fila con valor positivo o carga datos de ejemplo para renderizar el gráfico.',
    'workspace.sampleBrowserTitle': 'Cuota de Mercado de Navegadores',
    'workspace.sampleExpensesTitle': 'Presupuesto Mensual del Proyecto',

    // Features
    'features.title': 'Diseñado para Rapidez, Privacidad y Precisión',
    'features.subtitle': 'Genera gráficos con calidad de publicación en segundos y sin complicaciones.',
    'features.privacyTitle': '100% Local y Privado',
    'features.privacyDesc': 'Cero rastreo y cero almacenamiento en la nube. Tus datos nunca salen de tu sesión de navegador.',
    'features.svgTitle': 'Exportación Vectorial SVG Nítida',
    'features.svgDesc': 'Descarga archivos vectoriales SVG que escalan infinitamente sin pixelarse, ideales para Figma, Illustrator y PDFs.',
    'features.pngTitle': 'PNG en Alta Resolución',
    'features.pngDesc': 'Exporta imágenes PNG nítidas listas para diapositivas, informes académicos y presentaciones.',
    'features.csvTitle': 'Pegado Instantáneo de CSV / Hojas',
    'features.csvDesc': 'Copia datos tabulares directamente de Excel o Google Sheets y grafica decenas de filas en un solo clic.',
    'features.responsiveTitle': 'Adaptable e Interactivo',
    'features.responsiveDesc': 'Diseño fluido con tooltips dinámicos y actualización de color en tiempo real para móviles y ordenadores.',
    'features.noLogin.title': 'Sin Registro Requerido',
    'features.noLogin.desc': 'Sin cuentas, sin tarjeta de crédito y sin marcas de agua. Completamente gratis para uso personal y comercial.',
    'features.freeTitle': 'Sin Registro Requerido',
    'features.freeDesc': 'Sin cuentas, sin tarjeta de crédito y sin marcas de agua. Completamente gratis para uso personal y comercial.',

    // How It Works
    'howItWorks.title': 'Cómo Funciona',
    'howItWorks.subtitle': 'Tres sencillos pasos para crear y exportar tu gráfico',
    'howItWorks.step1Title': '1. Ingresa o Pega Datos',
    'howItWorks.step1Desc': 'Ingresa categorías y valores numéricos en la tabla, o pega filas directamente desde cualquier hoja de cálculo.',
    'howItWorks.step2Title': '2. Elige Gráfico y Estilo',
    'howItWorks.step2Desc': 'Elige Pastel, Dona, Barras Verticales o Barras Horizontales. Personaliza colores y añade un título.',
    'howItWorks.step3Title': '3. Descarga Vector o Imagen',
    'howItWorks.step3Desc': 'Exporta SVG vectorial para herramientas de diseño o PNG de alta resolución para diapositivas y documentos.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Preguntas habituales sobre MakeCharts, privacidad y exportación.',
    'faq.q1': '¿MakeCharts es completamente gratuito?',
    'faq.a1': 'Sí, MakeCharts es 100% gratis, sin tarifas ocultas, suscripciones ni marcas de agua. Puedes usar los gráficos para proyectos personales y comerciales.',
    'faq.q2': '¿Mis datos están protegidos y privados?',
    'faq.a2': 'Totalmente. MakeCharts funciona íntegramente en tu navegador mediante React. Ningún dato, título o cifra se envía a servidores externos.',
    'faq.q3': '¿Cuál es la diferencia entre exportar SVG y PNG?',
    'faq.a3': 'SVG es un formato vectorial escalable infinitamente sin perder nitidez, óptimo para Illustrator o Figma. PNG es un archivo de imagen directo para PowerPoint, Word o emails.',
    'faq.q4': '¿Puedo pegar datos directamente desde Excel o Google Sheets?',
    'faq.a4': '¡Sí! Haz clic en "Pegar CSV" y pega las celdas copiadas. El sistema reconoce automáticamente separadores por tabulación o comas.',
    'faq.q5': '¿Puedo personalizar los colores de cada sección o barra?',
    'faq.a5': 'Sí, cada fila cuenta con su propio selector de color hexadecimal para adaptarse a tu identidad de marca o presentación.',
    'faq.q6': '¿Cómo puedo apoyar el desarrollo de MakeCharts?',
    'faq.a6': 'Si MakeCharts te resulta útil, puedes apoyar invitando un café a través del botón "Apoyar al Desarrollador". ¡Tu apoyo mantiene la herramienta gratuita y sin publicidad!',

    // Footer
    'footer.brandDesc': 'El generador rápido y privado de gráficos de pastel y barras para analistas, creadores y estudiantes.',
    'footer.privacyPledge': '100% en el navegador. Cero telemetría. Cero servidores.',
    'footer.supportPrompt': '¿Te sirvió esta herramienta? Apoya el desarrollo:',
    'footer.supportButton': 'Invítame un Café',
    'footer.copyright': 'Todos los derechos reservados. Gratis para uso comercial y personal.',
    'footer.builtWith': 'Construido con Astro, React y Recharts.',
  },

  pt: {
    // Meta & Site
    'site.title': 'MakeCharts | Gerador Grátis de Gráficos de Pizza e Barras',
    'site.description': 'Um gerador de gráficos minimalista, de alto desempenho e 100% no navegador. Crie gráficos de pizza e barras com download instantâneo em SVG e PNG. 100% privado.',
    
    // Navigation
    'nav.brand': 'MakeCharts',
    'nav.tagline': 'Gerador de Gráficos Online Gratuito',
    'nav.themeToggle': 'Alternar tema',
    'nav.selectLanguage': 'Selecionar idioma',
    'nav.support': 'Apoiar o Desenvolvedor',
    'nav.supportTooltip': 'Pague-me um café para apoiar ferramentas abertas',
    'nav.github': 'GitHub',

        // Breadcrumbs
    'breadcrumbs.home': 'Início',
    'breadcrumbs.studio': 'Estúdio de Gráficos',

    // Hero
    'hero.badge': '100% no Navegador e Grátis',
    'hero.title': 'Gerador Gratuito de Gráficos de Pizza e Barras',
    'hero.subtitle': 'Gere gráficos vetoriais nítidos instantaneamente no seu navegador. Insira dados manualmente ou cole de CSV. Baixe arquivos SVG ou PNG em alta resolução sem envio a servidores.',
    'hero.cta': 'Criar Gráfico Agora',
    'hero.privacyBadge': 'Zero envios para servidor · 100% Privado',

    // Workspace - Controls & Settings
    'workspace.title': 'Estúdio de Gráficos',
    'workspace.chartTypeTitle': 'Tipo de Gráfico',
    'workspace.typePie': 'Gráfico de Pizza',
    'workspace.typeDonut': 'Gráfico de Rosca',
    'workspace.typeBar': 'Gráfico de Barras',
    'workspace.typeHorizontalBar': 'Barras Horizontais',
    'workspace.chartTitleLabel': 'Título do Gráfico',
    'workspace.chartTitlePlaceholder': 'ex., Receita do 3º Trimestre por Categoria',
    'workspace.showLegend': 'Mostrar Legenda',
    'workspace.showGrid': 'Mostrar Linhas de Grade',
    'workspace.showWatermark': 'Marca d\'água',

    // Workspace - Data Table
    'workspace.dataEditorTitle': 'Entrada de Dados',
    'workspace.dataEditorSubtitle': 'Adicione categorias, valores numéricos e cores personalizadas',
    'workspace.colLabel': 'Categoria / Rótulo',
    'workspace.colValue': 'Valor',
    'workspace.colColor': 'Cor',
    'workspace.colActions': 'Ação',
    'workspace.addRow': 'Adicionar Linha',
    'workspace.pasteCsv': 'Colar CSV / TSV',
    'workspace.clearAll': 'Limpar Tudo',
    'workspace.loadSample': 'Carregar Exemplo',
    'workspace.deleteRow': 'Excluir linha',
    'workspace.total': 'Total',
    'workspace.rowsCount': 'linhas',

    // Workspace - CSV Modal
    'workspace.csvModalTitle': 'Colar Dados (CSV / TSV)',
    'workspace.csvModalDesc': 'Cole dados copiados do Excel, Google Sheets ou arquivos CSV. Primeira coluna para rótulos, segunda para números.',
    'workspace.csvModalPlaceholder': 'Rótulo, Valor\nMarketing, 3400\nEngenharia, 5200\nDesign, 2100\nOperações, 1800',
    'workspace.csvModalImport': 'Importar Dados',
    'workspace.csvModalCancel': 'Cancelar',
    'workspace.csvModalError': 'Não foi possível processar linhas válidas. Certifique-se de que cada linha tenha rótulo e número.',

    // Workspace - Live Preview & Export
    'workspace.previewTitle': 'Visualização em Tempo Real',
    'workspace.exportSvg': 'Exportar SVG',
    'workspace.exportPng': 'Exportar PNG',
    'workspace.exporting': 'Exportando...',
    'workspace.downloadStarted': 'Gráfico baixado com sucesso!',
    'workspace.emptyStateTitle': 'Nenhum Dado para Exibir',
    'workspace.emptyStateDesc': 'Adicione pelo menos uma linha com valor positivo ou carregue dados de exemplo para gerar o gráfico.',
    'workspace.sampleBrowserTitle': 'Participação de Mercado de Navegadores',
    'workspace.sampleExpensesTitle': 'Orçamento Mensal do Projeto',

    // Features
    'features.title': 'Projetado para Velocidade, Privacidade e Precisão',
    'features.subtitle': 'Gere gráficos com qualidade profissional em segundos sem complicações.',
    'features.privacyTitle': '100% Local e Privado',
    'features.privacyDesc': 'Sem rastreamento e sem armazenamento em nuvem. Seus dados nunca saem da sua sessão do navegador.',
    'features.svgTitle': 'Exportação Vetorial SVG Nítida',
    'features.svgDesc': 'Baixe arquivos vetoriais SVG que escalam infinitamente sem perda de qualidade, ideais para Figma, Illustrator e PDFs.',
    'features.pngTitle': 'PNG em Alta Resolução',
    'features.pngDesc': 'Exporte imagens PNG nítidas prontas para apresentações, relatórios acadêmicos e documentos.',
    'features.csvTitle': 'Colagem Instantânea de CSV / Planilhas',
    'features.csvDesc': 'Copie dados diretamente do Excel ou Google Sheets e plote dezenas de linhas com um único clique.',
    'features.responsiveTitle': 'Responsivo e Interativo',
    'features.responsiveDesc': 'Layout fluido com dicas dinâmicas e atualização de cor em tempo real para celulares e computadores.',
    'features.noLogin.title': 'Sem Cadastro Necessário',
    'features.noLogin.desc': 'Sem cadastro, sem cartão de crédito e sem marca d\'água. Totalmente gratuito para uso pessoal e comercial.',
    'features.freeTitle': 'Sem Cadastro Necessário',
    'features.freeDesc': 'Sem cadastro, sem cartão de crédito e sem marca d\'água. Totalmente gratuito para uso pessoal e comercial.',

    // How It Works
    'howItWorks.title': 'Como Funciona',
    'howItWorks.subtitle': 'Três passos simples para criar e exportar seu gráfico',
    'howItWorks.step1Title': '1. Insira ou Cole Dados',
    'howItWorks.step1Desc': 'Digite categorias e números na tabela ou cole linhas de dados diretamente de qualquer planilha.',
    'howItWorks.step2Title': '2. Escolha o Gráfico e Estilo',
    'howItWorks.step2Desc': 'Selecione Pizza, Rosca, Barras Verticais ou Horizontais. Personalize cores, título e legendas.',
    'howItWorks.step3Title': '3. Baixe Vetor ou Imagem',
    'howItWorks.step3Desc': 'Exporte SVG vetorial para ferramentas de design ou PNG de alta resolução para slides e relatórios.',

    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Respostas sobre o MakeCharts, privacidade e opções de download.',
    'faq.q1': 'O MakeCharts é totalmente gratuito?',
    'faq.a1': 'Sim, o MakeCharts é 100% gratuito, sem taxas ocultas, assinaturas ou marcas d\'água. Você pode usar os gráficos gerados livremente.',
    'faq.q2': 'Meus dados confidenciais estão seguros?',
    'faq.a2': 'Sim, seus dados são 100% privados. O MakeCharts é executado inteiramente no navegador via React. Nenhum dado é enviado para servidores externos.',
    'faq.q3': 'Qual a diferença entre exportar SVG e PNG?',
    'faq.a3': 'O SVG é um formato vetorial que não perde resolução em nenhum tamanho, ideal para edição em Figma ou Illustrator. O PNG é uma imagem estática de alta definição pronta para slides e documentos.',
    'faq.q4': 'Posso colar dados diretamente do Excel ou Google Planilhas?',
    'faq.a4': 'Sim! Clique no botão "Colar CSV" e cole as células copiadas. O sistema reconhece separadores por vírgula ou tabulação automaticamente.',
    'faq.q5': 'Posso escolher as cores de cada barra ou fatia?',
    'faq.a5': 'Sim, cada linha possui um seletor de cores próprio para que você possa combinar com sua paleta de marca ou tema de apresentação.',
    'faq.q6': 'Como posso apoiar o MakeCharts?',
    'faq.a6': 'Se o MakeCharts te ajudou, você pode apoiar o desenvolvedor pagando um café através do botão "Apoiar o Desenvolvedor". Sua ajuda mantém a ferramenta gratuita!',

    // Footer
    'footer.brandDesc': 'O gerador rápido e focado em privacidade de gráficos de pizza e barras para criadores e analistas.',
    'footer.privacyPledge': '100% no navegador. Sem telemetria. Sem servidores.',
    'footer.supportPrompt': 'Gostou da ferramenta? Apoie a manutenção:',
    'footer.supportButton': 'Pague-me um Café',
    'footer.copyright': 'Todos os direitos reservados. Gratuito para uso pessoal e comercial.',
    'footer.builtWith': 'Construído com Astro, React e Recharts.',
  },

  de: {
    // Meta & Site
    'site.title': 'MakeCharts | Kostenloser Online Kreis- & Balkendiagramm-Generator',
    'site.description': 'Ein ultra-minimalistischer, leistungsstarker Diagramm-Generator direkt im Browser. Erstellen Sie Kreis- und Balkendiagramme mit sofortigem SVG- und PNG-Export. 100 % privat.',
    
    // Navigation
    'nav.brand': 'MakeCharts',
    'nav.tagline': 'Kostenloser Online Diagramm-Generator',
    'nav.themeToggle': 'Design wechseln',
    'nav.selectLanguage': 'Sprache wählen',
    'nav.support': 'Entwickler unterstützen',
    'nav.supportTooltip': 'Spendieren Sie einen Kaffee zur Unterstützung kostenloser Tools',
    'nav.github': 'GitHub',

        // Breadcrumbs
    'breadcrumbs.home': 'Startseite',
    'breadcrumbs.studio': 'Diagramm-Studio',

    // Hero
    'hero.badge': '100% Browserbasiert & Kostenlos',
    'hero.title': 'Kostenloser Online Kreis- & Balkendiagramm-Generator',
    'hero.subtitle': 'Erstellen Sie gestochen scharfe Vektordiagramme direkt im Browser. Geben Sie Zahlen manuell ein oder fügen Sie CSV-Daten ein. Laden Sie hochauflösende SVG- oder PNG-Dateien ohne Server-Uploads herunter.',
    'hero.cta': 'Jetzt Diagramm Erstellen',
    'hero.privacyBadge': 'Keine Server-Uploads · 100% Privat',

    // Workspace - Controls & Settings
    'workspace.title': 'Diagramm-Studio',
    'workspace.chartTypeTitle': 'Diagrammtyp',
    'workspace.typePie': 'Kreisdiagramm',
    'workspace.typeDonut': 'Donut-Diagramm',
    'workspace.typeBar': 'Balkendiagramm',
    'workspace.typeHorizontalBar': 'Horizontale Balken',
    'workspace.chartTitleLabel': 'Diagrammtitel',
    'workspace.chartTitlePlaceholder': 'z. B. Q3 Umsatz nach Kategorie',
    'workspace.showLegend': 'Legende anzeigen',
    'workspace.showGrid': 'Gitterlinien anzeigen',
    'workspace.showWatermark': 'Wasserzeichen',

    // Workspace - Data Table
    'workspace.dataEditorTitle': 'Dateneingabe',
    'workspace.dataEditorSubtitle': 'Kategorien, Zahlenwerte und benutzerdefinierte Farben hinzufügen',
    'workspace.colLabel': 'Kategorie / Beschriftung',
    'workspace.colValue': 'Wert',
    'workspace.colColor': 'Farbe',
    'workspace.colActions': 'Aktion',
    'workspace.addRow': 'Zeile hinzufügen',
    'workspace.pasteCsv': 'CSV / TSV einfügen',
    'workspace.clearAll': 'Alles löschen',
    'workspace.loadSample': 'Beispieldaten laden',
    'workspace.deleteRow': 'Zeile löschen',
    'workspace.total': 'Gesamt',
    'workspace.rowsCount': 'Zeilen',

    // Workspace - CSV Modal
    'workspace.csvModalTitle': 'Daten einfügen (CSV / TSV)',
    'workspace.csvModalDesc': 'Kopieren Sie Daten aus Excel, Google Sheets oder CSV-Dateien. Erste Spalte für Beschriftungen, zweite für Zahlen.',
    'workspace.csvModalPlaceholder': 'Kategorie, Wert\nMarketing, 3400\nEntwicklung, 5200\nDesign, 2100\nBetrieb, 1800',
    'workspace.csvModalImport': 'Daten importieren',
    'workspace.csvModalCancel': 'Abbrechen',
    'workspace.csvModalError': 'Gültige Zeilen konnten nicht verarbeitet werden. Bitte stellen Sie sicher, dass jede Zeile Text und Zahl enthält.',

    // Workspace - Live Preview & Export
    'workspace.previewTitle': 'Live-Vorschau',
    'workspace.exportSvg': 'SVG exportieren',
    'workspace.exportPng': 'PNG exportieren',
    'workspace.exporting': 'Exportiere...',
    'workspace.downloadStarted': 'Diagramm erfolgreich heruntergeladen!',
    'workspace.emptyStateTitle': 'Keine Daten vorhanden',
    'workspace.emptyStateDesc': 'Fügen Sie mindestens eine Datenzeile mit einem positiven Wert hinzu oder laden Sie Beispieldaten.',
    'workspace.sampleBrowserTitle': 'Browser-Marktanteile',
    'workspace.sampleExpensesTitle': 'Monatliches Projektbudget',

    // Features
    'features.title': 'Entwickelt für Tempo, Datenschutz & Präzision',
    'features.subtitle': 'Erstellen Sie publikationsreife Grafiken in Sekundenschnelle ohne Barrieren.',
    'features.privacyTitle': '100% Lokal & Privat',
    'features.privacyDesc': 'Kein Tracking, keine Cloud-Speicherung. Ihre Daten verlassen zu keinem Zeitpunkt Ihren Browser.',
    'features.svgTitle': 'Scharfer Vektor-SVG-Export',
    'features.svgDesc': 'Laden Sie verlustfreie SVG-Vektordateien herunter, perfekt für Figma, Adobe Illustrator und PDF-Drucke.',
    'features.pngTitle': 'Hochauflösendes PNG',
    'features.pngDesc': 'Exportieren Sie gestochen scharfe PNG-Bilder für Folien, wissenschaftliche Berichte und Präsentationen.',
    'features.csvTitle': 'Sofortiges Einfügen von Tabellen',
    'features.csvDesc': 'Kopieren Sie Tabellen direkt aus Excel oder Google Sheets und visualisieren Sie Dutzende Datenpunkte sofort.',
    'features.responsiveTitle': 'Responsiv & Interaktiv',
    'features.responsiveDesc': 'Flüssiges Layout mit dynamischen Tooltips und Echtzeit-Farbaktualisierung auf Mobilgeräten und Desktops.',
    'features.noLogin.title': 'Keine Registrierung erforderlich',
    'features.noLogin.desc': 'Keine Anmeldung, keine Kreditkarte und keine Wasserzeichen. Vollkommen kostenfrei für private und gewerbliche Nutzung.',
    'features.freeTitle': 'Keine Registrierung erforderlich',
    'features.freeDesc': 'Keine Anmeldung, keine Kreditkarte und keine Wasserzeichen. Vollkommen kostenfrei für private und gewerbliche Nutzung.',

    // How It Works
    'howItWorks.title': 'So funktioniert es',
    'howItWorks.subtitle': 'Drei einfache Schritte zur fertigen Grafik',
    'howItWorks.step1Title': '1. Daten eingeben oder einfügen',
    'howItWorks.step1Desc': 'Erfassen Sie Kategorien und Zahlen in der Tabelle oder fügen Sie kopierte Tabellendaten ein.',
    'howItWorks.step2Title': '2. Diagrammtyp & Stil wählen',
    'howItWorks.step2Desc': 'Wählen Sie Kreis-, Donut-, Balken- oder Horizontalbalkendiagramm. Passen Sie Farben und Titel an.',
    'howItWorks.step3Title': '3. Vektor oder Bild herunterladen',
    'howItWorks.step3Desc': 'Laden Sie das SVG für Grafikprogramme oder ein hochauflösendes PNG für Präsentationen herunter.',

    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Wissenswertes über MakeCharts, Datenschutz und Exportformate.',
    'faq.q1': 'Ist MakeCharts wirklich kostenlos?',
    'faq.a1': 'Ja, MakeCharts ist zu 100 % kostenlos ohne versteckte Gebühren, Abos oder Wasserzeichen. Sie können Grafiken privat und kommerziell nutzen.',
    'faq.q2': 'Sind meine sensiblen Geschäftsdaten sicher?',
    'faq.a2': 'Ja, Ihre Daten sind absolut sicher. MakeCharts läuft vollständig im Client-Browser via React. Es werden keinerlei Daten an Server gesendet.',
    'faq.q3': 'Was ist der Unterschied zwischen SVG und PNG?',
    'faq.a3': 'SVG ist ein Vektorformat, das beliebig vergrößert werden kann, ohne pixelig zu werden – perfekt für Design-Programme. PNG ist ein hochauflösendes Bild für Dokumente und Präsentationen.',
    'faq.q4': 'Kann ich Daten direkt aus Excel oder Google Tabellen einfügen?',
    'faq.a4': 'Ja! Klicken Sie auf "CSV / TSV einfügen" und fügen Sie die kopierten Zeilen ein. Der Parser verarbeitet Tabulatoren und Kommas automatisch.',
    'faq.q5': 'Kann ich die Farben einzelner Balken oder Segmente anpassen?',
    'faq.a5': 'Ja, jede Datenzeile verfügt über einen eigenen Farbwähler, damit Sie Farben an Ihr Corporate Design anpassen können.',
    'faq.q6': 'Wie kann ich MakeCharts unterstützen?',
    'faq.a6': 'Wenn Ihnen das Tool Zeit spart, können Sie den Entwickler mit einem Kaffee über "Entwickler unterstützen" motivieren. Vielen Dank!',

    // Footer
    'footer.brandDesc': 'Der schnelle, datenschutzorientierte Diagramm-Generator für Analysten, Kreative und Studierende.',
    'footer.privacyPledge': '100% im Browser. Keine Telemetrie. Keine Server.',
    'footer.supportPrompt': 'Gefällt Ihnen MakeCharts? Unterstützen Sie die Weiterentwicklung:',
    'footer.supportButton': 'Spendieren Sie einen Kaffee',
    'footer.copyright': 'Alle Rechte vorbehalten. Frei für kommerzielle und private Nutzung.',
    'footer.builtWith': 'Erstellt mit Astro, React & Recharts.',
  },

  fr: {
    // Meta & Site
    'site.title': 'MakeCharts | Générateur Gratuit de Graphiques Camembert et Barres',
    'site.description': 'Un générateur de graphiques ultra-minimaliste, performant et 100% exécuté dans le navigateur. Créez des diagrammes circulaires et à barres avec export immédiat en SVG et PNG. 100% privé.',
    
    // Navigation
    'nav.brand': 'MakeCharts',
    'nav.tagline': 'Générateur de Graphiques en Ligne Gratuit',
    'nav.themeToggle': 'Changer de thème',
    'nav.selectLanguage': 'Choisir la langue',
    'nav.support': 'Soutenir le Développeur',
    'nav.supportTooltip': 'Offrez-moi un café pour soutenir les outils libres',
    'nav.github': 'GitHub',

        // Breadcrumbs
    'breadcrumbs.home': 'Accueil',
    'breadcrumbs.studio': 'Studio de Graphiques',

    // Hero
    'hero.badge': '100% Navigateur & Gratuit',
    'hero.title': 'Générateur Gratuit de Graphiques Circulaires & Barres',
    'hero.subtitle': 'Générez des graphiques vectoriels nets instantanément dans votre navigateur. Saisissez des données manuellement ou collez du CSV. Téléchargez des fichiers SVG ou PNG haute résolution sans aucun envoi sur serveur.',
    'hero.cta': 'Créer un Graphique',
    'hero.privacyBadge': 'Zéro transfert serveur · 100% Privé',

    // Workspace - Controls & Settings
    'workspace.title': 'Studio Graphique',
    'workspace.chartTypeTitle': 'Type de Graphique',
    'workspace.typePie': 'Diagramme Circulaire (Camembert)',
    'workspace.typeDonut': 'Diagramme en Anneau (Donut)',
    'workspace.typeBar': 'Diagramme à Barres',
    'workspace.typeHorizontalBar': 'Barres Horizontales',
    'workspace.chartTitleLabel': 'Titre du Graphique',
    'workspace.chartTitlePlaceholder': 'ex., Chiffre d\'affaires T3 par catégorie',
    'workspace.showLegend': 'Afficher la Légende',
    'workspace.showGrid': 'Afficher la Grille',
    'workspace.showWatermark': 'Filigrane',

    // Workspace - Data Table
    'workspace.dataEditorTitle': 'Saisie des Données',
    'workspace.dataEditorSubtitle': 'Ajoutez des catégories, des valeurs numériques et des couleurs',
    'workspace.colLabel': 'Catégorie / Libellé',
    'workspace.colValue': 'Valeur',
    'workspace.colColor': 'Couleur',
    'workspace.colActions': 'Action',
    'workspace.addRow': 'Ajouter une Ligne',
    'workspace.pasteCsv': 'Coller CSV / TSV',
    'workspace.clearAll': 'Tout Effacer',
    'workspace.loadSample': 'Charger un Exemple',
    'workspace.deleteRow': 'Supprimer la ligne',
    'workspace.total': 'Total',
    'workspace.rowsCount': 'lignes',

    // Workspace - CSV Modal
    'workspace.csvModalTitle': 'Coller des Données (CSV / TSV)',
    'workspace.csvModalDesc': 'Collez des données copiées depuis Excel, Google Sheets ou des fichiers CSV. Première colonne pour les libellés, deuxième pour les nombres.',
    'workspace.csvModalPlaceholder': 'Catégorie, Valeur\nMarketing, 3400\nIngénierie, 5200\nDesign, 2100\nOpérations, 1800',
    'workspace.csvModalImport': 'Importer les Données',
    'workspace.csvModalCancel': 'Annuler',
    'workspace.csvModalError': 'Impossible de traiter les données. Vérifiez que chaque ligne contient un libellé et un nombre valide.',

    // Workspace - Live Preview & Export
    'workspace.previewTitle': 'Aperçu en Direct',
    'workspace.exportSvg': 'Exporter en SVG',
    'workspace.exportPng': 'Exporter en PNG',
    'workspace.exporting': 'Exportation...',
    'workspace.downloadStarted': 'Graphique téléchargé avec succès !',
    'workspace.emptyStateTitle': 'Aucune Donnée à Afficher',
    'workspace.emptyStateDesc': 'Ajoutez au moins une ligne avec une valeur positive ou chargez les données d\'exemple pour afficher le graphique.',
    'workspace.sampleBrowserTitle': 'Parts de Marché des Navigateurs',
    'workspace.sampleExpensesTitle': 'Budget Mensuel du Projet',

    // Features
    'features.title': 'Conçu pour la Rapidité, la Confidentialité & la Précision',
    'features.subtitle': 'Obtenez des graphiques prêts pour publication en quelques secondes et sans contrainte.',
    'features.privacyTitle': '100% Local & Confidentiel',
    'features.privacyDesc': 'Zéro suivi, zéro hébergement cloud. Vos données ne quittent jamais votre navigateur.',
    'features.svgTitle': 'Export Vectoriel SVG Ultra-Net',
    'features.svgDesc': 'Téléchargez des graphiques SVG vectoriels qui s\'agrandissent sans pixellisation, parfaits pour Figma, Illustrator et PDF.',
    'features.pngTitle': 'PNG Haute Résolution',
    'features.pngDesc': 'Exportez des images PNG prêtes pour vos présentations, rapports d\'entreprise ou documents académiques.',
    'features.csvTitle': 'Collage Instantané depuis Tableur',
    'features.csvDesc': 'Copiez vos cellules depuis Excel ou Google Sheets et générez des dizaines de barres en un clic.',
    'features.responsiveTitle': 'Interactif & Réactif',
    'features.responsiveDesc': 'Mise en page fluide avec infobulles au survol et rafraîchissement des couleurs en temps réel.',
    'features.noLogin.title': 'Aucune Inscription Requise',
    'features.noLogin.desc': 'Sans compte, sans carte bancaire et sans filigrane. Entièrement gratuit pour usage personnel et commercial.',
    'features.freeTitle': 'Aucune Inscription Requise',
    'features.freeDesc': 'Sans compte, sans carte bancaire et sans filigrane. Entièrement gratuit pour usage personnel et commercial.',

    // How It Works
    'howItWorks.title': 'Comment Ça Marche',
    'howItWorks.subtitle': 'Trois étapes simples pour créer et exporter vos visualisations',
    'howItWorks.step1Title': '1. Saisissez ou Collez vos Données',
    'howItWorks.step1Desc': 'Renseignez manuellement les libellés et chiffres, ou collez directement des lignes depuis vos tableurs.',
    'howItWorks.step2Title': '2. Choisissez Graphique & Style',
    'howItWorks.step2Desc': 'Sélectionnez Camembert, Donut, Barres Verticales ou Horizontales. Personnalisez les couleurs et le titre.',
    'howItWorks.step3Title': '3. Téléchargez SVG ou PNG',
    'howItWorks.step3Desc': 'Exportez en SVG vectoriel pour vos logiciels de création, ou en PNG haute définition pour vos présentations.',

    // FAQ
    'faq.title': 'Foire Aux Questions',
    'faq.subtitle': 'Tout ce qu\'il faut savoir sur MakeCharts et vos téléchargements.',
    'faq.q1': 'MakeCharts est-il totalement gratuit ?',
    'faq.a1': 'Oui, MakeCharts est 100% gratuit, sans frais cachés, sans abonnement et sans aucun filigrane. Usage personnel et commercial autorisé.',
    'faq.q2': 'Mes données d\'entreprise sont-elles protégées ?',
    'faq.a2': 'Absolument. MakeCharts s\'exécute intégralement dans votre navigateur avec React. Aucune donnée n\'est envoyée sur des serveurs distants.',
    'faq.q3': 'Quelle est la différence entre l\'export SVG et PNG ?',
    'faq.a3': 'Le SVG est un fichier vectoriel qui ne perd jamais sa netteté quelle que soit la taille, idéal pour les designers. Le PNG est une image haute définition universelle pour Word ou PowerPoint.',
    'faq.q4': 'Puis-je coller des données depuis Excel ou Google Sheets ?',
    'faq.a4': 'Oui ! Cliquez sur "Coller CSV / TSV" et collez votre tableau copié. L\'outil reconnaît automatiquement les tabulations et les virgules.',
    'faq.q5': 'Puis-je personnaliser la couleur de chaque élément ?',
    'faq.a5': 'Oui, chaque ligne possède son propre sélecteur de couleur hexadécimal afin d\'adapter le graphique à votre charte graphique.',
    'faq.q6': 'Comment soutenir ce projet ?',
    'faq.a6': 'Si MakeCharts vous fait gagner du temps, vous pouvez soutenir le développeur en lui offrant un café via le bouton "Soutenir le Développeur". Merci pour votre soutien !',

    // Footer
    'footer.brandDesc': 'Le générateur rapide et respectueux de la vie privée pour créateurs, analystes et étudiants.',
    'footer.privacyPledge': '100% navigateur. Zéro télémétrie. Zéro serveur.',
    'footer.supportPrompt': 'Vous appréciez cet outil ? Soutenez son développement :',
    'footer.supportButton': 'Offrez-moi un Café',
    'footer.copyright': 'Tous droits réservés. Gratuit pour usage commercial et personnel.',
    'footer.builtWith': 'Conçu avec Astro, React & Recharts.',
  },

  ja: {
    // Meta & Site
    'site.title': 'MakeCharts | 無料オンライン円グラフ・棒グラフ作成ツール',
    'site.description': 'ブラウザ上で100%完結する超軽量・高機能チャートジェネレーター。円グラフや棒グラフを直感的に作成し、高解像度SVG/PNGとして即座にダウンロード可能。サーバー送信ゼロで完全プライベート。',
    
    // Navigation
    'nav.brand': 'MakeCharts',
    'nav.tagline': '無料オンライングラフジェネレーター',
    'nav.themeToggle': 'テーマ切り替え',
    'nav.selectLanguage': '言語を選択',
    'nav.support': '開発者を支援する',
    'nav.supportTooltip': '無料ツール維持のためコーヒーをおごる',
    'nav.github': 'GitHub',

        // Breadcrumbs
    'breadcrumbs.home': 'ホーム',
    'breadcrumbs.studio': 'チャートスタジオ',

    // Hero
    'hero.badge': '100% ブラウザ完結＆完全無料',
    'hero.title': '無料オンライン円グラフ＆棒グラフ作成ツール',
    'hero.subtitle': 'ブラウザ上で鮮明なベクターグラフを即座に作成。数値を直接入力するかCSVデータを貼り付けるだけ。サーバー送信ゼロで高解像度SVGやPNGをダウンロードできます。',
    'hero.cta': '今すぐグラフを作成',
    'hero.privacyBadge': 'サーバー送信なし · 100% プライベート',

    // Workspace - Controls & Settings
    'workspace.title': 'チャートスタジオ',
    'workspace.chartTypeTitle': 'グラフの種類',
    'workspace.typePie': '円グラフ (Pie)',
    'workspace.typeDonut': 'ドーナツグラフ (Donut)',
    'workspace.typeBar': '縦棒グラフ (Bar)',
    'workspace.typeHorizontalBar': '横棒グラフ (Horizontal Bar)',
    'workspace.chartTitleLabel': 'グラフのタイトル',
    'workspace.chartTitlePlaceholder': '例: 第3四半期 カテゴリ別売上',
    'workspace.showLegend': '凡例を表示',
    'workspace.showGrid': 'グリッド線を表示',
    'workspace.showWatermark': '透かし',

    // Workspace - Data Table
    'workspace.dataEditorTitle': 'データ入力',
    'workspace.dataEditorSubtitle': 'カテゴリ名、数値、カラーを自由にカスタマイズ',
    'workspace.colLabel': 'カテゴリ名 / ラベル',
    'workspace.colValue': '数値',
    'workspace.colColor': 'カラー',
    'workspace.colActions': '操作',
    'workspace.addRow': '行を追加',
    'workspace.pasteCsv': 'CSV / TSV 貼り付け',
    'workspace.clearAll': 'すべてクリア',
    'workspace.loadSample': 'サンプル読み込み',
    'workspace.deleteRow': '行を削除',
    'workspace.total': '合計',
    'workspace.rowsCount': '行',

    // Workspace - CSV Modal
    'workspace.csvModalTitle': 'データの貼り付け (CSV / TSV)',
    'workspace.csvModalDesc': 'Excel、Googleスプレッドシート、CSVからコピーしたデータを貼り付けてください。1列目がラベル、2列目が数値です。',
    'workspace.csvModalPlaceholder': 'カテゴリ, 数値\nマーケティング, 3400\nエンジニアリング, 5200\nデザイン, 2100\n運用, 1800',
    'workspace.csvModalImport': 'データをインポート',
    'workspace.csvModalCancel': 'キャンセル',
    'workspace.csvModalError': '有効なデータ行を解析できませんでした。各行にラベルと数値があることを確認してください。',

    // Workspace - Live Preview & Export
    'workspace.previewTitle': 'リアルタイムプレビュー',
    'workspace.exportSvg': 'SVGを出力',
    'workspace.exportPng': 'PNGを出力',
    'workspace.exporting': '出力中...',
    'workspace.downloadStarted': 'グラフを正常にダウンロードしました！',
    'workspace.emptyStateTitle': '表示できるデータがありません',
    'workspace.emptyStateDesc': '正の数値を含むデータ行を1行以上追加するか、サンプルデータを読み込んでください。',
    'workspace.sampleBrowserTitle': '世界のブラウザ市場シェア',
    'workspace.sampleExpensesTitle': '月間プロジェクト予算配分',

    // Features
    'features.title': 'スピード、プライバシー、高精度を追求',
    'features.subtitle': '登録不要で、出版・プレゼン品質のグラフを数秒で手軽に作成できます。',
    'features.privacyTitle': '100% ローカル＆プライベート',
    'features.privacyDesc': 'トラッキングやクラウド保存は一切なし。データはお使いのブラウザ内部でのみ処理されます。',
    'features.svgTitle': '鮮明なベクターSVG出力',
    'features.svgDesc': '拡大しても劣化しないSVGベクター形式をダウンロード。Figma、Illustrator、PDF印刷に最適です。',
    'features.pngTitle': '高解像度Retina対応PNG',
    'features.pngDesc': 'プレゼンテーション資料やスライド、学術論文、SNSにそのまま使える高画質PNG画像を出力。',
    'features.csvTitle': 'スプレッドシートから直接コピペ',
    'features.csvDesc': 'ExcelやGoogleスプレッドシートのセル範囲をそのまま貼り付けるだけで、数十行のデータを一瞬でグラフ化。',
    'features.responsiveTitle': 'レスポンシブ＆インタラクティブ',
    'features.responsiveDesc': 'マウスホバーによるツールチップやリアルタイムカラー変更など、PC・スマホ問わず快適に動作。',
    'features.noLogin.title': 'アカウント登録一切不要',
    'features.noLogin.desc': 'ログインもクレジットカードも透かし（ウォーターマーク）も不要。商用・個人問わず完全無料です。',
    'features.freeTitle': 'アカウント登録一切不要',
    'features.freeDesc': 'ログインもクレジットカードも透かし（ウォーターマーク）も不要。商用・個人問わず完全無料です。',

    // How It Works
    'howItWorks.title': '使い方',
    'howItWorks.subtitle': 'わずか3つの簡単ステップでグラフを作成・出力',
    'howItWorks.step1Title': '1. データを入力または貼り付け',
    'howItWorks.step1Desc': 'テーブルにラベルと数値を直接入力するか、スプレッドシートから行をそのまま貼り付けます。',
    'howItWorks.step2Title': '2. グラフの種類とスタイルを選択',
    'howItWorks.step2Desc': '円グラフ、ドーナツ、縦棒、横棒を選択。タイトルを設定し、お好みのカラーに調整します。',
    'howItWorks.step3Title': '3. ベクターまたは画像をダウンロード',
    'howItWorks.step3Desc': 'デザイン作業用のSVG、またはスライドやドキュメント用の高解像度PNGをワンクリック保存。',

    // FAQ
    'faq.title': 'よくある質問',
    'faq.subtitle': 'MakeChartsの機能、プライバシー、出力に関するQ&A',
    'faq.q1': 'MakeChartsは本当に無料ですか？',
    'faq.a1': 'はい、MakeChartsは隠れた課金やサブスクリプション、透かしの一切ない完全無料ツールです。個人利用・商用利用ともに無制限でご利用いただけます。',
    'faq.q2': '機密データや業務上の数値は安全ですか？',
    'faq.a2': '完全に安全です。MakeChartsはReactを用いてすべてお使いのブラウザ端末内で動作します。入力された数値やラベルが外部サーバーへ送信・保存されることは決してありません。',
    'faq.q3': 'SVGとPNGのエクスポートにはどんな違いがありますか？',
    'faq.a3': 'SVGは拡大しても画質が粗くならないベクター形式で、IllustratorやFigmaでの編集やウェブ埋め込みに最適です。PNGはPowerPointやWord、メール等にそのまま貼れる高解像度画像です。',
    'faq.q4': 'ExcelやGoogleスプレッドシートからデータをコピペできますか？',
    'faq.a4': 'はい！「CSV / TSV 貼り付け」ボタンを押し、コピーしたセルデータを貼り付けるだけで、カンマ区切りやタブ区切りを自動検出して読み込みます。',
    'faq.q5': '棒やスライスの色を自由にカスタマイズできますか？',
    'faq.a5': 'はい、各データ行ごとにカラーピッカーを用意しており、ブランドカラーや好みのカラーコード（HEX）を自由に変更できます。',
    'faq.q6': '開発者を支援するにはどうすればよいですか？',
    'faq.a6': 'MakeChartsが役立ちましたら、上部の「開発者を支援する」ボタン（Buy Me a Coffee）からコーヒー1杯分のサポートをいただけると励みになります！',

    // Footer
    'footer.brandDesc': 'クリエイター、アナリスト、学生のための高速・完全プライベートなグラフ作成ツール。',
    'footer.privacyPledge': '100% ブラウザ処理。テレメトリなし。サーバー保存なし。',
    'footer.supportPrompt': 'ツールが役に立ちましたか？ 開発の継続をサポート：',
    'footer.supportButton': 'コーヒーをおごる',
    'footer.copyright': 'All rights reserved. 商用および個人利用無料。',
    'footer.builtWith': 'Built with Astro, React & Recharts.',
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];
