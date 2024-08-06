---
title: API de processamento de imagem C# .NET para manipular e editar fotos
description: API de processamento de imagem .NET para criar, manipular e editar fotos em aplicativos C#, ASP.NET ou VB.NET. Converta imagens em formatos PDF, JPG, PNG e GIF.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de processamento de imagem C# .NET para carregar, manipular e editar fotos"
  inheadertext="Agilize o processamento de imagens usando essa API de criação de imagens .NET poderosa e rica em recursos. Crie, modifique e exporte imagens programaticamente ou aplique rapidamente diferentes efeitos e filtros às fotos. Você também pode converter suas imagens em PDF, JPG, PNG, GIF, SVG, PSD, BMP e outros formatos."
  ctabtn="Baixar Teste Gratuito"
  ctabtn="Baixar Teste Gratuito"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas as APIs"
  bchomelink="/"
  bchome="Lar"
  bcpage="Imagem"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Preços" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Edição e manipulação avançada de fotos em C# .NET"
   subtext="Aspose.Imaging for .NET é uma API de processamento de imagem robusta e flexível que permite aos desenvolvedores C#, ASP.NET e VB.NET criar, carregar, editar, manipular e converter formatos de arquivo de imagem conhecidos, como JPG, PNG, GIF , BMP, TIFF, EMG, SVG e WebP, entre outros. Com um amplo espectro de recursos suportados e excelentes recursos de processamento de imagem, o Aspose.Imaging para .NET é a solução ideal para desenvolvedores incorporarem a funcionalidade de manipulação de imagem em seus aplicativos .NET."
   subtext2="Transforme suas fotos em tons de cinza, ajuste o brilho e o contraste das imagens ou aplique outros efeitos e filtros com a ajuda desta API de edição de fotos .NET. Ele também oferece suporte para redimensionar, compactar, cortar, alinhar e mesclar imagens de forma programática. Você pode converter as imagens editadas em PDF, PSD, GIF, PNG, JPEG e outros tipos de arquivo. Essa API de processamento de imagem para .NET mantém você informado sobre suas necessidades de edição e manipulação de fotos."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Começando</h2>
   <p>Revise a página <a href="https://docs.aspose.com/imaging/net/system-requirements/">Requisitos do sistema</a> para verificar os pré-requisitos para configurar a API de imagem .NET de sua parte sem quaisquer problemas.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Instalação do Aspose.Imaging para .NET"
>}} 
<p>Baixe as DLLs ou o instalador MSI na <a href="https://releases.aspose.com/imaging/net/">seção de downloads</a> para instalar a API de processamento de imagem .NET. Como alternativa, você também pode usar o <a href="https://www.nuget.org/packages/Aspose.Imaging/">pacote NuGet</a> para configurar a API. O comando para o console do gerenciador de pacotes é fornecido abaixo:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Como converter imagens em .NET e girar ou inverter uma imagem"
featuretext="Aspose.Imaging para .NET permite a conversão programatica de imagens em diferentes formatos de arquivo. Ele permite que os desenvolvedores .NET convertam imagens vetoriais e raster conhecidas, como PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF e WebP. Você também pode inverter e girar imagens em seus aplicativos de processamento de imagem .NET."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Converta imagens para PDF, JPG, PNG e outros formatos em .NET"
>}} 
<p>Com a ajuda da API de imagens .NET, os desenvolvedores podem facilmente converter imagens em PDF, JPG, PNG, BMP, GIF, SVG e outros formatos. A conversão de PNG para JPG é uma opção de conversão de imagem popular para ajudar a transformar fotos ou imagens digitalizadas de um formato de arquivo para outro. A biblioteca Aspose.Imaging para .NET permite essa conversão usando codificação mínima. Verifique as seguintes informações para obter mais ajuda:</p>
<ul>
   <li>Carregue o arquivo PNG de origem usando a classe <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Converta PNG para JPG usando o método Image.Save(string, JpegOptions).</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}} 
// Load the PNG image
using (Image image = Image.Load("test.png"))
{              
    // Save the image as JPG
    image.Save("PNG-to-JPG.jpg", new JpegOptions());
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Virar ou girar imagens em seus aplicativos de processamento de imagem .NET"
>}} 
<p>Você pode aumentar seus aplicativos de manipulação de imagens .NET incorporando recursos de edição de fotos, como inverter e girar imagens. Aspose.Imaging para .NET API permite que você gire uma imagem em 90, 180 e 270 graus, além da capacidade de girá-la horizontal ou verticalmente. As etapas abaixo e o trecho de código C# oferecem mais ajuda:</p>
<ul>
   <li>Carregue o arquivo de imagem usando a classe <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Gire a imagem em 180 graus e vire-a horizontalmente usando <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> método.</li>
   <li>Salve a imagem atualizada usando o método <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}} 
// Load an image in an instance of Image
using (Image image = Image.Load("image.bmp"))
{
    // Rotate and flip the image
    image.RotateFlip(RotateFlipType.Rotate180FlipX);
    // Save the processed image
    image.Save("image-rotated-flipped.bmp");
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Para mais exemplos de trabalho de Aspose.Imaging para .NET API, visite o <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Página de exemplos</a>. Se você deseja converter, redimensionar, comprimir, marca d'água, girar, inverter, cortar, alinhar, editar ou mesclar suas imagens multiformato rapidamente, verifique <a href="https://products.aspose.app/imaging/family">aplicativos online gratuitos</a> de Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Adicione capacidade de compactação de imagem aos seus aplicativos de manipulação de imagem .NET"
featuretext="Aspose.Imaging para .NET permite compactar imagens para ajudar a reduzir o tamanho dos arquivos de imagem. Os excelentes algoritmos de compressão de imagem desta API de imagem .NET permitem reduzir o tamanho do arquivo em 30 a 70% sem comprometer a qualidade da imagem. Dessa forma, você pode armazenar e transferir arquivos de imagem com eficiência sem se preocupar com o tamanho do arquivo."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Perguntas frequentes"
>}} 
   {{< products/faq-block
 faqquery="1. Como posso converter arquivos de imagem em .NET?"
 faqanswer="Converter imagens como JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS e muito mais em .NET é rápido e fácil usando o Aspose.Imaging para .NET API. Apenas algumas linhas de codificação .NET são necessárias para converter suas imagens multiformato em diferentes formatos de arquivo."
>}} 
   {{< products/faq-block 
 faqquery="2. Quanto tempo leva para mesclar ou converter imagens?"
 faqanswer="A API de processamento de imagem .NET funciona rapidamente e conclui suas solicitações de conversão e fusão de imagem rapidamente."
>}} 
   {{< products/faq-block
 faqquery="3. É seguro processar fotos e imagens usando a API .NET?"
 faqanswer="Você pode ter certeza da segurança de suas fotos e imagens enquanto as processa usando Aspose.Imaging para .NET API. Asseguramos a privacidade dos seus dados e tomamos todas as medidas necessárias para lhe proporcionar uma experiência de utilizador segura."
>}} 
   {{< products/faq-block
 faqquery="4. Posso processar arquivos de imagem no Mac OS, Windows ou Linux?"
 faqanswer="Sim, a API de imagem para .NET funciona em diferentes sistemas operacionais, estruturas e ambientes operacionais. Você pode usá-lo na plataforma de sua escolha e não requer nenhuma instalação de software adicional para funcionar."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Ferramentas de manipulação de fotos e imagens"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG para PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG para PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG para PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG para PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG para JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP para WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF para SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF para JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR para PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Mesclar JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Mesclar TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Mesclar PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Procurando ajuda?"
bartext="Confira nossos canais de suporte para obter ajuda com suas perguntas relacionadas aos recursos e funcionamento da API do produto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="Referência da API"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Base de conhecimento"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Suporte Gratuito"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Desenhar formas em C# - linhas, arcos e retângulos"
 resourcelisttext2="Desfocar imagens programaticamente em C #"
 resourcelisttext3="Ajustar contrato de imagem, brilho e gama"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentação"
 resourcealt="Documentação"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Recursos do Aspose.Imaging para .NET"
 resourcelisttext2="Instalar o pacote Aspose.Imaging para .NET NuGet"
 resourcelisttext3="Helpdesk de suporte pago Aspose.Imaging for .NET"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de conhecimento"
 resourcealt="Amostras de código"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Como compactar o tamanho da imagem em C #"
resourcelisttext2="Como Desenhar Gráficos em C#"
resourcelisttext3="Como redimensionar a imagem em C #"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto para começar?"
rtstext="Baixar Teste Gratuito"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas as APIs"
>}} 
