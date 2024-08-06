---
title: API de procesamiento de formatos de archivo de hoja de cálculo de Excel para C# .NET
description: Una sólida biblioteca de .NET Excel para crear, ver y procesar hojas de cálculo de Excel en C#, ASP.NET y VB.NET. Convierta Excel a PDF, JPEG, HTML y otros formatos.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de procesamiento de formatos de archivo de hoja de cálculo de Excel para C# .NET"
  inheadertext="Cargue, procese y manipule XLS, XLSX, XLSM, XLT, ODS, CSV y otros formatos de archivo de Microsoft Excel en las plataformas .NET Core y Xamarin. Cree aplicaciones de procesamiento de hojas de cálculo en ASP.NET y VB.NET para convertir Excel a PDF, Excel a JPG y muchos otros formatos."
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/cells/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="Células"
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
subnav5="https://purchase.aspose.com/pricing/cells/net" 
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/cells/net/" 
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy" 
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper 
   sectionid="overview"
   subtitle="Procesamiento de hojas de cálculo de Excel de alto rendimiento en .NET"
   subtext="Aspose.Cells para .NET es una biblioteca confiable y rica en funciones que permite a los desarrolladores de .NET crear, cargar, representar y exportar archivos de hojas de cálculo de Excel dentro de las aplicaciones C#, ASP.NET y VB.NET. Con esta biblioteca, puede leer, ver, editar y escribir hojas de Excel y realizar tareas avanzadas, como calcular fórmulas, administrar gráficos y tablas dinámicas, y formatear texto en hojas de cálculo. Además, también puede trabajar con funciones como administrar filas, columnas y celdas de hojas de trabajo, aplicar formato condicional, manipular reglas de validación de datos, rangos con nombre y mucho más. Aspose.Cells para .NET API es compatible con una amplia gama de formatos de archivo conocidos, como XLS, XLT, XLSM, XLSX, XLTX, XLTM, ODS, CSV, TSV y HTML." 
   subtext2="No hay dependencia de Microsoft Excel ni de ningún software externo al usar Aspose.Cells para .NET, lo que permite a los usuarios disfrutar de una experiencia de manipulación de hojas de cálculo multiplataforma totalmente independiente. Los desarrolladores pueden crear aplicaciones inteligentes de conversión de archivos de Excel para convertir sin problemas Excel a PDF, Excel a JPG, Excel a HTML y otros tipos de archivos utilizando esta API de procesamiento de hojas de cálculo para C# .NET."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Verifique la siguiente información para configurar y usar correctamente Aspose.Cells para la API de .NET. Consulte también la página <a href="https://docs.aspose.com/cells/net/system-requirements/">Requisitos del sistema</a> para obtener una lista de requisitos previos para configurar correctamente la API de documentos de Excel. para .NET</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper 
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Instalación de Aspose.Cells para .NET"
>}}
<p>Para configurar Aspose.Cells para .NET en su sistema, descargue directamente las DLL o el instalador MSI desde la <a href="https://releases.aspose.com/cells/net/">sección de descargas</a >. O bien, puede usar el <a href="https://www.nuget.org/packages/Aspose.Cells/">paquete NuGet</a> para la instalación de la API de procesamiento de hojas de cálculo de .NET. El comando del administrador de paquetes se proporciona a continuación.</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM> Install-Package Aspose.Cells
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cómo convertir Excel a PDF en .NET y fusionar rápidamente libros de Excel"
featuretext="Aspose.Cells for .NET API permite a los desarrolladores de .NET convertir de manera competente libros de Microsoft Excel a diferentes formatos de archivo. Convertir Excel a PDF es fácil usando la API de .NET Excel que le permite convertir XLS a PDF y XLSX a PDF dentro de sus aplicaciones de conversión de archivos .NET. Además, puede fusionar libros de trabajo de Excel y guardar el documento procesado como un archivo unificado con la ayuda de la API de procesamiento de hojas de cálculo .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Convertir Excel a PDF en .NET"
>}}
<p>Actualice sus aplicaciones de conversión de archivos .NET integrando la funcionalidad de conversión de Excel a PDF utilizando Aspose.Cells para la biblioteca .NET. Convierta sin esfuerzo archivos XLS y XLSX a formato PDF utilizando una cantidad mínima de código. Consulte la siguiente información y codificación de muestra para convertir Excel a PDF en la plataforma .NET:</p>
<ul>
   <li>Cree una instancia de la clase <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a> y agregue el documento de Excel que desea convertir.</li>
   <li>Guarde el documento de Excel en formato PDF con el método <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save/#save_3">Guardar</a>. Especifique el formato PDF mediante la enumeración <a href="https://reference.aspose.com/net/cells/aspose.cells/saveformat">SaveFormat</a>.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Instantiate the Workbook object with the Excel file
Workbook workbook = new Workbook("SampleExcel.xls");
// Save the document in PDF format
workbook.Save("outputPDF.pdf", SaveFormat.Pdf);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col 
featurecolheading="Combinar libros de trabajo de MS Excel en .NET"
>}}
<p>Combine mediante programación varios libros de Excel y combínelos en un solo archivo de Excel con la ayuda de Aspose.Cells para la API de .NET. Mejore sus aplicaciones de fusión de documentos .NET inyectando la funcionalidad de fusión de libros de trabajo de MS Excel. Revise el fragmento de código que se proporciona a continuación y la información para combinar varios libros de trabajo:</p>
<ul>
   <li>Cree dos instancias de la clase <a href="https://reference.aspose.com/net/cells/aspose.cells/workbook">Workbook</a>, una para cada uno de los dos libros de trabajo que se combinarán.</li>
   <li>Combine los dos libros de trabajo con el método <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/combine/">Combine</a></li>
   <li>Guarde el libro de Excel combinado con el método <a href="https://reference.aspose.com/cells/net/aspose.cells/workbook/save#save_2">Guardar</a>.</li>
</ul>
{{< products/product-feature-blocks-snip 
snipclass="greysnipp" 
copyID="snipp3"
>}}
// Define the first source workbook
// Open the first excel file.
Workbook SourceBook1 = new Workbook(dataDir+ "SampleChart.xlsx");
// Define the second source workbook.
// Open the second excel file.
Workbook SourceBook2 = new Workbook(dataDir+ "SampleImage.xlsx");
// Combine the two workbooks
SourceBook1.Combine(SourceBook2);
// Save the target book file.
SourceBook1.Save("Combined.out.xlsx");
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Para ver más ejemplos prácticos de Aspose.Cells para la API de .NET, visite <a href="https://github.com/aspose-cells/Aspose.Cells-for-.NET/tree/master/Examples"> Página de ejemplos de GitHub</a>. Puede ver, editar, convertir, fusionar, dividir, anotar, marcar con agua, analizar, comparar, comprimir o buscar los documentos de Excel desde cualquier lugar utilizando sus dispositivos móviles. Consulte las <a href="https://products.aspose.app/cells/family">Aplicaciones en línea gratuitas de Aspose.Cells</a> para manipular la hoja de cálculo de Excel sobre la marcha.</p>
{{< products/product-feature-blocks
featureheading="Controles GUI y cálculos avanzados de fórmulas en .NET"
featuretext="Genere rápidamente hojas de cálculo de aspecto profesional completas con tablas dinámicas y gráficos utilizando los controles GUI que ofrece Aspose.Cells para la API de .NET. Ayúdese a crear aplicaciones interactivas de hojas de cálculo de Excel basadas en la web y de escritorio sin la necesidad de una codificación extensa. Además de las características de la interfaz gráfica, esta biblioteca de procesamiento de hojas de cálculo .NET admite muchas funciones estándar y avanzadas, operadores y un sistema integral de cálculo de fórmulas capaz de manejar fórmulas complejas."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper 
   faqtitle="Preguntas más frecuentes"
>}}
   {{< products/faq-block
   faqquery="1. ¿Cómo puedo convertir documentos de Excel en .NET?"
   faqanswer="Convertir documentos de Microsoft Excel en .NET es rápido y fácil usando Aspose.Cells para la API de .NET. Puede convertir hojas de cálculo de Microsoft Excel en .NET a diferentes formatos de archivo utilizando una codificación mínima."
>}}
   {{< products/faq-block
   faqquery="2. ¿Cuánto tiempo lleva convertir o procesar hojas de cálculo de Excel?"
   faqanswer="La API de hoja de cálculo .NET ofrece velocidades de procesamiento ultrarrápidas y lleva a cabo la conversión y el procesamiento de documentos muy rápidamente."
>}}
   {{< products/faq-block
   faqquery="3. ¿Es seguro procesar documentos de MS Excel utilizando la API de procesamiento de hojas de cálculo de .NET?"
   faqanswer="¡Por supuesto! Puede estar seguro de la seguridad de sus documentos mientras los procesa utilizando Aspose.Cells para .NET API. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura."
>}}
   {{< products/faq-block
   faqquery="4. ¿Puedo procesar documentos de Microsoft Excel en Mac OS, Windows o Linux?"
   faqanswer="Sí, la API de .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puedes usarlo en la plataforma que elijas. La biblioteca de procesamiento de documentos .NET Excel no requiere ninguna instalación de software adicional para funcionar."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Herramientas de manipulación de hojas de cálculo de Excel"
>}}
   {{< products/popularapp-anchor
anchorlink="Excel a PDF"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-pdf/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a JPG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-jpg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a PNG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-png/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a HTML"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-html/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a ODS"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-ods/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX a CSV"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-csv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="XLSX a XPS"
moreproducts="https://products.aspose.com/cells/net/conversion/xlsx-to-xps/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a JSON"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-json/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a SVG"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-svg/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a TSV"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-tsv/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a MD"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-md/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Excel a TXT"
moreproducts="https://products.aspose.com/cells/net/conversion/excel-to-txt/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/cells/net/"
resourcetxt2="Referencia de la API"
resourcelinks2="https://reference.aspose.com/cells/" 
resourcetxt3="Base de conocimientos"
resourcelinks3="https://kb.aspose.com/cells/net/"
resourcetxt4="Soporte gratuito"
resourcelinks4="https://forum.aspose.com/c/cells/9"
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
resourcelistlink="https://blog.aspose.com/cells/convert-csv-to-json-csharp/"
resourcelistlink2="https://blog.aspose.com/cells/adjust-row-height-column-width-in-excel-csharp/"
resourcelistlink3="https://blog.aspose.com/cells/excel-to-csv-csharp/"
resourcelisttext="Convertir CSV a JSON en C#"
resourcelisttext2="Ajustar la altura de fila y el ancho de columna en Excel"
resourcelisttext3="Convierta Excel XLS XLSX a CSV en C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentación"
resourcealt="Documentación"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/cells/net/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.Cells/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.Cells para documentos .NET"
resourcelisttext2="Instalar Aspose.Cells para el paquete .NET NuGet"
resourcelisttext3="Soporte técnico de Aspose.Cells para .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Base de conocimientos"
resourcealt="Ejemplos de código"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/cells/net/how-to-insert-comment-in-excel-using-csharp/"
resourcelistlink2="https://kb.aspose.com/cells/net/how-to-create-pivot-table-in-excel-using-csharp/"
resourcelistlink3="https://kb.aspose.com/cells/net/how-to-rotate-a-cell-in-excel-using-csharp/"
resourcelisttext="Cómo insertar un comentario en Excel usando C#"
resourcelisttext2="Cómo crear una tabla dinámica en Excel usando C#"
resourcelisttext3="Cómo rotar una celda en Excel usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="¿Listo para comenzar?"
rtstext="Descargue prueba gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas las API"
>}}
