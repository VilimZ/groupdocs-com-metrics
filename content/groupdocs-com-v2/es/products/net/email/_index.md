---
title: API de procesamiento de correo electrónico .NET para manipular archivos de correo electrónico de Outlook
description: Biblioteca de procesamiento de correo electrónico líder para .NET para administrar formatos de archivo Thunderbird y Outlook, incluidos MSG, EML y MBOX a través de los protocolos SMPT, POP3 e IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de procesamiento de correo electrónico .NET para manipular archivos de correo electrónico de Outlook"
  inheadertext="Simplifique el proceso de manipulación de archivos de correo electrónico de Microsoft Outlook y Mozilla Thunderbird en sus aplicaciones C#, ASP.NET y VB.NET. Trabaje con formatos de archivo MSG, EML, PST, OST, MBOX, VCF y HTML. Administre mediante programación mensajes de correo electrónico y archivos adjuntos a través de POP3, SMTP, IMAP o Microsoft Exchange Server."
  ctabtn="Descargue prueba gratis"
  ctabtn="Descargue prueba gratis"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Ver todas las API"
  bchomelink="/"
  bchome="Hogar"
  bcpage="Correo electrónico"
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
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Precios" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Aprender"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Comprar"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Una completa API de correo electrónico de .NET para manipular y procesar mensajes de correo electrónico"
   subtext="Aspose.Email para .NET es una API de procesamiento de correo electrónico flexible, robusta y fácil de usar que permite a los usuarios crear, modificar y analizar formatos de archivo de correo electrónico populares como MSG, PST, OST, EML, EMLX, MBOX, así como como VCF, HTML y MHTML en la plataforma .NET. Esto permite a los usuarios trabajar con diferentes formatos de mensajes de correo electrónico sin preocuparse por problemas de compatibilidad de formato. Además de acceder y administrar los correos electrónicos de Thunderbird y Outlook, los desarrolladores pueden usar la API de correo electrónico de .NET para manipular mediante programación los archivos adjuntos de correo electrónico, agregar o eliminar destinatarios, modificar el asunto del mensaje y hacer mucho más. "
   subtext2="Además, la capacidad de convertir mensajes de correo electrónico de un formato a otro a través de C#, ASP.NET y VB.NET hace que esta API de procesamiento de correo electrónico de .NET se destaque en uso y conjunto de funciones. Puede enviar y recibir mensajes de correo electrónico sin esfuerzo utilizando el protocolo de su elección entre POP3, SMTP, IMAP o conectarse a Microsoft Exchange Server. Aspose.Email para .NET lo ayuda a automatizar el proceso de administración de correo electrónico de manera eficiente."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Empezando</h2>
   <p>Consulte la página <a href="https://docs.aspose.com/email/net/system-requirements/">Requisitos del sistema</a> para conocer los requisitos previos antes de configurar Aspose.Email para .NET por su parte. . La siguiente información lo ayudará a configurar correctamente la API de correo electrónico de .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email para la instalación de .NET"
>}}
<p>Para descargar las DLL o el instalador MSI, visite la <a href="https://releases.aspose.com/email/net/">sección de descargas</a>. Como alternativa, puede usar el <a href="https://www.nuget.org/packages/Aspose.Email/">paquete NuGet</a> para la instalación de la API. El comando del administrador de paquetes para configurar la API de procesamiento de correo electrónico de .NET se comparte a continuación:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Cómo convertir correos electrónicos de Outlook a HTML y abrir mensajes de correo electrónico sin Outlook en .NET"
featuretext="Aspose.Email para .NET API permite convertir mediante programación mensajes MSG y EML a formato HTML. También admite el acceso y la apertura de correos electrónicos de Outlook dentro de sus aplicaciones .NET sin necesidad de Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Convierta archivos MSG o EML a HTML en .NET"
>}}
<p>Transforme sin problemas los correos electrónicos de Outlook a formato HTML con la ayuda de la biblioteca Aspose.Email para .NET. Puede desarrollar una aplicación de procesamiento de correo electrónico con funciones completas utilizando la API de correo electrónico de .NET e incorporar la funcionalidad de conversión de correo electrónico para convertir formatos MSG o EML a HTML. Consulte el fragmento de código y otra información compartida a continuación para este propósito:</p>
<ul>
   <li>Cree una instancia del objeto de clase <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> para acceder al archivo MSG o EML de origen.</li>
   <li>Aplique las opciones de guardado de HTML para el archivo HTML de salida.</li>
   <li>Guarde o exporte el archivo MSG en formato HTML utilizando el método Guardar.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
string FilePath = @"/Users/EmailData/";
// Load the MSG or EML file
MailMessage srcEmlMessage = MailMessage.Load(FilePath + "Message.msg");
// Set the Html rendering options
HtmlSaveOptions HtmlOptions = SaveOptions.DefaultHtml;
HtmlOptions.ResourceRenderingMode= resourceRenderingMode.EmbedIntoHtml;
// Set the email message headers in  output HTML using the formatting options
HtmlOptions.HtmlFormatOptions = HtmlFormatOptions.WriteHeader |
				HtmlFormatOptions.WriteCompleteEmailAddress |
				HtmlFormatOptions.WriteCompleteFromEmailAddress;
// Convert and save the email to HTML format
srcEmlMessage.Save(FilePath + "Message.html", HtmlOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Abrir correos electrónicos en .NET sin Outlook"
>}}
<p>¿Está buscando abrir mensajes de Outlook en sus aplicaciones de procesamiento de correo electrónico .NET sin instalar Microsoft Outlook? En caso afirmativo, Aspose.Email para .NET API es la opción adecuada para usted. Permite a los desarrolladores de .NET acceder y abrir archivos de correo electrónico MSG y recuperar información como el asunto del correo electrónico, la dirección del remitente y los archivos adjuntos. Por favor, consulte la siguiente información para obtener más información:</p>
<ul>
   <li>Cargue el archivo de correo electrónico MSG de origen en un objeto de clase <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Lea y muestre diferentes propiedades del archivo MSG.</li>
   <li>Analice los <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">archivos adjuntos</a> y lea/muestre diferentes propiedades de los archivos adjuntos en el MSG archivo.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Load the MSG file
MapiMessage mapiMsg = MapiMessage.Load("message.msg");
// Display email subject
Console.WriteLine("Subject:" + mapiMsg.Subject);
// Display sender address
Console.WriteLine("From:" + mapiMsg.SenderEmailAddress);
// Display email body
Console.WriteLine("Body" + mapiMsg.Body);
// Display recipients' information
Console.WriteLine("Recipient: " + mapiMsg.Recipients);
// Display email attachments
foreach (MapiAttachment att in mapiMsg.Attachments)
{
     Console.Write("File Name: " + att.FileName);
     Console.Write("Display Name: " + att.DisplayName);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Para ver más ejemplos de trabajo y muestras de codificación de Aspose.Email para .NET API, visite <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Ejemplos de GitHub</a> página. También proporcionamos <a href="https://products.aspose.app/email/family">aplicaciones en línea gratuitas</a> para Aspose.Email para ayudarlo a convertir, comparar, ver, marcar con agua, fusionar, editar y Firme digitalmente sus archivos de correo electrónico sobre la marcha utilizando sus dispositivos móviles.</p>
{{< products/product-feature-blocks
featureheading="Análisis de correo electrónico sin dependencias en .NET"
featuretext="Los desarrolladores de .NET que trabajan con múltiples formatos de archivo de correo electrónico pueden utilizar las amplias funciones de Aspose.Email para .NET para crear aplicaciones de procesamiento de correo electrónico cargadas con la capacidad de analizar y almacenar mensajes de correo electrónico de manera segura e independiente. No se requiere Microsoft Automation ni ningún otro software de terceros porque esta API de correo electrónico de .NET se crea con código administrado."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="Preguntas más frecuentes"
>}}
   {{< products/faq-block
 faqquery="1. ¿Cómo puedo convertir archivos de correo electrónico en .NET?"
 faqanswer="La conversión de archivos de correo electrónico de Microsoft Exchange o Thunderbird en .NET es rápida y sencilla con Aspose.Email para la API de .NET. Solo se necesitan unas pocas líneas de codificación .NET para convertir archivos MSG, PST, OST, EML, EMLX, MBOX y HTML a diferentes formatos de archivo."
>}}
   {{< products/faq-block 
 faqquery="2. ¿Cuánto tiempo lleva convertir o procesar archivos de correo electrónico?"
 faqanswer="La API de .NET para manipular y procesar archivos de correo electrónico funciona rápido y completa sus solicitudes de conversión de archivos de correo electrónico en muy poco tiempo."
>}}
   {{< products/faq-block
 faqquery="3. ¿Es seguro procesar correos electrónicos con la API de .NET?"
 faqanswer="Puede estar seguro de la seguridad de sus archivos de mensajes de correo electrónico mientras los procesa utilizando Aspose.Email para .NET API. Garantizamos la privacidad de sus datos y tomamos todas las medidas necesarias para brindarle una experiencia de usuario segura."
>}}
   {{< products/faq-block
 faqquery="4. ¿Puedo procesar archivos de correo electrónico en Mac OS, Windows o Linux?"
 faqanswer="Sí, la API de procesamiento de correo electrónico para .NET funciona en diferentes sistemas operativos, marcos y entornos operativos. Puede usarlo en la plataforma que elija y no requiere ninguna instalación de software adicional para funcionar."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Herramientas de manipulación de archivos de correo electrónico"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG a PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GMS a EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSJ a HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG a MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG a PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG a VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML a PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML a HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML a MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX a XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST a PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST a EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="¿En busca de ayuda?"
bartext="Consulte nuestros canales de soporte para obtener ayuda con sus preguntas relacionadas con las funciones y el funcionamiento de la API del producto Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Referencia de la API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Base de conocimientos"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Soporte gratuito"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Recursos sectionid=soporte"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="blogs"
 resourcealt="blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Crear mensajes MIME en C# .NET"
 resourcelisttext2="Combinar múltiples archivos MBOX en C#"
 resourcelisttext3="Enviar datos de Excel en el cuerpo del correo electrónico usando C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentación"
 resourcealt="Documentación"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Características de Aspose.Email para .NET"
 resourcelisttext2="Instale Aspose.Email para el paquete .NET NuGet"
 resourcelisttext3="Soporte técnico de pago de Aspose.Email para .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de conocimientos"
 resourcealt="Ejemplos de código"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Cómo enviar un correo electrónico en C#"
resourcelisttext2="Cómo crear un archivo PST en C#"
resourcelisttext3="Cómo agregar MapiCalendar a PST usando C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="¿Listo para comenzar?"
rtstext="Descargue prueba gratis"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Ver todas las API"
>}}
