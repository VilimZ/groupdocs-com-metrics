---
title: API de diagrama do .NET Visio para criar, editar e processar diagramas
description: C# .NET Visio Diagram API para criar, editar e processar VSD, VSX, VTX, VSDX e outros arquivos Visio. Converta diagramas em formatos PDF, PNG e HTML.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de diagrama do .NET Visio para criar, editar, exportar e processar diagramas"
  inheadertext="A API de diagramação .NET definitiva para gerar, manipular e converter perfeitamente formatos de arquivo do Microsoft Visio, como VSD, VDX, VSX, VSX, VSSX, VTX e VTSX com C#, ASP.NET e arquivo de diagrama Visio baseado em VB.NET aplicativos de processamento."
  ctabtn="Baixar Teste Gratuito"
  ctabtn="Baixar Teste Gratuito"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas as APIs"
  bchomelink="/"
  bchome="Lar"
  bcpage="Diagrama"
  bclink2="Produtos"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Visão geral" 
subnav2="#features"
subnavtxt2="Características" 
subnav3="#support"
subnavtxt3="Apoiar" 
subnav4="#examples"
subnavtxt4="Exemplos" 
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Preços" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Uma API .NET com todos os recursos para processar diagramas do Microsoft Visio"
   subtext="Aspose.Diagram for .NET é uma API de diagrama do Visio flexível e abrangente que permite aos desenvolvedores de software e aplicativos criar aplicativos poderosos de processamento de arquivos do Visio em C#, ASP.NET e VB.NET. Com a ajuda dessa API de diagramação .NET nativa, você pode criar aplicativos móveis, soluções de desktop e ferramentas para interfaces da Web para criar, modificar, transformar e exportar diagramas do Microsoft Visio. A biblioteca Aspose.Diagram para .NET oferece suporte a formatos de arquivo Visio populares, como VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM e VSSM. Você pode desenvolver soluções sofisticadas de conversão de diagramas de forma rápida e fácil usando esta API de diagrama .NET Visio e converter seus arquivos Visio em formatos de arquivo PDF, JPG, PNG, BMP, HTML, XPS, SVG e EMF."
   subtext2="Entre muitos de seus recursos avançados de processamento de arquivos do Visio, o Aspose.Diagram para .NET permite girar formas, recuperar informações sobre conectores e fontes, agrupar formas, injetar imagens em desenhos, adicionar novas páginas a desenhos do Visio e fazer muito mais. Além disso, você também pode desenhar retângulos, polilinhas, Bezier e muitas outras formas nas páginas do Visio."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Começando</h2>
   <p>Verifique os pré-requisitos na página <a href="https://docs.aspose.com/diagram/net/system-requirements/">Requisitos do sistema</a> antes de configurar a API de diagramação .NET para uma instalação otimizada e experiência de uso de API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram para instalação do .NET"
>}}
<p>Para instalar o Aspose.Diagram para .NET API, você pode baixar as DLLs ou o instalador MSI na <a href="https://releases.aspose.com/diagram/net/">seção de downloads</a>. Ou você pode usar o <a href="https://www.nuget.org/packages/Aspose.Diagram/">pacote NuGet</a> para configurar a API de diagrama do Visio para .NET. O comando para o console do gerenciador de pacotes é fornecido abaixo:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Como criar diagramas do Visio do zero e converter Visio para PDF no .NET"
featuretext="Os desenvolvedores podem criar diagramas do MS Visio de forma programática a partir do zero usando Aspose.Diagram para biblioteca .NET. Você pode inserir facilmente novas páginas e formas ou manipular diferentes propriedades de forma nos arquivos de diagrama criados. A conversão independente dos formatos de diagrama VSD e VSDX Visio em arquivos PDF em alta fidelidade também é suportada pela API de diagramação .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Crie diagramas do Visio do zero em .NET"
>}}
<p>Aspose.Diagram for .NET API é uma solução completa de manipulação de diagramas que permite aos desenvolvedores criar diagramas do Visio carregados com todos os elementos essenciais, como formas, fluxogramas, comentários e muito mais. Você pode usar a API de diagrama .NET para criar documentos do Visio do zero com a ajuda das etapas e informações fornecidas abaixo:</p>
<ul>
   <li>Verifique se existe o diretório para salvar o arquivo.</li>
   <li>Crie um diretório se ele não existir.</li>
   <li>Inicialize um objeto da classe <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Salve o diagrama como VSDX usando <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> método.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// The path to the documents directory.
string dataDir = RunExamples.GetDataDir_Diagrams();
// Create a directory if it is not already present.
bool IsExists = System.IO.Directory.Exists(dataDir);
if (!IsExists)
    System.IO.Directory.CreateDirectory(dataDir);
// Initialize a new Visio
Diagram diagram = new Diagram();
dataDir = dataDir + "CreateDiagram_out.vsdx";
// Save in the VSDX format
diagram.Save(dataDir, SaveFileFormat.VSDX);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Converta Diagramas do MS Visio para PDF no .NET"
>}}
<p>A conversão de arquivos para o formato PDF facilita o compartilhamento e o acesso em vários dispositivos. Aspose.Diagram para .NET API permite converter diagramas do Visio para o formato PDF dentro de seus aplicativos C# .NET. Você pode converter programaticamente VSD ou VSDX em PDF com alta qualidade de conversão. As etapas e informações a seguir o ajudarão a conseguir isso:</p>
<ul>
   <li>Inicialize o objeto de classe <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> para carregar o arquivo Visio de entrada a ser convertido.</li>
   <li>Crie uma instância do objeto de classe <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Defina as propriedades do arquivo, como contagem de páginas e índice de páginas.</li>
   <li>Salve o arquivo de saída como PDF.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load Visio diagram
Aspose.Diagram.Diagram diagram = new Aspose.Diagram.Diagram("Sample.vsd");
// Declare PdfSaveOptions object
Aspose.Diagram.Saving.PdfSaveOptions saveOptions = new Aspose.Diagram.Saving.PdfSaveOptions();
// Number of pages to render
saveOptions.PageCount = 2;
// Set first page index
saveOptions.PageIndex = 1;
// Save Visio diagram to PDF
diagram.Save("PDF_out.pdf", saveOptions);
Console.WriteLine("Done");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Mais exemplos funcionais de Aspose.Diagram para API .NET estão disponíveis em <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">Exemplos do GitHub </a> página. Oferecemos <a href="https://products.aspose.app/diagram/family/">aplicativos online gratuitos</a> do Aspose.Diagram para editar, visualizar, converter, mesclar, marca d'água, dividir e compactar Microsoft Arquivos de diagrama do Visio em tempo real usando seus dispositivos móveis ou desktop. Sinta-se à vontade para experimentar os aplicativos online para manipular diagramas do Visio de qualquer lugar.</p>
{{< products/product-feature-blocks
featureheading="Manipule e imprima arquivos do Visio de forma independente"
featuretext="Aspose.Diagram for .NET API permite acessar e ler dados de arquivos Microsoft Visio, processá-los e imprimir os arquivos processados em alta qualidade com múltiplas opções de impressão, usando codificação mínima. Você não precisa instalar o Microsoft Office ou o Microsoft Visio ao processar arquivos de diagrama do Visio com Aspose.Diagram para .NET, proporcionando uma experiência de usuário independente."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Perguntas frequentes"
   >}}
   {{< products/faq-block
   faqquery="1. Como posso converter diagramas do Microsoft Visio em .NET?"
   faqanswer="A conversão de diagramas do Visio em .NET é rápida e fácil usando o Aspose.Diagram para .NET API. Apenas algumas linhas de codificação .NET são necessárias para converter seus VSD, VSDX, VSX, VTX, VDX, VSDM e outros arquivos de diagrama em diferentes formatos de arquivo."
   >}}
   {{< products/faq-block
   faqquery="2. Quanto tempo leva para converter ou processar diagramas do Visio?"
   faqanswer="A API de diagramas .NET funciona rapidamente e conclui suas solicitações de conversão de diagramas rapidamente."
   >}}
   {{< products/faq-block
   faqquery="3. É seguro processar diagramas do Visio usando a API .NET?"
   faqanswer="Você pode ter certeza da segurança de seus arquivos de diagrama enquanto os processa usando Aspose.Diagram para .NET API. Asseguramos a privacidade dos seus dados e tomamos todas as medidas necessárias para lhe proporcionar uma experiência de utilizador segura."
   >}}
   {{< products/faq-block
   faqquery="4. Posso processar diagramas do MS Visio no Mac OS, Windows ou Linux?"
   faqanswer="Sim, a API de diagramação para .NET funciona em diferentes sistemas operacionais, estruturas e ambientes operacionais. Você pode usá-lo na plataforma de sua escolha e não requer nenhuma instalação de software adicional para funcionar."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Ferramentas de manipulação de diagramas do Visio"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD para VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX para VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX para VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM para VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD para TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX para BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM para JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX para PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD para PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX para PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX para PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM para PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Procurando ajuda?"
bartext="Confira nossos canais de suporte para obter ajuda com suas perguntas relacionadas aos recursos e funcionamento da API do produto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="Referência da API"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Base de conhecimento"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Suporte Gratuito"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Recursos"
sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://blog.aspose.com/"
resourcetitle="Blogues"
resourcealt="Blogues"
resourceimg="/images/blog1.svg"
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Converter imagem para Visio em C #"
resourcelisttext2="Criar gráfico ORG programaticamente em C #"
resourcelisttext3="Localizar e substituir texto em arquivos do Visio em C #"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentação"
resourcealt="Documentação"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Diagram para recursos .NET"
resourcelisttext2="Instalar Aspose.Diagram para pacote .NET NuGet"
resourcelisttext3="Aspose.Diagram para suporte pago .NET Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Base de conhecimento"
resourcealt="Amostras de código"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Como adicionar comentários aos desenhos do Visio em C#"
resourcelisttext2="Como mesclar arquivos do Visio em C #"
resourcelisttext3="Como converter VSX para HTML em C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto para começar?"
rtstext="Baixar Teste Gratuito"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas as APIs"
>}}
