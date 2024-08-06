---
title: API .NET para administrar y procesar archivos de Microsoft Project
description: Una API de administración de proyectos .NET confiable para procesar archivos de Microsoft Project. Genere, convierta y manipule archivos de proyecto MPP, MPT y MPX en aplicaciones .NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API C# .NET para administrar y procesar archivos de Microsoft Project"
  inheadertext="Cree, edite, exporte y procese sin problemas sus formatos de archivo de Microsoft Project, como MPP, MPT, MPX y XML, dentro de las aplicaciones de administración de proyectos C# .NET. Convierta documentos de MS Project a formatos PDF, Excel, Primavera, HTML, TXT, PNG, JPEG y SVG utilizando la API de procesamiento de archivos de .NET Project."
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/tasks/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="Tareas"
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
subnav5="https://purchase.aspose.com/pricing/tasks/net"
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/tasks/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="La API de gestión de proyectos líder para procesar archivos de MS Project en .NET"
   subtext="Aspose.Tasks para .NET es una API robusta para procesar diferentes formatos de archivo de Microsoft Project. Permite a los desarrolladores de .NET leer, modificar, convertir y exportar archivos de proyecto mediante programación a múltiples formatos. Con esta API de .NET para archivos de Microsoft Project, puede manipular de manera inteligente los datos de administración de su proyecto y manejar varios recursos. Aspose.Tasks for .NET es una solución completa de administración de recursos de proyectos y permite trabajar con documentos de proyectos protegidos con contraseña, clasificar y desbloquear archivos de Microsoft Project, planificar y rastrear recursos, manipular tareas y administrar costos e hitos."
   subtext2="También puede agregar diagramas de Gantt personalizados mientras exporta e imprime los archivos del proyecto con la ayuda de la API de administración de proyectos C# .NET que admite la conversión precisa de sus archivos de proyecto a PDF, Primavera, hojas de cálculo de Excel, texto, HTML, JPEG, BMP y PNG. imágenes de trama y vectores SVG."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Consulte la siguiente información para configurar Aspose.Tasks para la biblioteca .NET. Consulte la página <a href="https://docs.aspose.com/tasks/net/system-requirements/">Requisitos del sistema</a> para obtener una lista de requisitos previos antes de instalar la API de administración de proyectos de .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Tasks para la instalación de .NET"
>}}
<p>Para descargar las DLL o el instalador MSI directamente, visite la <a href="https://releases.aspose.com/tasks/net/">sección de descargas</a>. También puede instalar la API de .NET para procesar archivos de Microsoft Project mediante el <a href="https://www.nuget.org/packages/Aspose.Tasks/">paquete NuGet</a>. El comando de la consola del administrador de paquetes para la configuración de la API se comparte a continuación:</p>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp1"
>}}
PM > Install-Package Aspose.Tasks
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
 featureheading="Cómo convertir sin esfuerzo archivos de proyecto MPP a PDF y formatos de archivo de imagen de trama"
 featuretext="La biblioteca Aspose.Tasks para .NET permite un procesamiento rápido y fácil de los archivos de gestión de proyectos y le permite convertir los archivos del proyecto a formatos de archivo de imágenes y documentos conocidos, como PDF, Primavera, Excel, Text, HTML, PNG, SVG, JPEG, y BMP."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Convertir MPP a PDF en .NET"
>}}
<p>Convierta con soltura archivos de proyecto a formato PDF en sus aplicaciones de conversión de archivos .NET. Aspose.Tasks para la biblioteca .NET permite convertir los archivos MPP a PDF utilizando solo unas pocas líneas de codificación .NET. Consulte las instrucciones a continuación y el código de muestra para convertir documentos MPP a formato de archivo PDF con la API .NET para procesar archivos de Microsoft Project:</p>
<ul>
   <li>Cargue el archivo MPP que se convertirá mediante la <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">clase de proyecto</a>.</li>
   <li>Agregue cambios al archivo MPP (opcional).</li>
   <li>Convierta el archivo MPP a formato PDF y expórtelo usando el método <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project/methods/save/index">Guardar</a> .</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp2"
>}}
// Load the input Project file (MPP)
Project project = new Project("project.mpp");
// Export the output PDF file
project.Save("ExportAsPDF.pdf", SaveFileFormat.PDF);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Convertir archivos de proyecto en imágenes"
>}}
<p>Convertir los datos de su proyecto a imágenes PNG o JPEG es fácil usando Aspose.Tasks para .NET API. Requiere una codificación mínima y permite exportar datos a formatos de imagen, lo que permite un almacenamiento y acceso convenientes a través de múltiples dispositivos. La siguiente información y fragmento de código lo ayudarán a convertir datos de Microsoft Project en imágenes JPEG utilizando la API de administración de proyectos de .NET:</p>
<ul>
   <li>Cargue el archivo MPP del proyecto mediante la clase <a href="https://reference.aspose.com/tasks/net/aspose.tasks/project">Proyecto</a>.</li>
   <li>Cree una instancia de la clase <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions">ImageSaveOptions</a> usando <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/savefileformat">SaveFileFormat.JPEG</a> enumeración.</li>
   <li>Especifique la calidad de la imagen JPEG mediante la propiedad <a href="https://reference.aspose.com/tasks/net/aspose.tasks.saving/imagesaveoptions/properties/jpegquality">JpegQuality</a>. El rango de valores permitido es de 0 a 100.</li>
   <li>Convierta y guarde la imagen JPEG con el método <a href="https://reference.aspose.com/tasks/net/aspose.tasks.project/save/methods/6">Save</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
 snipclass="greysnipp"
 copyID="snipp3"
>}}
// Load the MPP file
Project project = new Project("SourceDirectory\\Tests\\test_project.mpp");
// Create an instance of the ImageSaveOptions class
ImageSaveOptions options = new ImageSaveOptions(SaveFileFormat.JPEG) { JpegQuality = 50 };
// Export the JPEG image
project.Save("OutputDirectory\\project_image.jpeg", (SaveOptions)options);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Visite la página <a href="https://github.com/aspose-tasks/Aspose.Tasks-for-.NET/tree/master/Examples">Ejemplos de GitHub</a> de Aspose.Tasks para .NET API para ver más ejemplos de código y ejemplos de trabajo. Puede ver, convertir y manipular archivos de Microsoft Project usando su computadora de escritorio o dispositivos móviles usando las aplicaciones de procesamiento de datos de gestión de proyectos <a href="https://products.aspose.app/tasks/family">gratis en línea</a>. .</p>
{{< products/product-feature-blocks
 featureheading="Fusionar archivos de Microsoft Project en aplicaciones de fusión de archivos C# .NET"
 featuretext="Aspose.Tasks for .NET permite fusionar diferentes archivos de manera sencilla. La API de administración de proyectos de .NET admite la combinación programática de archivos MPP, MPX, MPT y JIRA con PDF, Primavera y otros formatos de archivo. Además, no necesita instalar Microsoft Project o Microsoft Office para manipular archivos de proyecto dentro de las aplicaciones de procesamiento de documentos C# .NET."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Preguntas más frecuentes"
>}}
   {{< products/faq-block
 faqquery="1. ¿Cómo puedo convertir archivos de proyecto en .NET?"
 faqanswer="Convertir archivos de Microsoft Project en .NET es rápido y sencillo con Aspose.Tasks para la API de .NET. Solo se necesitan unas pocas líneas de codificación .NET para convertir MPP, MPX, MPT, XML y otros archivos de proyecto a diferentes formatos de archivos de imágenes y documentos."
>}}
   {{< products/faq-block 
 faqquery="2. ¿Cuánto tiempo se tarda en convertir o fusionar archivos de gestión de proyectos?"
 faqanswer="La API de .NET para administrar y procesar archivos de Microsoft Project funciona rápido y completa sus solicitudes de combinación o conversión de archivos en poco tiempo."
>}}
   {{< products/faq-block
 faqquery="3. ¿Es seguro procesar datos de gestión de proyectos con la API de .NET?"
 faqanswer="Puede estar seguro de la seguridad de los archivos de datos de su proyecto mientras los procesa utilizando Aspose.Tasks for .NET API. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura."
>}}
   {{< products/faq-block
 faqquery="4. ¿Puedo procesar archivos de proyecto en Mac OS, Windows o Linux?"
 faqanswer="Sí, la API de procesamiento de archivos de proyecto para .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puede usarlo en la plataforma que elija y no requiere ninguna instalación de software adicional para funcionar."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Herramientas de manipulación de archivos de gestión de proyectos"
>}}
   {{< products/popularapp-anchor
 anchorlink="MPP a PDF"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP a XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP a HTML"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP a JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP a PNG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPP a BMP"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpp-to-bmp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT a XLSX"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-xlsx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPT a JPEG"
 moreproducts="https://products.aspose.com/tasks/net/conversion/mpt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JIRA a MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/jira-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="XML a MPP"
 moreproducts="https://products.aspose.com/tasks/net/merger/xml-to-mpp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MPX a PDF"
 moreproducts="https://products.aspose.com/tasks/net/merger/mpx-to-pdf/"
>}}  
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/tasks/net/"
resourcetxt2="Referencia de la API"
resourcelinks2="https://reference.aspose.com/tasks/"
resourcetxt3="Base de conocimientos"
resourcelinks3="https://kb.aspose.com/tasks/net/"
resourcetxt4="Soporte gratuito"
resourcelinks4="https://forum.aspose.com/c/tasks/15"
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
resourcelistlink="https://blog.aspose.com/tasks/convert-mpp-to-mpx-in-csharp/"
resourcelistlink2="https://blog.aspose.com/tasks/convert-ms-project-to-pdf-in-csharp/"
resourcelistlink3="https://blog.aspose.com/tasks/convert-mpp-to-tiff-in-csharp/"
resourcelisttext="Convertir MPP a MPX en C#"
resourcelisttext2="Convierta Microsoft Project a PDF en C# .NET"
resourcelisttext3="Convierta MPP a TIFF en C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentación"
resourcealt="Documentación"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/tasks/net/product-overview/#rich-features"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Tasks/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Características de Aspose.Tasks para .NET"
resourcelisttext2="Instale Aspose.Tasks para el paquete .NET NuGet"
resourcelisttext3="Aspose.Tasks para el servicio de asistencia técnica de pago de .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Base de conocimientos"
resourcealt="Ejemplos de código"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/tasks/net/how-to-convert-mpp-to-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/tasks/net/how-to-extract-microsoft-project-file-metadata-in-c-sharp/"
resourcelistlink3="https://kb.aspose.com/tasks/net/how-to-add-weekdays-in-mpp-using-csharp/"
resourcelisttext="Cómo convertir MPP a Excel usando C#"
resourcelisttext2="Cómo extraer metadatos de archivos de MS Project en C#"
resourcelisttext3="Cómo agregar días de la semana en MPP usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="¿Listo para comenzar?"
rtstext="Descargue prueba gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas las API"
>}}
