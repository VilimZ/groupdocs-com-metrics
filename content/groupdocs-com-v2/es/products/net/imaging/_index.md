---
title: API de procesamiento de imágenes C# .NET para manipular y editar fotos
description: API de procesamiento de imágenes .NET para crear, manipular y editar fotos en aplicaciones C#, ASP.NET o VB.NET. Convierta imágenes a formatos PDF, JPG, PNG y GIF.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de procesamiento de imágenes C# .NET para cargar, manipular y editar fotos"
  inheadertext="Optimice el procesamiento de imágenes con esta potente API de generación de imágenes de .NET rica en funciones. Cree, modifique y exporte imágenes mediante programación o aplique rápidamente diferentes efectos y filtros a las fotos. También puede convertir sus imágenes a PDF, JPG, PNG, GIF, SVG, PSD, BMP y otros formatos."
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="Imágenes"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Edición y manipulación avanzada de fotos en C# .NET"
   subtext="Aspose.Imaging para .NET es una API de procesamiento de imágenes robusta y flexible que permite a los desarrolladores de C#, ASP.NET y VB.NET crear, cargar, editar, manipular y convertir formatos de archivo de imagen conocidos como JPG, PNG, GIF. , BMP, TIFF, EMG, SVG y WebP, entre otros. Con un amplio espectro de funciones compatibles y excelentes capacidades de procesamiento de imágenes, Aspose.Imaging para .NET es la solución ideal para que los desarrolladores incorporen la funcionalidad de manipulación de imágenes en sus aplicaciones .NET."
   subtext2="Transforme sus fotos a escala de grises, ajuste el brillo y el contraste de las imágenes o aplique otros efectos y filtros con la ayuda de esta API de edición de fotos de .NET. También es compatible con el cambio de tamaño, la compresión, el recorte, el enderezado y la fusión de imágenes mediante programación. Puede convertir las imágenes editadas a PDF, PSD, GIF, PNG, JPEG y otros tipos de archivos. Esta API de procesamiento de imágenes para .NET lo mantiene al tanto de sus necesidades de edición y manipulación de fotografías."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Revise la página <a href="https://docs.aspose.com/imaging/net/system-requirements/">Requisitos del sistema</a> para verificar los requisitos previos para configurar la API de imagen .NET en su extremo. sin ningún problema.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Instalación de Aspose.Imaging para .NET"
>}} 
<p>Descargue las DLL o el instalador MSI de la <a href="https://releases.aspose.com/imaging/net/">sección de descargas</a> para instalar la API de procesamiento de imágenes .NET. Como alternativa, también puede usar el <a href="https://www.nuget.org/packages/Aspose.Imaging/">paquete NuGet</a> para configurar la API. El comando para la consola del administrador de paquetes se proporciona a continuación:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cómo convertir imágenes en .NET y rotar o voltear una imagen"
featuretext="Aspose.Imaging para .NET permite convertir mediante programación imágenes a diferentes formatos de archivo. Permite a los desarrolladores de .NET convertir imágenes rasterizadas y vectoriales conocidas como PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF y WebP. También puede voltear y rotar imágenes dentro de sus aplicaciones de procesamiento de imágenes .NET."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Convierta imágenes a PDF, JPG, PNG y otros formatos en .NET"
>}} 
<p>Con la ayuda de la API de imágenes de .NET, los desarrolladores pueden convertir fácilmente imágenes a PDF, JPG, PNG, BMP, GIF, SVG y otros formatos. La conversión de PNG a JPG es una opción popular de conversión de imágenes para ayudar a transformar fotos o imágenes escaneadas de un formato de archivo a otro. La biblioteca Aspose.Imaging para .NET permite esta conversión utilizando una codificación mínima. Consulte la siguiente información para obtener más ayuda:</p>
<ul>
   <li>Cargue el archivo PNG de origen utilizando la clase <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Convierte PNG a JPG usando el método Image.Save(string, JpegOptions).</li>
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
featurecolheading="Voltear o rotar imágenes en sus aplicaciones de procesamiento de imágenes .NET"
>}} 
<p>Puede aumentar sus aplicaciones de manipulación de imágenes .NET incorporando funciones de edición de fotografías, como voltear y rotar imágenes. Aspose.Imaging for .NET API le permite rotar una imagen 90, 180 y 270 grados, además de la capacidad de voltearla horizontal o verticalmente. Los pasos a continuación y el fragmento de código C# ofrecen más ayuda:</p>
<ul>
   <li>Cargue el archivo de imagen usando la clase <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Imagen</a>.</li>
   <li>Gire la imagen 180 grados y gírela horizontalmente usando <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> método.</li>
   <li>Guarde la imagen actualizada con el método <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
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
   <p class="col-lg-12">Para obtener más ejemplos prácticos de Aspose.Imaging para la API de .NET, visite <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Página de ejemplos</a>. Si desea convertir, cambiar el tamaño, comprimir, marcar con marca de agua, rotar, voltear, recortar, enderezar, editar o fusionar sus imágenes multiformato sobre la marcha, consulte <a href="https://products.aspose.app/imaging/family">aplicaciones en línea gratuitas</a> de Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Agregue capacidad de compresión de imágenes a sus aplicaciones de manipulación de imágenes .NET"
featuretext="Aspose.Imaging para .NET permite comprimir imágenes para ayudar a reducir el tamaño de los archivos de imágenes. Los excelentes algoritmos de compresión de imágenes de esta API de imágenes de .NET le permiten reducir el tamaño del archivo entre un 30 y un 70 % sin comprometer la calidad de la imagen. De esta manera, puede almacenar y transferir archivos de imagen de manera eficiente sin preocuparse por el tamaño del archivo."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Preguntas más frecuentes"
>}} 
   {{< products/faq-block
 faqquery="1. ¿Cómo puedo convertir archivos de imagen en .NET?"
 faqanswer="Convertir imágenes como JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS y muchas más en .NET es rápido y fácil usando Aspose.Imaging para .NET API. Solo se necesitan unas pocas líneas de codificación .NET para convertir sus imágenes multiformato a diferentes formatos de archivo."
>}} 
   {{< products/faq-block 
 faqquery="2. ¿Cuánto tiempo lleva fusionar o convertir imágenes?"
 faqanswer="La API de procesamiento de imágenes de .NET funciona rápido y completa sus solicitudes de fusión y conversión de imágenes en muy poco tiempo."
>}} 
   {{< products/faq-block
 faqquery="3. ¿Es seguro procesar fotos e imágenes con la API de .NET?"
 faqanswer="Puede estar seguro de la seguridad de sus fotos e imágenes mientras las procesa utilizando Aspose.Imaging para .NET API. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura."
>}} 
   {{< products/faq-block
 faqquery="4. ¿Puedo procesar archivos de imagen en Mac OS, Windows o Linux?"
 faqanswer="Sí, la API de imágenes para .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puede usarlo en la plataforma que elija y no requiere ninguna instalación de software adicional para funcionar."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Herramientas de manipulación de fotos e imágenes"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG a PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG a PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG a PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG a PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG a JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP a WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF a SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF a JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR a PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionar JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Combinar TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Combinar PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="Referencia de la API"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Base de conocimientos"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Soporte gratuito"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Dibujar formas en C#: líneas, arcos y rectángulos"
 resourcelisttext2="Desenfocar imágenes programáticamente en C#"
 resourcelisttext3="Ajustar contrato de imagen, brillo y gamma"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentación"
 resourcealt="Documentación"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Características de Aspose.Imaging para .NET"
 resourcelisttext2="Instale Aspose.Imaging para el paquete .NET NuGet"
 resourcelisttext3="Aspose.Imaging para .NET Asistencia técnica de pago"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de conocimientos"
 resourcealt="Ejemplos de código"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Cómo comprimir el tamaño de la imagen en C#"
resourcelisttext2="Cómo dibujar gráficos en C#"
resourcelisttext3="Cómo cambiar el tamaño de la imagen en C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="¿Listo para comenzar?"
rtstext="Descargue prueba gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas las API"
>}} 
