---
title: Potente API de OCR para .NET para realizar un reconocimiento de texto preciso
description: Utilice la API de reconocimiento óptico de caracteres (OCR) de Aspose para .NET para reconocer y extraer con precisión texto de imágenes, convertir imágenes y archivos PDF en texto, y más.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Potente API .NET OCR para realizar el reconocimiento de texto"
  inheadertext="Integre capacidades avanzadas de OCR en sus aplicaciones con la API de reconocimiento óptico de caracteres de Aspose para .NET. Reconozca y extraiga sin problemas texto de imágenes PNG, JPG, GIF y BMP, fotos escaneadas y archivos PDF, o convierta imágenes o archivos PDF en texto."
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="LOC"
  bclink2="Productos"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Descripción general" 
subnav2="#features" subnavtxt2="Características" 
subnav3="#support" subnavtxt3="Apoyo" 
subnav4="#examples" subnavtxt4="Ejemplos" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Motor .NET OCR con velocidad y precisión superiores"
   subtext="Aspose.OCR para .NET es una API de reconocimiento óptico de caracteres avanzada, eficiente y precisa para reconocer sin esfuerzo texto en imágenes y archivos PDF. Ayuda a desarrollar la funcionalidad de OCR para aplicaciones .NET y ofrece velocidad de procesamiento mejorada, precisión y un conjunto completo de funciones. El potente motor .NET OCR le permite realizar un reconocimiento y extracción de texto precisos de archivos PDF e imágenes JPEG, GIF, PNG, TIFF y BMP. Puede crear soluciones automatizadas para convertir imágenes y documentos PDF a formatos de texto, Word, Excel, XML y JSON con la ayuda de la API de OCR para .NET."
   subtext2="Los desarrolladores pueden disfrutar de una experiencia de extracción de texto multiplataforma utilizando Aspose.OCR para la API .NET, ya que puede funcionar de manera idéntica en entornos basados en Windows, Mac OS y Linux. La API admite 27 idiomas diferentes en escritura latina y cirílica y miles de caracteres chinos y permite detectar y reconocer tipos de letra conocidos. Además, puede reconocer el texto de sus fotos escaneadas con la capacidad integrada de procesar imágenes ruidosas, torcidas o giradas. Aspose.OCR para la biblioteca .NET es una solución completa de análisis de imágenes y extracción de texto que podría aumentar sus aplicaciones existentes o ayudarlo a crear soluciones de OCR profesionales desde cero."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Para configurar y utilizar correctamente la API de .NET OCR, consulte los detalles que se indican a continuación. Se recomienda consultar la lista de requisitos previos en la página <a href="https://docs.aspose.com/ocr/net/system-requirements/">Requisitos del sistema</a> para una instalación sin problemas de la API de reconocimiento óptico de caracteres para .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Instalación de Aspose.OCR para .NET"
>}}
<p>Puede instalar la biblioteca OCR para C# .NET descargando el instalador MSI o las DLL desde la <a href="https://releases.aspose.com/ocr/net/">sección de descargas</a>. O bien, puede usar el <a href="https://www.nuget.org/packages/Aspose.OCR/">paquete NuGet</a> para configurarlo. El comando para la consola del administrador de paquetes de Visual Studio se proporciona a continuación:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Realice OCR de manera eficiente en documentos PDF y convierta imágenes en texto"
featuretext="Aspose.OCR para .NET API es una excelente opción para realizar sin problemas el reconocimiento óptico de caracteres (OCR) para los desarrolladores de .NET. Aplicar OCR a documentos PDF y convertir el texto reconocido a formato Word requiere solo unas pocas líneas de código. Del mismo modo, puede crear soluciones de conversión de imagen a texto utilizando la biblioteca de reconocimiento de texto para C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Reconocer y extraer texto de documentos PDF en .NET"
>}}
<p>El reconocimiento óptico de caracteres para documentos PDF escaneados se simplifica con la ayuda de Aspose.OCR para .NET. Es una de las características más apreciadas de la API OCR de documentos PDF de .NET y proporciona a cualquiera que trabaje con la API todas las herramientas necesarias para reconocer, extraer y convertir texto de documentos PDF a múltiples formatos. Echemos un vistazo a los pasos necesarios para realizar OCR en documentos PDF y convertir el texto extraído de PDF a formato Word:</p>
<ul>
   <li>Crea una instancia de la clase <strong>AsposeOcr</strong>.</a></li>
   <li>Cree un objeto de la clase <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Especifique el idioma de OCR.</li>
   <li>Llame al método <strong>RecognizePdf()</strong> para obtener <strong>RecognitionResult</strong>. Agregue la ruta del archivo y el objeto <strong>DocumentRecognitionSettings</strong> como argumentos.</li>
   <li>Guarde el texto usando el método <strong>SaveMultipageDocument()</strong>. Agregue la ruta del archivo de salida, los objetos <strong>SaveFormat</strong> y <strong>RecognitionResult</strong> como argumentos.</li>
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
featurecolheading="Convierta sin esfuerzo imágenes en archivos PDF con capacidad de búsqueda en .NET"
>}}
<p>La API .NET OCR de alto rendimiento permite a los desarrolladores extraer texto de búsqueda de imágenes escaneadas y fotos de diferentes formatos de imagen de uso común, como GIF, PNG, JPG, BMP y TIFF. Si está buscando integrar las capacidades de OCR en sus aplicaciones .NET, la función de conversión de imagen a texto podría reforzarlas. Aquí, revisaremos los pasos necesarios para convertir de manera eficiente JPG a PDF utilizando la sólida API de OCR para .NET:</p>
<ul>
   <li>Establezca la ruta del archivo de imagen de entrada para el reconocimiento de texto.</li>
   <li>Crear una instancia de clase <strong>AsposeOcr</strong></li>
   <li>Utilice el método <strong>RecognizeImage</strong> para reconocer texto en su archivo de imagen seleccionado.</li>
   <li>Guarde el archivo procesado con el método <strong>Guardar</strong> y agregue el nombre del archivo de salida y el <strong>SaveFormat</strong> como argumentos.</li>
   <li>Asegúrese de configurar el archivo resultante en un documento PDF con capacidad de búsqueda usando <strong>SaveFormat</strong>.</li>
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
   <p class="col-lg-12">La <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">página de ejemplos</a> de GitHub de la API de reconocimiento óptico de caracteres de Aspose para . NET incluye más ejemplos de código de trabajo, no dude en consultarlos. También proporcionamos <a href="https://products.aspose.app/ocr/family">OCR de PDF en línea gratuito y convertidor de imagen a texto</a>, reconocimiento de texto y aplicaciones de extracción. Puede usar estas aplicaciones gratuitas de OCR sobre la marcha con sus dispositivos móviles.</p>
{{< products/product-feature-blocks
featureheading="Biblioteca .NET OCR fácil de usar para la extracción de texto en fotos"
featuretext="¿Tiene dificultades para leer y extraer texto de imágenes escaneadas? En caso afirmativo, use Aspose.OCR para .NET, ya que es la mejor API de OCR para el análisis de imágenes y la extracción de texto de fotos escaneadas, imágenes de teléfonos inteligentes y más. Con esta API, puede reconocer texto en imágenes mediante programación y convertirlo a diferentes formatos de archivo. Además, la API de conversión de imagen a texto incluye funciones avanzadas como el corrector ortográfico y el reemplazo de caracteres para textos visualmente defectuosos. Podría leer fácilmente dichos textos, verificar la ortografía y reemplazar cualquier carácter distorsionado del texto mal escrito en la imagen. Mientras ejecuta el OCR de imagen, puede proporcionar el enlace a un archivo de imagen como fuente. Es posible escanear y reconocer texto de una imagen completa o solo una parte seleccionada de la imagen para este proceso. Desarrolle de manera competente aplicaciones de conversión de imágenes a texto con todas las funciones utilizando la API OCR de imágenes .NET y convierta fácilmente JPEG a texto, PNG a texto, BMP a texto y más."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Preguntas más frecuentes"
>}}
   {{< products/faq-block
 faqquery="1. ¿Cómo puedo convertir imágenes a texto en .NET?"
 faqanswer="Convertir imágenes a texto en .NET es rápido y fácil usando la API de .NET OCR. Solo se necesitan unas pocas líneas de codificación .NET para convertir JPG, BMP, GIF, PNG, TIFF y otros archivos de imagen a formatos PDF, Word, Excel, JSON, texto sin formato y XML."
>}}
   {{< products/faq-block 
 faqquery="2. ¿Cuánto tiempo lleva convertir archivos de imagen o PDF a texto?"
 faqanswer="La mejor API de OCR para .NET funciona rápido y completa sus solicitudes de conversión, extracción y reconocimiento de texto en muy poco tiempo."
>}}
   {{< products/faq-block
 faqquery="3. ¿Es seguro procesar imágenes escaneadas y archivos PDF con la API de .NET?"
 faqanswer="Puede estar seguro de la seguridad de sus archivos de datos mientras los procesa utilizando la API de reconocimiento óptico de caracteres para .NET. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura."
>}}
   {{< products/faq-block
 faqquery="4. ¿Puedo procesar fotos y archivos PDF en Mac OS, Windows o Linux?"
 faqanswer="Sí, la API de reconocimiento de texto y conversión de imagen a texto para .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puede usarlo en la plataforma que elija y no requiere ninguna instalación de software adicional para funcionar."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Herramientas de reconocimiento óptico de caracteres"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG a TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG a TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF a TXTO"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP a TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF a TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG a PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG a Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG a Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG a XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG a Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG a Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG a PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF a Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF a PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP a Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP a Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="Referencia de la API"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Base de conocimientos"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Soporte gratuito"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Recursos"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="blogs"
 resourcealt="blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Corrección de sesgo en el procesamiento de imágenes usando C#"
 resourcelisttext2="Convierta capturas de pantalla en texto con OCR en C#"
 resourcelisttext3="Convertir imagen a Excel con OCR en C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentación"
 resourcealt="Documentación"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Cómo ejecutar ejemplos"
 resourcelisttext2="Instale Aspose.OCR para el paquete .NET NuGet"
 resourcelisttext3="Soporte técnico de pago de Aspose.OCR para .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de conocimientos"
 resourcealt="Ejemplos de código"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Cómo extraer texto de un PDF escaneado en C#"
resourcelisttext2="Cómo extraer texto de una imagen en C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="¿Listo para comenzar?"
rtstext="Descargue prueba gratis"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Ver todas las API"
>}}
