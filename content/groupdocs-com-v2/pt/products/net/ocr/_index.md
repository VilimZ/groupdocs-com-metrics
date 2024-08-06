---
title: Poderosa API de OCR para .NET para realizar reconhecimento de texto preciso
description: Use a API Aspose Optical Character Recognition (OCR) para .NET para reconhecer e extrair texto de imagens com precisão, converter imagens e PDFs em texto e muito mais.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Poderosa API .NET OCR para realizar o reconhecimento de texto"
  inheadertext="Integre recursos avançados de OCR em seus aplicativos com a API Aspose Optical Character Recognition para .NET. Reconheça e extraia texto perfeitamente de imagens PNG, JPG, GIF e BMP, fotos digitalizadas e PDFs, ou converta imagens ou PDFs em texto."
  ctabtn="Baixar Teste Gratuito"
  ctabtn="Baixar Teste Gratuito"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas as APIs"
  bchomelink="/"
  bchome="Lar"
  bcpage="OCR"
  bclink2="Produtos"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Visão geral" 
subnav2="#features" subnavtxt2="Características" 
subnav3="#support" subnavtxt3="Apoiar" 
subnav4="#examples" subnavtxt4="Exemplos" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Preços" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Mecanismo .NET OCR com velocidade e precisão superiores"
   subtext="Aspose.OCR para .NET é uma API de reconhecimento ótico de caracteres avançada, eficiente e precisa para reconhecer facilmente texto em imagens e PDFs. Ele ajuda a desenvolver a funcionalidade OCR para aplicativos .NET e oferece maior velocidade de processamento, precisão e um conjunto abrangente de recursos. O poderoso mecanismo .NET OCR permite que você execute reconhecimento de texto preciso e extração de arquivos PDF e imagens JPEG, GIF, PNG, TIFF e BMP. Você pode criar soluções automatizadas para converter imagens e documentos PDF em formatos de texto, Word, Excel, XML e JSON com a ajuda da API OCR para .NET."
   subtext2="Os desenvolvedores podem desfrutar de uma experiência de extração de texto multiplataforma usando o Aspose.OCR para .NET API, já que pode funcionar de forma idêntica em Windows, Mac OS e ambientes baseados em Linux. A API suporta 27 idiomas diferentes em scripts latinos e cirílicos e milhares de caracteres chineses e permite detectar e reconhecer tipos de letra conhecidos. Além disso, você pode reconhecer o texto de suas fotos digitalizadas com a capacidade integrada de processar imagens ruidosas, distorcidas ou rotacionadas. A biblioteca Aspose.OCR for .NET é uma solução completa de análise de imagem e extração de texto que pode aumentar seus aplicativos existentes ou ajudá-lo a criar soluções profissionais de OCR do zero."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Começando</h2>
   <p>Para configurar e usar corretamente a API .NET OCR, verifique os detalhes abaixo. É aconselhável consultar a lista de pré-requisitos na página <a href="https://docs.aspose.com/ocr/net/system-requirements/">Requisitos do sistema</a> para uma instalação tranquila do a API de reconhecimento óptico de caracteres para .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Instalação do Aspose.OCR para .NET"
>}}
<p>Você pode instalar a biblioteca OCR para C# .NET baixando o instalador MSI ou as DLLs na <a href="https://releases.aspose.com/ocr/net/">seção de downloads</a>. Ou você pode usar o <a href="https://www.nuget.org/packages/Aspose.OCR/">pacote NuGet</a> para configurá-lo. O comando para o console do gerenciador de pacotes do Visual Studio é fornecido abaixo:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Realize OCR com eficiência em documentos PDF e converta imagens em texto"
featuretext="Aspose.OCR para .NET API é uma escolha excelente para executar o reconhecimento ótico de caracteres (OCR) para desenvolvedores .NET. Aplicar OCR a documentos PDF e converter o texto reconhecido para o formato Word requer apenas algumas linhas de código. Da mesma forma, você pode criar soluções de conversão de imagem em texto usando a biblioteca de reconhecimento de texto para C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Reconhecer e extrair texto de documentos PDF em .NET"
>}}
<p>O reconhecimento óptico de caracteres para documentos PDF digitalizados é simplificado com a ajuda do Aspose.OCR para .NET. É um dos recursos mais populares da API de OCR de documento PDF .NET e equipa qualquer pessoa que trabalhe com a API com todas as ferramentas necessárias para reconhecer, extrair e converter texto de documentos PDF em vários formatos. Vamos dar uma olhada nas etapas necessárias para realizar o OCR em documentos PDF e converter o texto extraído do PDF para o formato Word:</p>
<ul>
   <li>Instancie a classe <strong>AsposeOcr</strong>.</a></li>
   <li>Crie um objeto da classe <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Especifique o idioma do OCR.</li>
   <li>Chame o método <strong>RecognizePdf()</strong> para obter <strong>RecognitionResult</strong>. Adicione o caminho do arquivo e o objeto <strong>DocumentRecognitionSettings</strong> como argumentos.</li>
   <li>Salve o texto usando o método <strong>SaveMultipageDocument()</strong>. Adicione o caminho do arquivo de saída, os objetos <strong>SaveFormat</strong> e <strong>RecognitionResult</strong> como argumentos</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// This code example demonstrates how to OCR PDF documents and save the recognized text as DOCX.
// Initialize the PCR engine
AsposeOcr recognitionEngine = new AsposeOcr();
// Initialize recognition settings
DocumentRecognitionSettings recognitionSettings = new DocumentRecognitionSettings();
// Specify language for OCR. Multi-language by default
recognitionSettings.Language = Language.Eng;
// Recognize text from PDF
List<RecognitionResult> results = recognitionEngine.RecognizePdf("C:\\MyFiles\\test.pdf", recognitionSettings);
// Save the recognized text as Word (DOCX) file
AsposeOcr.SaveMultipageDocument("C:\\Files\\OCR_result.docx", SaveFormat.Docx, results);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Converta facilmente imagens em PDFs pesquisáveis no .NET"
>}}
<p>A API .NET OCR de alto desempenho permite que os desenvolvedores extraiam texto pesquisável de imagens digitalizadas e fotos de diferentes formatos de imagem comumente usados, como GIF, PNG, JPG, BMP e TIFF. Se você deseja integrar recursos de OCR em seus aplicativos .NET, o recurso de conversão de imagem em texto pode reforçá-los. Aqui, revisaremos as etapas necessárias para converter JPG em PDF com eficiência usando a robusta API de OCR para .NET:</p>
<ul>
   <li>Defina o caminho do arquivo de imagem de entrada para reconhecimento de texto.</li>
   <li>Crie uma instância de classe <strong>AsposeOcr</strong></li>
   <li>Use o método <strong>RecognizeImage</strong> para reconhecer o texto no arquivo de imagem selecionado.</li>
   <li>Salve o arquivo processado usando o método <strong>Save</strong> e adicione o nome do arquivo de saída e o <strong>SaveFormat</strong> como argumentos.</li>
   <li>Certifique-se de definir o arquivo resultante como um documento PDF pesquisável usando <strong>SaveFormat</strong>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Set path for input image to recognize
string image = "OCR_test.jpg";
// Initialize AsposeOcr class instance
AsposeOcr api = new AsposeOcr();
// Recognize input image with RecognizeImage method
RecognitionResult result = api.RecognizeImage(image, new RecognitionSettings());
// Save output to searchable PDF file
result.Save("OCR_output.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">A <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">página de exemplos</a> do GitHub da API Aspose Optical Character Recognition para . NET inclui mais exemplos de código de trabalho, sinta-se à vontade para vê-los. Também fornecemos <a href="https://products.aspose.app/ocr/family">OCR de PDF on-line gratuito e conversor de imagem para texto</a>, reconhecimento de texto e aplicativos de extração. Você pode usar esses aplicativos de OCR gratuitos em tempo real usando seus dispositivos móveis.</p>
{{< products/product-feature-blocks
featureheading="Biblioteca OCR .NET fácil de usar para extração de texto em fotos"
featuretext="Você está tendo dificuldade em ler e extrair texto de imagens digitalizadas? Se sim, use Aspose.OCR para .NET, pois é a melhor API de OCR para análise de imagens e extração de texto de fotos digitalizadas, imagens de smartphones e muito mais. Usando esta API, você pode reconhecer texto em imagens de forma programática e convertê-lo em diferentes formatos de arquivo. Além disso, a API de conversão de imagem em texto inclui funções avançadas, como verificação ortográfica e substituição de caracteres para textos visualmente defeituosos. Ele poderia facilmente ler esses textos, verificar a ortografia e substituir quaisquer caracteres distorcidos do texto incorreto na imagem. Ao executar o OCR de imagem, você pode fornecer o link para um arquivo de imagem como fonte. É possível digitalizar e reconhecer o texto de uma imagem completa ou apenas uma parte selecionada da imagem para este processo. Desenvolva com eficiência aplicativos de conversão de imagem em texto completos usando a API OCR de imagem .NET e converta facilmente JPEG em texto, PNG em texto, BMP em texto e muito mais."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Perguntas frequentes"
>}}
   {{< products/faq-block
 faqquery="1. Como posso converter imagens em texto no .NET?"
 faqanswer="Converter imagens em texto no .NET é rápido e fácil usando a API .NET OCR. Apenas algumas linhas de codificação .NET são necessárias para converter JPG, BMP, GIF, PNG, TIFF e outros arquivos de imagem em formatos PDF, Word, Excel, JSON, texto simples e XML."
>}}
   {{< products/faq-block 
 faqquery="2. Quanto tempo leva para converter arquivos de imagem ou PDF em texto?"
 faqanswer="A melhor API de OCR para .NET funciona rápido e conclui suas solicitações de reconhecimento, extração e conversão de texto rapidamente."
>}}
   {{< products/faq-block
 faqquery="3. É seguro processar imagens digitalizadas e PDFs usando a API .NET?"
 faqanswer="Você pode ter certeza da segurança de seus arquivos de dados enquanto os processa usando a API de reconhecimento óptico de caracteres para .NET. Asseguramos a privacidade dos seus dados e tomamos todas as medidas necessárias para lhe proporcionar uma experiência de utilizador segura."
>}}
   {{< products/faq-block
 faqquery="4. Posso processar fotos e arquivos PDF no Mac OS, Windows ou Linux?"
 faqanswer="Sim, a API de reconhecimento de texto e conversão de imagem em texto para .NET funciona em diferentes sistemas operacionais, estruturas e ambientes operacionais. Você pode usá-lo na plataforma de sua escolha e não requer nenhuma instalação de software adicional para funcionar."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Ferramentas de reconhecimento óptico de caracteres"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG para TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG para TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF para TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP para TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF para TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG para PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG para Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG para Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG para XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG para Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG para Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG para PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF para Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF para PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP para Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP para Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Procurando ajuda?"
bartext="Confira nossos canais de suporte para obter ajuda com suas perguntas relacionadas aos recursos e funcionamento da API do produto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="Referência da API"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Base de conhecimento"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Suporte Gratuito"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
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
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Correção de inclinação no processamento de imagens usando C#"
 resourcelisttext2="Converter capturas de tela em texto com OCR em C#"
 resourcelisttext3="Converter imagem para Excel com OCR em C #"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentação"
 resourcealt="Documentação"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Como executar exemplos"
 resourcelisttext2="Instalar Aspose.OCR para pacote .NET NuGet"
 resourcelisttext3="Aspose.OCR para suporte pago .NET Helpdesk"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de conhecimento"
 resourcealt="Amostras de código"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Como extrair texto de PDF digitalizado em C #"
resourcelisttext2="Como extrair texto de imagem em c #"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Pronto para começar?"
rtstext="Baixar Teste Gratuito"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Ver todas as APIs"
>}}
