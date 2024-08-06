---
title: API C# .NET PowerPoint pour le traitement des fichiers de présentation
description: Une puissante API .NET PowerPoint pour le traitement des formats de fichiers de présentation tels que PPT, POT, PPS et ODP. Créez, modifiez et convertissez des diapositives par programmation.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API C# .NET PowerPoint pour le traitement des formats de fichiers de présentation"
  inheadertext="Boostez vos présentations .NET en développant des applications pour générer, traiter et manipuler des diapositives Microsoft PowerPoint. Gérez différents formats de fichiers de présentation, notamment PPT, PPTX, POT, POTX, PPS, PPSX et ODP. Convertissez des documents PowerPoint en PDF, HTML, images raster et vecteurs SVG."
  ctabtn="Télécharger la version d'essai gratuite"
  ctabtn="Télécharger la version d'essai gratuite"
  ctalink="https://releases.aspose.com/slides/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Afficher toutes les API"
  bchomelink="/"
  bchome="Maison"
  bcpage="Diapositives"
  bclink2="Des produits"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Aperçu" 
subnav2="#features"
subnavtxt2="Caractéristiques" 
subnav3="#support"
subnavtxt3="Soutien" 
subnav4="#examples"
subnavtxt4="Exemples" 
subnav5="https://purchase.aspose.com/pricing/slides/net"
subnavtxt5="Tarification" 
subbtn1="https://docs.aspose.com/slides/net/"
subbtntxt1="Apprendre"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acheter"
>}}
   {{< products/subtext-wrapper sectionid="overview"
   subtitle="Manipuler des diapositives PowerPoint à l'aide de l'API de présentation .NET"
   subtext="Aspose.Slides pour .NET est une API .NET PowerPoint complète et flexible permettant aux développeurs de logiciels et d'applications de générer, modifier, manipuler et exporter par programme des présentations Microsoft PowerPoint sur la plate-forme .NET. Il prend en charge le traitement de divers formats de fichiers PowerPoint populaires tels que PPT, POT, PPTX, PPS, POTX et PPTM ainsi que des documents OpenOffice (ODP). Les programmeurs peuvent utiliser les capacités avancées de mise en forme et de traitement de présentation de cette bibliothèque .NET pour ajouter, supprimer, diviser ou fusionner des diapositives de présentation, appliquer la mise en forme du texte, gérer les animations et les transitions de diapositives, travailler avec des images, des formes, des tableaux et des graphiques, et faire tellement plus."
   subtext2="Bénéficiant d'un moteur de rendu complexe, l'API Aspose.Slides pour .NET vous aide à convertir parfaitement les présentations PowerPoint en plusieurs formats de fichiers tels que PowerPoint en PDF, PowerPoint en JPG et PowerPoint en HTML."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Commencer</h2>
   <p>Avant de configurer l'API de présentations PowerPoint .NET, veuillez consulter la page <a href="https://docs.aspose.com/slides/net/system-requirements/">Configuration requise</a> pour connaître les prérequis afin de vous aider vous installez l'API sans aucun problème.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Slides pour l'installation de .NET"
>}}
<p>Vous pouvez télécharger directement les DLL ou le programme d'installation MSI d'Aspose.Slides pour .NET en visitant la <a href="https://releases.aspose.com/slides/net/">section de téléchargement</a>. Vous pouvez également utiliser le <a href="https://www.nuget.org/packages/Aspose.Slides.Net/">package NuGet</a> pour installer l'API .NET PowerPoint. La commande de configuration de la bibliothèque dans la console du gestionnaire de packages est donnée ci-dessous :</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.Slides.NET
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Comment convertir PowerPoint en PDF dans .NET et fusionner rapidement des présentations"
featuretext="Aspose.Slides pour .NET est la principale API de manipulation de présentations PowerPoint qui comprend un ensemble de fonctionnalités génial avec la possibilité de convertir des présentations. Convertissez en toute transparence PowerPoint en PDF et autres formats de fichiers dans .NET et fusionnez des diapositives de présentation à l'aide de l'API .NET PowerPoint."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Convertir PowerPoint en PDF dans .NET"
>}}
<p>Effectuez des présentations PowerPoint immaculées en conversions PDF en C# .NET à l'aide de l'API Aspose.Slides pour .NET tout en définissant différentes propriétés du document PDF résultant au cours du processus. Veuillez vous référer aux étapes suivantes et à l'exemple de codage pour convertir PowerPoint PPT en PDF sur la plate-forme .NET :</p>
<ul>
   <li>Créez une instance de l'objet de classe <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> pour charger le fichier de présentation source.</li>
   <li>Initialisez l'objet de classe <a href="https://apireference.aspose.com/slides/net/aspose.slides.export/pdfoptions/">PdfOptions</a> pour définir les options d'image souhaitées.</li>
   <li>Définissez les options PDF souhaitées pour le fichier PDF résultant.</li>
   <li>Convertissez la présentation au format PDF à l'aide de la méthode Enregistrer.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Create an instance of the Presentation class object to load the PPT file
 Presentation presPPT = new Presentation("TestPresentation.ppt");
// Create the PdfOptions class object
PdfOptions exportPdfOptions = new PdfOptions();
// Set the JPEG quality for images inside the presentation
exportPdfOptions.JpegQuality = 90;
// Set the metafiles behavior
exportPdfOptions.SaveMetafilesAsPng = true;
// Apply the text compression level
exportPdfOptions.TextCompression = PdfTextCompression.Flate;
// Set the output PDF standard
exportPdfOptions.Compliance = PdfCompliance.Pdf15;
// Convert and Save the Presentation to PDF
presPPT.Save("PPT-to-PDF.pdf", SaveFormat.Pdf, exportPdfOptions);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Fusionner des présentations dans .NET"
>}}
<p>La fusion de présentations dans un document PowerPoint unifié est une fonctionnalité importante d'Aspose.Slides pour l'API .NET. Veuillez vérifier les étapes et les informations ci-dessous pour combiner rapidement et facilement plusieurs présentations PowerPoint PPTX dans vos applications de fusion de documents à l'aide de l'API de présentations .NET :</p>
<ul>
   <li>Créez une instance de la classe <a href="https://apireference.aspose.com/slides/net/aspose.slides/presentation">Presentation</a> pour charger la présentation source.</li>
   <li>Initialisez des objets de classe Presentation distincts pour les présentations cibles requises.</li>
   <li>En boucle, parcourez toutes les <a href="https://apireference.aspose.com/slides/net/aspose.slides/islide">diapositives</a> dans les présentations cibles.</li>
   <li>Appelez la méthode AddClone() de la collection de diapositives de la présentation source où d'autres présentations doivent être combinées.</li>
   <li>Enregistrez la présentation résultante contenant toutes les diapositives des présentations cibles.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Load the source presentation
Presentation prest1 = new Presentation("prest1.pptx");
// Initialize separate Presentation class objects for the target presentations
Presentation prest2 = new Presentation("prest2.pptx");
Presentation prest3 = new Presentation("prest3.pptx");
// Loop through all target presentations slides
foreach (ISlide slide in prest2.Slides)
    prest1.Slides.AddClone(slide);
 foreach (ISlide slide in prest3.Slides)
    prest1.Slides.AddClone(slide);
// Save the resultant presentation with all the slides from the target presentations
prest1.Save("combined.pptx", SaveFormat.Pptx);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">D'autres exemples de travail et des exemples de codage complets d'Aspose.Slides pour l'API .NET sont disponibles sur le <a href="https://github.com/aspose-slides/Aspose.Slides-for-.NET/tree/master/Examples">Page d'exemples GitHub</a>. Veuillez consulter les <a href="https://products.aspose.app/slides/family">applications en ligne gratuites</a> d'Aspose.Slides qui vous permettent d'afficher, de convertir, d'analyser, de comparer, de filigraner, de rédiger, divisez et modifiez les fichiers de présentation PowerPoint de n'importe où à l'aide de vos appareils mobiles ou de bureau.</p>
{{< products/product-feature-blocks
featureheading="API de présentation .NET sécurisée et indépendante"
featuretext="Avec Aspose.Slides pour .NET, vous avez accès à d'excellentes fonctionnalités de sécurité permettant un traitement de présentation fiable dans .NET. Cela inclut la possibilité de protéger les présentations par mot de passe et la prise en charge du mode lecture seule. De plus, l'installation de Microsoft PowerPoint n'est pas nécessaire lors de l'utilisation de l'API de présentation .NET, ce qui vous offre une expérience utilisateur totalement indépendante et unique."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
faqquery="1. Comment puis-je convertir des fichiers PowerPoint en .NET ?"
 faqanswer="La conversion de fichiers Microsoft PowerPoint en .NET est simple et rapide à l'aide de l'API Aspose.Slides pour .NET. Seules quelques lignes de codage .NET sont nécessaires pour convertir les fichiers PPT, PPTX, PPS, PPSX, POT, POTX, PPTM et ODP en différents formats de fichiers."
>}}
   {{< products/faq-block 
faqquery="2. Combien de temps faut-il pour fusionner ou convertir des diapositives PowerPoint ?"
 faqanswer="L'API .NET pour la manipulation et le traitement des diapositives de présentation fonctionne rapidement et complète vos demandes de conversion et de fusion de fichiers de présentation en un rien de temps."
>}}
   {{< products/faq-block
faqquery="3. Est-il sûr de traiter des présentations à l'aide de l'API .NET ?"
 faqanswer="Vous pouvez être sûr de la sécurité de vos fichiers de présentation PowerPoint lors de leur traitement à l'aide de l'API Aspose.Slides pour .NET. Nous veillons à la confidentialité de vos données et prenons toutes les mesures nécessaires pour vous offrir une expérience utilisateur sécurisée."
>}}
   {{< products/faq-block
faqquery="4. Puis-je traiter des présentations PowerPoint sur Mac OS, Windows ou Linux ?"
 faqanswer="Oui, l'API de traitement des présentations PowerPoint pour .NET fonctionne sur différents systèmes d'exploitation, frameworks et environnements d'exploitation. Vous pouvez l'utiliser sur la plate-forme de votre choix et il ne nécessite aucune installation de logiciel supplémentaire pour fonctionner."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Outils de manipulation de présentations PowerPoint"
>}}
   {{< products/popularapp-anchor
 anchorlink="PowerPoint en PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint en JPEG"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PowerPoint en HTML"
 moreproducts="https://products.aspose.com/slides/net/conversion/ppt-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX en PDF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX vers GIF"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-gif/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PPTX vers PNG"
 moreproducts="https://products.aspose.com/slides/net/conversion/pptx-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner PPT"
 moreproducts="https://products.aspose.com/slides/net/merger/ppt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner PPTX"
 moreproducts="https://products.aspose.com/slides/net/merger/pptx/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner ODP"
 moreproducts="https://products.aspose.com/slides/net/merger/odp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner POT"
 moreproducts="https://products.aspose.com/slides/net/merger/pot/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner PPTM"
 moreproducts="https://products.aspose.com/slides/net/merger/pptm/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Fusionner les SPP"
 moreproducts="https://products.aspose.com/slides/net/merger/pps/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Vous cherchez de l'aide ?"
bartext="Consultez nos canaux d'assistance pour obtenir de l'aide sur vos questions liées aux fonctionnalités et au fonctionnement de l'API du produit Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/slides/net/"
 resourcetxt2="Référence API"
 resourcelinks2="https://reference.aspose.com/slides/" 
 resourcetxt3="Base de connaissances"
 resourcelinks3="https://kb.aspose.com/slides/net/"
 resourcetxt4="Assistance gratuite"
 resourcelinks4="https://forum.aspose.com/c/slides/11"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressources"
 sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogues"
 resourcealt="Blogues"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/slides/convert-ppt-to-video-csharp/"
 resourcelistlink2="https://blog.aspose.com/slides/encrypt-ppt-csharp/"
 resourcelistlink3="https://blog.aspose.com/slides/convert-jpg-to-ppt-csharp/"
 resourcelisttext="Convertir PPT en vidéo en C#"
 resourcelisttext2="Crypter PowerPoint en C#"
 resourcelisttext3="Convertir JPG en PPT en C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/slides/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Slides.Net/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Slides pour les fonctionnalités .NET"
 resourcelisttext2="Installer le package Aspose.Slides pour .NET NuGet"
 resourcelisttext3="Aspose.Slides pour le service d'assistance payant .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de connaissances"
 resourcealt="Exemples de codes"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/slides/net/how-to-merge-slides-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/slides/net/how-to-insert-signature-in-powerpoint-using-csharp/"
 resourcelistlink3="https://kb.aspose.com/slides/net/how-to-create-a-table-in-powerpoint-using-csharp/"
 resourcelisttext="Comment fusionner des diapositives en C #"
resourcelisttext2="Comment insérer une signature dans PowerPoint à l'aide de C #"
resourcelisttext3="Comment créer un tableau dans PowerPoint à l'aide de C #"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Prêt à commencer?"
rtstext="Télécharger la version d'essai gratuite"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Afficher toutes les API"
>}}
