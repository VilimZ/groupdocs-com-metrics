---
title: C# .NET-Bildverarbeitungs-API zum Bearbeiten und Bearbeiten von Fotos
description: .NET-Bildverarbeitungs-API zum Erstellen, Bearbeiten und Bearbeiten von Fotos in C#-, ASP.NET- oder VB.NET-Apps. Konvertieren Sie Bilder in die Formate PDF, JPG, PNG und GIF.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="C# .NET-Bildverarbeitungs-API zum Laden, Bearbeiten und Bearbeiten von Fotos"
  inheadertext="Optimieren Sie Ihre Bildverarbeitung mit dieser leistungsstarken und funktionsreichen .NET-Imaging-API. Erstellen, ändern und exportieren Sie Bilder programmgesteuert oder wenden Sie schnell verschiedene Effekte und Filter auf Fotos an. Sie können Ihre Bilder auch in PDF, JPG, PNG, GIF, SVG, PSD, BMP und andere Formate konvertieren."
  ctabtn="Download kostenlose Testversion"
  ctabtn="Download kostenlose Testversion"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Alle APIs anzeigen"
  bchomelink="/"
  bchome="Heim"
  bcpage="Bildgebung"
  bclink2="Produkte"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Überblick" 
subnav2="#features"
subnavtxt2="Merkmale" 
subnav3="#support"
subnavtxt3="Unterstützung" 
subnav4="#examples"
subnavtxt4="Beispiele" 
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Preisgestaltung" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Lernen"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Kaufen"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Erweiterte Fotobearbeitung und -manipulation in C# .NET"
   subtext="Aspose.Imaging für .NET ist eine robuste und flexible Bildverarbeitungs-API, die C#-, ASP.NET- und VB.NET-Entwicklern das Erstellen, Laden, Bearbeiten, Bearbeiten und Konvertieren bekannter Bilddateiformate wie JPG, PNG und GIF ermöglicht , BMP, TIFF, EMG, SVG und WebP unter anderem. Mit einem breiten Spektrum an unterstützten Funktionen und hervorragenden Bildverarbeitungsfunktionen ist Aspose.Imaging für .NET die ideale Lösung für Entwickler, um Bildbearbeitungsfunktionen in ihre .NET-Apps zu integrieren."
   subtext2="Wandeln Sie Ihre Fotos in Graustufen um, passen Sie die Helligkeit und den Kontrast von Bildern an oder wenden Sie andere Effekte und Filter mithilfe dieser .NET-Fotobearbeitungs-API an. Es unterstützt auch das programmgesteuerte Ändern der Größe, Komprimieren, Zuschneiden, Entzerren und Zusammenführen von Bildern. Sie können die bearbeiteten Bilder in PDF, PSD, GIF, PNG, JPEG und andere Dateitypen konvertieren. Mit dieser Bildverarbeitungs-API für .NET behalten Sie den Überblick über Ihre Fotobearbeitungs- und -manipulationsanforderungen."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Erste Schritte</h2>
   <p>Bitte überprüfen Sie die Seite <a href="https://docs.aspose.com/imaging/net/system-requirements/">Systemanforderungen</a>, um die Voraussetzungen für die Einrichtung der .NET-Image-API auf Ihrer Seite zu überprüfen ohne Probleme.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Imaging für die .NET-Installation"
>}} 
<p>Bitte laden Sie die DLLs oder das MSI-Installationsprogramm aus dem <a href="https://releases.aspose.com/imaging/net/">Downloadbereich</a> herunter, um die .NET-Bildverarbeitungs-API zu installieren. Alternativ können Sie auch das <a href="https://www.nuget.org/packages/Aspose.Imaging/">NuGet-Paket</a> zum Einrichten der API verwenden. Der Befehl für die Paketmanager-Konsole wird unten bereitgestellt:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="So konvertieren Sie Bilder in .NET und drehen oder spiegeln ein Bild"
featuretext="Aspose.Imaging für .NET ermöglicht die programmgesteuerte Konvertierung von Bildern in verschiedene Dateiformate. Damit können .NET-Entwickler bekannte Raster- und Vektorbilder wie PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF und WebP konvertieren. Sie können Bilder auch in Ihren .NET-Bildverarbeitungs-Apps spiegeln und drehen."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Konvertieren Sie Bilder in PDF, JPG, PNG und andere Formate in .NET"
>}} 
<p>Mithilfe der .NET-Imaging-API können Entwickler Bilder mühelos in PDF, JPG, PNG, BMP, GIF, SVG und andere Formate konvertieren. Das Konvertieren von PNG in JPG ist eine beliebte Option zur Bildkonvertierung, um Fotos oder gescannte Bilder von einem Dateiformat in ein anderes umzuwandeln. Die Aspose.Imaging for .NET-Bibliothek ermöglicht diese Konvertierung mit minimalem Programmieraufwand. Weitere Hilfe finden Sie in den folgenden Informationen:</p>
<ul>
   <li>Laden Sie die Quell-PNG-Datei mit der Klasse <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Konvertieren Sie PNG mit der Methode Image.Save(string, JpegOptions) in JPG.</li>
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
featurecolheading="Spiegeln oder drehen Sie Bilder in Ihren .NET-Bildverarbeitungs-Apps"
>}} 
<p>Sie können Ihre .NET-Bildbearbeitungs-Apps erweitern, indem Sie Fotobearbeitungsfunktionen wie das Spiegeln und Drehen von Bildern integrieren. Mit der Aspose.Imaging for .NET API können Sie ein Bild um 90, 180 und 270 Grad drehen und es außerdem horizontal oder vertikal spiegeln. Die unten aufgeführten Schritte und das C#-Code-Snippet bieten weitere Hilfe:</p>
<ul>
   <li>Laden Sie die Bilddatei mit der Klasse <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Drehen Sie das Bild um 180 Grad und spiegeln Sie es horizontal mit <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> Methode.</li>
   <li>Speichern Sie das aktualisierte Bild mit der Methode <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
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
   <p class="col-lg-12">Weitere funktionierende Beispiele der Aspose.Imaging for .NET API finden Sie auf <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Seite mit Beispielen</a>. Wenn Sie Ihre Multiformat-Bilder im Handumdrehen konvertieren, in der Größe ändern, komprimieren, mit Wasserzeichen versehen, drehen, spiegeln, zuschneiden, entzerren, bearbeiten oder zusammenführen möchten, schauen Sie sich bitte die Seite <a href="https://products.aspose.app/imaging/family">kostenlose Online-Apps</a> von Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Fügen Sie Ihren .NET-Bildbearbeitungs-Apps Bildkomprimierungsfunktionen hinzu"
featuretext="Aspose.Imaging für .NET ermöglicht das Komprimieren von Bildern, um die Größe von Bilddateien zu reduzieren. Mit den hervorragenden Bildkomprimierungsalgorithmen dieser .NET-Bild-API können Sie die Dateigröße um 30–70 % reduzieren, ohne die Bildqualität zu beeinträchtigen. Auf diese Weise können Sie Bilddateien effizient speichern und übertragen, ohne sich Gedanken über die Dateigröße machen zu müssen."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Wie kann ich Bilddateien in .NET konvertieren?"
 faqanswer="Das Konvertieren von Bildern wie JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS und vielem mehr in .NET ist mit der Aspose.Imaging für .NET-API schnell und einfach. Es sind nur wenige Zeilen .NET-Codierung erforderlich, um Ihre Multiformat-Bilder in verschiedene Dateiformate zu konvertieren."
>}} 
   {{< products/faq-block 
 faqquery="2. Wie lange dauert das Zusammenführen oder Konvertieren von Bildern?"
 faqanswer="Die .NET-Bildverarbeitungs-API arbeitet schnell und erledigt Ihre Bildkonvertierungs- und Zusammenführungsanfragen in kürzester Zeit."
>}} 
   {{< products/faq-block
 faqquery="3. Ist es sicher, Fotos und Bilder mit der .NET-API zu verarbeiten?"
 faqanswer="Sie können sich auf die Sicherheit Ihrer Fotos und Bilder verlassen, während Sie diese mit der Aspose.Imaging for .NET API verarbeiten. Wir gewährleisten den Schutz Ihrer Daten und ergreifen alle erforderlichen Maßnahmen, um Ihnen ein sicheres Benutzererlebnis zu bieten."
>}} 
   {{< products/faq-block
 faqquery="4. Kann ich Bilddateien unter Mac OS, Windows oder Linux verarbeiten?"
 faqanswer="Ja, die Imaging-API für .NET funktioniert auf verschiedenen Betriebssystemen, Frameworks und Betriebsumgebungen. Sie können es auf der Plattform Ihrer Wahl verwenden und es ist keine zusätzliche Softwareinstallation erforderlich, um zu funktionieren."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Foto- und Bildbearbeitungstools"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG zu PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG zu PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG zu PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG zu PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG zu JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP zu WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF zu SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF zu JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR zu PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPG zusammenführen"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF zusammenführen"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG zusammenführen"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Suche nach Hilfe?"
bartext="Schauen Sie sich unsere Supportkanäle an, um Hilfe bei Ihren Fragen zu den Funktionen und der Funktionsweise der Aspose-Produkt-API zu erhalten."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="API-Referenz"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Wissensbasis"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Kostenloser Support"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressourcen"
 sectionid="support"
 >}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogs"
 resourcealt="Blogs"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Zeichnen Sie Formen in C# – Linien, Bögen und Rechtecke"
 resourcelisttext2="Bilder programmgesteuert in C# verwischen"
 resourcelisttext3="Passen Sie Bildkontrast, Helligkeit und Gamma an"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Dokumentation"
 resourcealt="Dokumentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging für .NET-Funktionen"
 resourcelisttext2="Installieren Sie das Aspose.Imaging für .NET NuGet-Paket"
 resourcelisttext3="Kostenpflichtiger Support-Helpdesk für Aspose.Imaging für .NET"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Wissensbasis"
 resourcealt="Codebeispiele"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="So komprimieren Sie die Bildgröße in C#"
resourcelisttext2="So zeichnen Sie Grafiken in C#"
resourcelisttext3="So ändern Sie die Bildgröße in C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Bereit anzufangen?"
rtstext="Download kostenlose Testversion"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Alle APIs anzeigen"
>}} 
