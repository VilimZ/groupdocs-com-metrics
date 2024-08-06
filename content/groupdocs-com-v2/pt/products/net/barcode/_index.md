---
title: API de código de barras .NET para ler, reconhecer e gerar códigos de barras
description: Use a API C# .NET Barcode para ler, reconhecer e gerar códigos de barras 1D e 2D. Crie gerador de código QR ou aplicativos de scanner em ASP.NET e VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de código de barras .NET para ler, reconhecer e gerar códigos de barras e códigos QR"
  inheadertext="Gere códigos de barras em .NET com precisão inigualável e digitalize, leia e reconheça códigos de barras lineares, 2D e postais de diferentes simbologias usando a API de código de barras C# .NET. Ele suporta digitalização e detecção de códigos de barras e códigos QR nos formatos JPG, PNG, GIF, BMP e TIFF."
  ctabtn="Baixar Teste Gratuito"
  ctabtn="Baixar Teste Gratuito"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas as APIs"
  bchomelink="/"
  bchome="Lar"
  bcpage="código de barras"
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
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="Preços" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Crie aplicativos de reconhecimento de código de barras e gerador de código QR em C# .NET"
   subtext="Aspose.BarCode for .NET é uma API de geração e reconhecimento de código de barras de alto desempenho que permite aos desenvolvedores .NET criar, escanear, ler, detectar e exportar diferentes tipos de códigos de barras 1D (lineares), 2D e postais. Com um excelente conjunto de recursos, esta API geradora de código de barras .NET oferece precisão imaculada ao ler ou escanear as imagens de código de barras em PNG, BMP, JPG, GIF, TIFF e outros formatos. Além disso, você também pode exportar os códigos de barras para imagens raster populares ou arquivos vetoriais EMF e SVG. Juntamente com os recursos de leitura de código de barras e código QR, o Aspose.BarCode para .NET permite manipular vários elementos da aparência do código de barras, incluindo a qualidade da imagem, tamanho do arquivo, plano de fundo e cor da barra, qualidade e resolução da imagem, ângulo de rotação, legendas e muitos mais."
   subtext2="Usando a API de código de barras para .NET, você pode integrar rápida e facilmente a funcionalidade do scanner de código QR em suas soluções de processamento de código de barras .NET existentes ou criar aplicativos de reconhecimento de código de barras abrangentes em C#, ASP.NET ou VB.NET do zero. A biblioteca Aspose.BarCode para .NET oferece suporte a mais de 50 simbologias lineares, 2D e de códigos de barras postais, como Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417 e Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Começando</h2>
   <p>Antes de configurar a API de código de barras .NET, verifique os pré-requisitos na página <a href="https://docs.aspose.com/barcode/net/system-requirements/">Requisitos do sistema</a> para garantir uma configuração de API e uma experiência de usuário suaves.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode para instalação .NET"
>}}
<p>Visite a <a href="https://releases.aspose.com/barcode/net/">seção de downloads</a> para baixar diretamente as DLLs ou o instalador MSI da API de geração e reconhecimento de código de barras .NET. Você também pode instalar a API usando o <a href="https://www.nuget.org/packages/Aspose.BarCode/">pacote NuGet</a>. Por favor, encontre abaixo o comando para o console do gerenciador de pacotes:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Como gerar códigos QR em .NET e ler códigos de barras de imagens"
featuretext="Com o Aspose.BarCode para .NET, os desenvolvedores podem incorporar a capacidade de geração de código QR em seus aplicativos de processamento de código de barras .NET. Além disso, também é possível reconhecer diferentes tipos de códigos de barras de PNG, JPEG, BMP e outras imagens. Você pode digitalizar e ler vários tipos de código de barras do mesmo arquivo de imagem." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Gere Códigos QR Rapidamente em .NET"
>}}
<p>A API de código de barras .NET suporta a geração de códigos QR com diferentes tipos de codificação. Você pode adicionar essa funcionalidade aos seus aplicativos de manipulação de código de barras e aprimorar ainda mais suas ofertas. Verifique as seguintes informações e a codificação C# para gerar códigos QR de forma rápida e fácil usando a biblioteca Aspose.BarCode for .NET:</p>
<ul>
   <li>Instancie a classe <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a> e especifique o <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> e o texto de entrada.</li>
   <li>Defina a versão do código QR e o tipo de codificação.</li>
   <li>Gere e salve a imagem do QR Code no formato PNG.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Initialize an instance of BarcodeGenerator class
BarcodeGenerator gen = new BarcodeGenerator(EncodeTypes.QR, "Aspose");
gen.Parameters.Barcode.XDimension.Pixels = 4;
// Set Auto version
gen.Parameters.Barcode.QR.QrVersion = QRVersion.Auto;
//Set ForceMicroQR QR encode type
gen.Parameters.Barcode.QR.QrEncodeType = QREncodeType.ForceMicroQR;
gen.Save(dataDir + "QREncodeTypeForceMicroQR.png", BarCodeImageFormat.Png);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Ler códigos de barras de imagens em .NET"
>}}
<p>Aspose.BarCode para API .NET facilita a leitura de códigos de barras de diferentes simbologias de PNG, JPEG, BMP, GIF e outros formatos de arquivo de imagem. Esta API de geração e reconhecimento de código de barras .NET suporta digitalização e leitura <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">vários códigos de barras da mesma imagem</a>. Verifique as seguintes informações para obter mais ajuda:</p>
<ul>
   <li>Carregue a imagem do código de barras de origem usando a classe <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a>.</li>
   <li>Chame o método <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a> para obter resultados de reconhecimento no <a href ="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> objeto de classe.</li>
   <li>Faça um loop pelos resultados obtidos e exiba o tipo e o texto do código de barras.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Initialize barcode reader
BarCodeReader reader = new BarCodeReader("C:\\Files\\BarCode\\Sample.png");
// Read the barcode and show the results
foreach(BarCodeResult result in reader.ReadBarCodes()) 
{
    Console.Out.WriteLine("CodeText: " + result.CodeText);
    Console.Out.WriteLine("Symbology type: " + result.CodeType);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Visite a página <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">Exemplos do GitHub</a> para obter mais exemplos funcionais do . API de código de barras NET. Se você deseja digitalizar, reconhecer e gerar códigos de barras 1D, 2D e postais ou códigos QR em tempo real usando seus dispositivos móveis, verifique o <a href="https://products.aspose.app/barcode/family ">aplicativos online gratuitos</a> de Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Fácil integração e operações avançadas"
featuretext="Aspose.BarCode para .NET permite operações superfáceis que requerem apenas algumas linhas de codificação .NET para começar a gerar, ler e reconhecer diferentes tipos de códigos de barras. Como um desenvolvedor .NET, você pode facilmente integrar a API do gerador de código de barras .NET com qualquer um dos seus aplicativos .NET. Um dos melhores recursos desta biblioteca é a capacidade de ler códigos de barras danificados e códigos QR usando algoritmos intrincados e mecanismos de filtragem, permitindo que você fique por dentro de suas necessidades de processamento de código de barras."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Perguntas frequentes"
   >}}
   {{< products/faq-block
   faqquery="1. Como posso gerar códigos de barras em .NET?"
   faqanswer="Gerar códigos de barras 1D, 2D e postais em .NET é rápido e fácil usando Aspose.BarCode para .NET API. Apenas algumas linhas de codificação .NET são necessárias para gerar o código de barras do tipo desejado." 
   >}}
   {{< products/faq-block
   faqquery="2. Quanto tempo leva para ler ou gerar códigos de barras?"
   faqanswer="A API de geração e reconhecimento de código de barras .NET funciona rapidamente e conclui suas solicitações rapidamente." 
   >}}
   {{< products/faq-block
   faqquery="3. É seguro processar arquivos usando a API .NET?"
   faqanswer="Você pode ter certeza da segurança de seus arquivos de código de barras enquanto os processa usando Aspose.BarCode para .NET API. Asseguramos a privacidade dos seus dados e tomamos todas as medidas necessárias para lhe proporcionar uma experiência de utilizador segura." 
   >}}
   {{< products/faq-block
   faqquery="4. Posso reconhecer e gerar códigos de barras no Mac OS, Windows ou Linux?"
   faqanswer="Sim, a API de código de barras para .NET funciona em diferentes sistemas operacionais, estruturas e ambientes operacionais. Você pode usá-lo na plataforma de sua escolha e não requer nenhuma instalação de software adicional para funcionar." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Ferramentas de geração e reconhecimento de código de barras"
   >}}
   {{< products/popularapp-anchor
anchorlink="Gerar código de barras PDF417"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gerar código de barras CODE39"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gerar código de barras CODE128"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gerar código QR"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gerar código de barras POSTNET"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Gerar Código de Barras PLANET"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconhecer código de barras CODE39"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconhecer código QR"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconhecer código de barras PDF417"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconhecer código de barras POSTNET"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconhecer código de barras AZTEC"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Reconhecer código de barras ISBN"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Procurando ajuda?"
bartext="Confira nossos canais de suporte para obter ajuda com suas perguntas relacionadas aos recursos e funcionamento da API do produto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="Referência da API"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Base de conhecimento"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Suporte Gratuito"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
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
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Gerar códigos de barras DotCode em C #"
resourcelisttext2="Gerar códigos de barras HIBC LIC em C #"
resourcelisttext3="Leia o código de barras da imagem TIFF de várias páginas em C #" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentação"
resourcealt="Documentação"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Recursos do Aspose.BarCode para .NET"
resourcelisttext2="Instalar Aspose.BarCode para pacote .NET NuGet"
resourcelisttext3="Aspose.BarCode para suporte pago .NET Helpdesk" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Base de conhecimento"
resourcealt="Amostras de código"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="Como girar a imagem do código de barras em C #"
resourcelisttext2="Como gerar imagem de código de barras em C #"
resourcelisttext3="Como converter código de barras para SVG em C #" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="Pronto para começar?" 
rtstext="Baixar Teste Gratuito" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="Ver todas as APIs" 
>}}
