---
title: .NET Visio Diagram API para crear, editar y procesar diagramas
description: C# .NET Visio Diagram API para crear, editar y procesar VSD, VSX, VTX, VSDX y otros archivos de Visio. Convierta diagramas a formatos PDF, PNG y HTML.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Visio Diagram API para crear, editar, exportar y procesar diagramas"
  inheadertext="La última API de creación de diagramas de .NET para generar, manipular y convertir sin problemas formatos de archivo de Microsoft Visio como VSD, VDX, VSX, VSX, VSSX, VTX y VTSX con archivos de diagrama de Visio basados en C#, ASP.NET y VB.NET aplicaciones de procesamiento"
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/diagram/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="Diagrama"
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
subnav5="https://purchase.aspose.com/pricing/diagram/net"
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/diagram/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Una API de .NET con todas las funciones para procesar diagramas de Microsoft Visio"
   subtext="Aspose.Diagram para .NET es una API de diagrama de Visio flexible y completa que permite a los desarrolladores de aplicaciones y software crear potentes aplicaciones de procesamiento de archivos de Visio en C#, ASP.NET y VB.NET. Con la ayuda de esta API de creación de diagramas nativa de .NET, puede crear aplicaciones móviles, soluciones de escritorio y herramientas para interfaces web para crear, modificar, transformar y exportar diagramas de Microsoft Visio. Aspose.Diagram para la biblioteca .NET admite formatos de archivo populares de Visio, como VSD, VSDX, VTX, VDX, VSX, VSSX, VTSX, VSDM y VSSM. Puede desarrollar rápida y fácilmente soluciones sofisticadas de conversión de diagramas utilizando esta API de diagramas de .NET Visio y convertir sus archivos de Visio a formatos de archivo PDF, JPG, PNG, BMP, HTML, XPS, SVG y EMF."
   subtext2="Entre muchas de sus funciones avanzadas de procesamiento de archivos de Visio, Aspose.Diagram para .NET permite rotar formas, recuperar información sobre conectores y fuentes, agrupar formas, inyectar imágenes en dibujos, agregar nuevas páginas a dibujos de Visio y hacer mucho más. Además, también puede dibujar rectángulos, polilíneas, Bézier y muchas otras formas en las páginas de Visio."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Verifique los requisitos previos en la página <a href="https://docs.aspose.com/diagram/net/system-requirements/">Requisitos del sistema</a> antes de configurar la API de creación de diagramas de .NET para una instalación optimizada y experiencia en el uso de la API.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Diagram para la instalación de .NET"
>}}
<p>Para instalar Aspose.Diagram para .NET API, puede descargar las DLL o el instalador MSI desde la <a href="https://releases.aspose.com/diagram/net/">sección de descargas</a>. O bien, puede usar el <a href="https://www.nuget.org/packages/Aspose.Diagram/">paquete NuGet</a> para configurar la API de diagrama de Visio para .NET. El comando para la consola del administrador de paquetes se proporciona a continuación:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Diagram 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cómo crear diagramas de Visio desde cero y convertir Visio a PDF en .NET"
featuretext="Los desarrolladores pueden crear diagramas de MS Visio mediante programación desde cero utilizando Aspose.Diagram para la biblioteca .NET. Puede insertar sin esfuerzo nuevas páginas y formas, o manipular diferentes propiedades de forma en los archivos de diagrama que cree. La API de creación de diagramas de .NET también admite la conversión independiente de los formatos de diagrama VSD y VSDX Visio a archivos PDF en alta fidelidad."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Crear diagramas de Visio desde cero en .NET"
>}}
<p>Aspose.Diagram for .NET API es una solución completa de manipulación de diagramas que permite a los desarrolladores crear diagramas de Visio cargados con todos los elementos esenciales, como formas, diagramas de flujo, comentarios y mucho más. Puede utilizar la API de diagramas de .NET para crear documentos de Visio desde cero con la ayuda de los pasos y la información que se indican a continuación:</p>
<ul>
   <li>Compruebe si existe el directorio para guardar el archivo.</li>
   <li>Cree un directorio si no existe.</li>
   <li>Inicialice un objeto de la clase <a href="https://reference.aspose.com/diagram/net/aspose.diagram/diagram">Diagram</a>.</li>
   <li>Guarde el diagrama como VSDX usando <a href="https://reference.aspose.com/diagram/net/aspose.diagram.diagram/save/methods/2">Diagram.Save(String fileName, SaveFileFormat.VSDX)</a> método.</li>
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
featurecolheading="Convierta diagramas de MS Visio a PDF en .NET"
>}}
<p>La conversión de archivos a formato PDF facilita compartirlos y acceder a ellos en múltiples dispositivos. Aspose.Diagram for .NET API permite convertir diagramas de Visio a formato PDF dentro de sus aplicaciones C# .NET. Puede convertir mediante programación VSD o VSDX a PDF con alta calidad de conversión. Los siguientes pasos e información le ayudarán a lograrlo:</p>
<ul>
   <li>Inicialice el objeto de clase <a href="https://apireference.aspose.com/diagram/net/aspose.diagram">Diagram</a> para cargar el archivo de entrada de Visio para convertir.</li>
   <li>Cree una instancia del objeto de clase <a href="https://reference.aspose.com/diagram/net/aspose.diagram.saving/pdfsaveoptions/">PdfSaveOptions</a>.</li>
   <li>Establezca las propiedades del archivo como el número de páginas y el índice de páginas.</li>
   <li>Guarde el archivo de salida como PDF.</li>
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
   <p class="col-lg-12">Más ejemplos de trabajo de Aspose.Diagram para .NET API están disponibles en <a href="https://github.com/aspose-diagram/Aspose.Diagram-for-.NET/tree/master/Examples">Ejemplos de GitHub </a> página. Ofrecemos <a href="https://products.aspose.app/diagram/family/">aplicaciones en línea gratuitas</a> de Aspose.Diagram para editar, ver, convertir, fusionar, marcar con agua, dividir y comprimir Microsoft Archivos de diagramas de Visio sobre la marcha utilizando sus dispositivos móviles o de escritorio. No dude en probar las aplicaciones en línea para manipular diagramas de Visio desde cualquier lugar.</p>
{{< products/product-feature-blocks
featureheading="Manipule e imprima archivos de Visio de forma independiente"
featuretext="Aspose.Diagram for .NET API permite acceder y leer datos de archivos de Microsoft Visio, procesarlos e imprimir los archivos procesados en alta calidad con múltiples opciones de impresión, utilizando una codificación mínima. No necesita instalar Microsoft Office o Microsoft Visio al procesar archivos de diagrama de Visio con Aspose.Diagram para .NET, lo que le brinda una experiencia de usuario independiente."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Preguntas más frecuentes"
   >}}
   {{< products/faq-block
   faqquery="1. ¿Cómo puedo convertir diagramas de Microsoft Visio en .NET?"
   faqanswer="La conversión de diagramas de Visio en .NET es rápida y sencilla con Aspose.Diagram para la API de .NET. Solo se necesitan unas pocas líneas de codificación .NET para convertir sus archivos VSD, VSDX, VSX, VTX, VDX, VSDM y otros archivos de diagrama a diferentes formatos de archivo."
   >}}
   {{< products/faq-block
   faqquery="2. ¿Cuánto tiempo lleva convertir o procesar los diagramas de Visio?"
   faqanswer="La API de diagramas de .NET funciona rápido y completa sus solicitudes de conversión de diagramas en muy poco tiempo."
   >}}
   {{< products/faq-block
   faqquery="3. ¿Es seguro procesar diagramas de Visio usando la API de .NET?"
   faqanswer="Puede estar seguro de la seguridad de sus archivos de diagrama mientras los procesa utilizando Aspose.Diagram para .NET API. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura."
   >}}
   {{< products/faq-block
   faqquery="4. ¿Puedo procesar diagramas de MS Visio en Mac OS, Windows o Linux?"
   faqanswer="Sí, la API de creación de diagramas para .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puede usarlo en la plataforma que elija y no requiere ninguna instalación de software adicional para funcionar."
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Herramientas de manipulación de diagramas de Visio"
>}}
   {{< products/popularapp-anchor
anchorlink="VSD a VSSX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-vssx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX a VSTM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-vstm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX a VSDX"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-vsdx/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM a VSSM"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-vssm/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD a TIFF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-tiff/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX a BMP"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-bmp/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDM a JPEG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdm-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VDX a PNG"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vdx-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSD a PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsd-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSDX a PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsdx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="VSX a PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vsx-to-pdf/"
>}}  
   {{< products/popularapp-anchor
anchorlink="VSTM a PDF"
 moreproducts="https://products.aspose.com/diagram/net/conversion/vstm-to-pdf/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/diagram/net/"
resourcetxt2="Referencia de la API"
resourcelinks2="https://reference.aspose.com/diagram/" 
resourcetxt3="Base de conocimientos"
resourcelinks3="https://kb.aspose.com/diagram/net/"
resourcetxt4="Soporte gratuito"
resourcelinks4="https://forum.aspose.com/c/diagram/17"
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
resourcelistlink="https://blog.aspose.com/diagram/convert-image-to-visio-in-csharp/"
resourcelistlink2="https://blog.aspose.com/diagram/create-org-chart-csharp/"
resourcelistlink3="https://blog.aspose.com/diagram/find-replace-visio-text-csharp/"
resourcelisttext="Convertir imagen a Visio en C#"
resourcelisttext2="Crear organigrama programáticamente en C#"
resourcelisttext3="Buscar y reemplazar texto en archivos de Visio en C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentación"
resourcealt="Documentación"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/diagram/net/feature-list/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Diagram/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Características de Aspose.Diagram para .NET"
resourcelisttext2="Instale Aspose.Diagram para el paquete .NET NuGet"
resourcelisttext3="Aspose.Diagram para el servicio de asistencia técnica de pago de .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Base de conocimientos"
resourcealt="Ejemplos de código"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/diagram/net/how-to-add-comment-to-visio-drawings-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/diagram/net/how-to-merge-visio-files-in-csharp/"
resourcelistlink3="https://kb.aspose.com/diagram/net/how-to-convert-vsx-to-html-in-c-sharp/"
resourcelisttext="Cómo agregar comentarios a los dibujos de Visio en C#"
resourcelisttext2="Cómo fusionar archivos de Visio en C#"
resourcelisttext3="Cómo convertir VSX a HTML en C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="¿Listo para comenzar?"
rtstext="Descargue prueba gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas las API"
>}}
