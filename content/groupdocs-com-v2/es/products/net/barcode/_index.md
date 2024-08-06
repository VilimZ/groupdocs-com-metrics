---
title: .NET Barcode API para leer, reconocer y generar códigos de barras
description: Utilice la API C# .NET Barcode para leer, reconocer y generar códigos de barras 1D y 2D. Cree aplicaciones de escáner o generador de códigos QR en ASP.NET y VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Barcode API para leer, reconocer y generar códigos de barras y códigos QR"
  inheadertext="Genere códigos de barras en .NET con una precisión inigualable y escanee, lea y reconozca códigos de barras lineales, 2D y postales de diferentes simbologías mediante la API de código de barras C# .NET. Admite escanear y detectar códigos de barras y códigos QR en formatos JPG, PNG, GIF, BMP y TIFF."
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="Código de barras"
  bclink2="Productos"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Descripción general" 
subnav2="#features"
subnavtxt2="Características" 
subnav3="#support"
subnavtxt3="Apoyo" 
subnav4="#examples"
subnavtxt4="Ejemplos" 
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Cree aplicaciones de reconocimiento de códigos de barras y generadores de códigos QR en C# .NET"
   subtext="Aspose.BarCode para .NET es una API de reconocimiento y generación de códigos de barras de alto rendimiento que permite a los desarrolladores de .NET crear, escanear, leer, detectar y exportar diferentes tipos de códigos de barras 1D (lineales), 2D y postales. Con un gran conjunto de funciones, esta API generadora de código de barras .NET ofrece una precisión inmaculada al leer o escanear imágenes de códigos de barras en PNG, BMP, JPG, GIF, TIFF y otros formatos. Además, también puede exportar los códigos de barras a imágenes rasterizadas populares o archivos vectoriales EMF y SVG. Junto con las funciones de escaneo de códigos de barras y códigos QR, Aspose.BarCode para .NET le permite manipular varios elementos de la apariencia del código de barras, incluida la calidad de la imagen, el tamaño del archivo, el color de fondo y de la barra, la calidad y la resolución de la imagen, el ángulo de rotación, los subtítulos y muchos más. más."
   subtext2="Con la API de código de barras para .NET, puede integrar rápida y fácilmente la funcionalidad del escáner de códigos QR en sus soluciones de procesamiento de códigos de barras .NET existentes o crear aplicaciones integrales de reconocimiento de códigos de barras en C#, ASP.NET o VB.NET desde cero. La biblioteca Aspose.BarCode para .NET admite más de 50 simbologías de códigos de barras lineales, 2D y postales, como Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417 y Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Antes de configurar la API de código de barras de .NET, verifique los requisitos previos en la página <a href="https://docs.aspose.com/barcode/net/system-requirements/">Requisitos del sistema</a> para garantizar una configuración de API y una experiencia de usuario fluidas.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Instalación de Aspose.BarCode para .NET"
>}}
<p>Visite la <a href="https://releases.aspose.com/barcode/net/">sección de descargas</a> para descargar directamente las DLL o el instalador MSI de la API de generación y reconocimiento de códigos de barras .NET. También puede instalar la API mediante el <a href="https://www.nuget.org/packages/Aspose.BarCode/">paquete NuGet</a>. Encuentre a continuación el comando para la consola del administrador de paquetes:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cómo generar códigos QR en .NET y leer códigos de barras a partir de imágenes"
featuretext="Con Aspose.BarCode para .NET, los desarrolladores pueden incorporar la capacidad de generación de códigos QR en sus aplicaciones de procesamiento de códigos de barras .NET. Además, también es posible reconocer diferentes tipos de códigos de barras de PNG, JPEG, BMP y otras imágenes. Puede escanear y leer múltiples tipos de códigos de barras desde el mismo archivo de imagen." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Genere rápidamente códigos QR en .NET"
>}}
<p>La API de código de barras .NET admite la generación de códigos QR con diferentes tipos de codificación. Puede agregar esta funcionalidad a sus aplicaciones de manipulación de códigos de barras y mejorar aún más sus ofertas. Consulte la siguiente información y la codificación C# para generar rápida y fácilmente códigos QR utilizando Aspose.BarCode para la biblioteca .NET:</p>
<ul>
   <li>Cree una instancia de la clase <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a> y especifique la clase <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> y el texto de entrada.</li>
   <li>Configure la versión del código QR y el tipo de codificación.</li>
   <li>Genere y guarde la imagen del código QR en formato PNG.</li>
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
featurecolheading="Leer códigos de barras de imágenes en .NET"
>}}
<p>Aspose.BarCode para .NET API facilita la lectura de códigos de barras de diferentes simbologías de PNG, JPEG, BMP, GIF y otros formatos de archivo de imagen. Esta API de generación y reconocimiento de códigos de barras .NET admite el escaneo y la lectura <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple- Types-from-Image-in-CSharp">múltiples códigos de barras de la misma imagen</a>. Consulte la siguiente información para obtener más ayuda:</p>
<ul>
   <li>Cargue la imagen del código de barras de origen mediante la clase <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a>.</li>
   <li>Llame al método <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a> para obtener resultados de reconocimiento en el <a href ="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> objeto de clase.</li>
   <li>Recorra los resultados obtenidos y muestre el tipo y el texto del código de barras.</li>
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
   <p class="col-lg-12">Visite la página <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">Ejemplos de GitHub</a> para ver más ejemplos prácticos de . API de código de barras NET. Si busca escanear, reconocer y generar códigos de barras 1D, 2D y postales o códigos QR sobre la marcha utilizando sus dispositivos móviles, consulte <a href="https://products.aspose.app/barcode/family ">aplicaciones en línea gratuitas</a> de Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Fácil integración y operaciones avanzadas"
featuretext="Aspose.BarCode para .NET permite operaciones súper fáciles que requieren solo unas pocas líneas de codificación .NET para comenzar a generar, leer y reconocer diferentes tipos de códigos de barras. Como desarrollador de .NET, puede integrar sin esfuerzo la API del generador de código de barras de .NET con cualquiera de sus aplicaciones de .NET. Una de las mejores características de esta biblioteca es la capacidad de leer códigos de barras y códigos QR dañados utilizando algoritmos complejos y mecanismos de filtrado que le permiten estar al tanto de sus necesidades de procesamiento de códigos de barras."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Preguntas más frecuentes"
   >}}
   {{< products/faq-block
   faqquery="1. ¿Cómo puedo generar códigos de barras en .NET?"
   faqanswer="La generación de códigos de barras 1D, 2D y postales en .NET es rápida y sencilla con Aspose.BarCode para la API de .NET. Solo se necesitan unas pocas líneas de codificación .NET para generar el código de barras del tipo deseado." 
   >}}
   {{< products/faq-block
   faqquery="2. ¿Cuánto tiempo se tarda en leer o generar códigos de barras?"
   faqanswer="La API de generación y reconocimiento de códigos de barras .NET funciona rápido y completa sus solicitudes en poco tiempo." 
   >}}
   {{< products/faq-block
   faqquery="3. ¿Es seguro procesar archivos con la API de .NET?"
   faqanswer="Puede estar seguro de la seguridad de sus archivos de código de barras mientras los procesa utilizando Aspose.BarCode para .NET API. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura." 
   >}}
   {{< products/faq-block
   faqquery="4. ¿Puedo reconocer y generar códigos de barras en Mac OS, Windows o Linux?"
   faqanswer="Sí, la API de código de barras para .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puede usarlo en la plataforma que elija y no requiere ninguna instalación de software adicional para funcionar." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Herramientas de generación y reconocimiento de códigos de barras"
   >}}
   {{< products/popularapp-anchor
anchorlink="Generar código de barras PDF417"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generar código de barras CODE39"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generar código de barras CODE128"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generar código QR"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generar código de barras POSTNET"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generar código de barras PLANETA"
moreproducts="https://products.aspose.com/total/python-net/generate-barcode/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconocer código de barras CODE39"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconocer código QR"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconocer código de barras PDF417"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconocer código de barras POSTNET"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Reconocer código de barras AZTEC"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Reconocer código de barras ISBN"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="Referencia de la API"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Base de conocimientos"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Soporte gratuito"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
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
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Generar códigos de barras DotCode en C#"
resourcelisttext2="Generar códigos de barras HIBC LIC en C#"
resourcelisttext3="Lea el código de barras de una imagen TIFF de varias páginas en C#" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentación"
resourcealt="Documentación"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Características de Aspose.BarCode para .NET"
resourcelisttext2="Instalar Aspose.BarCode para el paquete .NET NuGet"
resourcelisttext3="Soporte técnico de pago de Aspose.BarCode para .NET" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Base de conocimientos"
resourcealt="Ejemplos de código"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="Cómo rotar la imagen del código de barras en C#"
resourcelisttext2="Cómo generar una imagen de código de barras en C#"
resourcelisttext3="Cómo convertir un código de barras a SVG en C#" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="¿Listo para comenzar?" 
rtstext="Descargue prueba gratis" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="Ver todas las API" 
>}}
