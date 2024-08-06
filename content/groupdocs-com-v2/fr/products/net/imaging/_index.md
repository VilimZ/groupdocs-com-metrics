---
title: API de traitement d'images C# .NET pour manipuler et modifier des photos
description: API de traitement d'images .NET pour créer, manipuler et éditer des photos dans des applications C#, ASP.NET ou VB.NET. Convertissez des images aux formats PDF, JPG, PNG et GIF.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de traitement d'images C# .NET pour charger, manipuler et modifier des photos"
  inheadertext="Rationalisez votre traitement d'image à l'aide de cette API d'imagerie .NET puissante et riche en fonctionnalités. Créez, modifiez et exportez des images par programmation ou appliquez rapidement différents effets et filtres aux photos. Vous pouvez également convertir vos images au format PDF, JPG, PNG, GIF, SVG, PSD, BMP et autres."
  ctabtn="Télécharger la version d'essai gratuite"
  ctabtn="Télécharger la version d'essai gratuite"
  ctalink="https://releases.aspose.com/imaging/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Afficher toutes les API"
  bchomelink="/"
  bchome="Maison"
  bcpage="Imagerie"
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
subnav5="https://purchase.aspose.com/pricing/imaging/net"
subnavtxt5="Tarification" 
subbtn1="https://docs.aspose.com/imaging/net/"
subbtntxt1="Apprendre"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acheter"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Édition et manipulation avancées de photos en C# .NET"
   subtext="Aspose.Imaging pour .NET est une API de traitement d'image robuste et flexible permettant aux développeurs C#, ASP.NET et VB.NET de créer, charger, éditer, manipuler et convertir des formats de fichiers image bien connus tels que JPG, PNG, GIF , BMP, TIFF, EMG, SVG et WebP entre autres. Avec un large éventail de fonctionnalités prises en charge et des capacités de traitement d'image exquises, Aspose.Imaging pour .NET est la solution idéale pour les développeurs qui souhaitent incorporer des fonctionnalités de manipulation d'images dans leurs applications .NET."
   subtext2="Transformez vos photos en niveaux de gris, ajustez la luminosité et le contraste des images ou appliquez d'autres effets et filtres à l'aide de cette API de retouche photo .NET. Il prend également en charge le redimensionnement, la compression, le recadrage, le redressement et la fusion d'images par programme. Vous pouvez convertir les images modifiées en PDF, PSD, GIF, PNG, JPEG et autres types de fichiers. Cette API de traitement d'image pour .NET vous permet de rester au top de vos besoins d'édition et de manipulation de photos."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Commencer</h2>
   <p>Veuillez consulter la page <a href="https://docs.aspose.com/imaging/net/system-requirements/">Configuration requise</a> pour vérifier les conditions préalables à la configuration de l'API d'image .NET de votre côté sans aucun problème.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Installation d'Aspose.Imaging pour .NET"
>}} 
<p>Veuillez télécharger les DLL ou le programme d'installation MSI à partir de la <a href="https://releases.aspose.com/imaging/net/">section des téléchargements</a> pour installer l'API de traitement d'image .NET. Vous pouvez également utiliser le <a href="https://www.nuget.org/packages/Aspose.Imaging/">package NuGet</a> pour configurer l'API. La commande pour la console du gestionnaire de packages est fournie ci-dessous :</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}} 
PM > Install-Package Aspose.Imaging 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Comment convertir des images dans .NET et faire pivoter ou retourner une image"
featuretext="Aspose.Imaging pour .NET permet de convertir par programmation des images en différents formats de fichiers. Il permet aux développeurs .NET de convertir des images raster et vectorielles bien connues telles que PNG, JPG, BMP, GIF, TIFF, SVG, EPS, CDR, EMF et WebP. Vous pouvez également retourner et faire pivoter des images dans vos applications de traitement d'images .NET."
>}} 
{{< products/product-feature-blocks-col
featurecolheading="Convertir des images en PDF, JPG, PNG et autres formats dans .NET"
>}} 
<p>Avec l'aide de l'API d'imagerie .NET, les développeurs peuvent facilement convertir des images au format PDF, JPG, PNG, BMP, GIF, SVG et autres. La conversion de PNG en JPG est une option de conversion d'image populaire pour aider à transformer des photos ou des images numérisées d'un format de fichier à un autre. La bibliothèque Aspose.Imaging pour .NET permet cette conversion en utilisant un minimum de codage. Veuillez vérifier les informations suivantes pour plus d'aide :</p>
<ul>
   <li>Chargez le fichier PNG source à l'aide de la classe <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Convertissez PNG en JPG en utilisant la méthode Image.Save(string, JpegOptions).</li>
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
featurecolheading="Retourner ou faire pivoter des images dans vos applications de traitement d'images .NET"
>}} 
<p>Vous pouvez augmenter vos applications de manipulation d'images .NET en incorporant des fonctionnalités d'édition de photos telles que le retournement et la rotation d'images. Aspose.Imaging pour l'API .NET vous permet de faire pivoter une image de 90, 180 et 270 degrés en plus de la possibilité de la retourner horizontalement ou verticalement. Les étapes ci-dessous et l'extrait de code C# offrent plus d'aide :</p>
<ul>
   <li>Chargez le fichier image à l'aide de la classe <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image">Image</a>.</li>
   <li>Faites pivoter l'image de 180 degrés et retournez-la horizontalement à l'aide de <a href="https://reference.aspose.com/imaging/net/aspose.imaging/image/methods/rotateflip">Image.RotateFlip(RotateFlipType.Rotate180FlipX)</a> méthode.</li>
   <li>Enregistrez l'image mise à jour à l'aide de la méthode <a href="https://reference.aspose.com/imaging/net/aspose.imaging.image/save/methods/3">Image.Save(string)</a>.</li>
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
   <p class="col-lg-12">Pour plus d'exemples de travail d'Aspose.Imaging pour l'API .NET, veuillez visiter le <a href="https://github.com/aspose-imaging/Aspose.Imaging-for-.NET/tree/master/Examples">GitHub Page d'exemples</a>. Si vous cherchez à convertir, redimensionner, compresser, filigraner, faire pivoter, retourner, recadrer, redresser, modifier ou fusionner vos images multiformats à la volée, veuillez consulter le <a href="https://products.aspose.app/imaging/family">applications en ligne gratuites</a> d'Aspose.Imaging.</p>
{{< products/product-feature-blocks
featureheading="Ajoutez une capacité de compression d'image à vos applications de manipulation d'images .NET"
featuretext="Aspose.Imaging pour .NET permet de compresser des images pour aider à réduire la taille des fichiers image. Les excellents algorithmes de compression d'image de cette API d'imagerie .NET vous permettent de réduire la taille du fichier de 30 à 70 % sans compromettre la qualité de l'image. De cette façon, vous pouvez stocker et transférer efficacement des fichiers image sans vous soucier de la taille du fichier."
>}} 
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}} 
   {{< products/faq-block
 faqquery="1. Comment puis-je convertir des fichiers image en .NET ?"
 faqanswer="La conversion d'images telles que JPG, PNG, BMP, GIF, SVG, CDR, TIFF, EMF, EPS, etc. dans .NET est simple et rapide à l'aide de l'API Aspose.Imaging pour .NET. Seules quelques lignes de codage .NET sont nécessaires pour convertir vos images multiformats en différents formats de fichiers."
>}} 
   {{< products/faq-block 
 faqquery="2. Combien de temps faut-il pour fusionner ou convertir des images ?"
 faqanswer="L'API de traitement d'images .NET fonctionne rapidement et traite vos demandes de conversion et de fusion d'images en un rien de temps."
>}} 
   {{< products/faq-block
 faqquery="3. Est-il sûr de traiter des photos et des images à l'aide de l'API .NET ?"
 faqanswer="Vous pouvez être sûr de la sécurité de vos photos et images lors de leur traitement à l'aide de l'API Aspose.Imaging pour .NET. Nous veillons à la confidentialité de vos données et prenons toutes les mesures nécessaires pour vous offrir une expérience utilisateur sécurisée."
>}} 
   {{< products/faq-block
 faqquery="4. Puis-je traiter des fichiers image sur Mac OS, Windows ou Linux ?"
 faqanswer="Oui, l'API d'imagerie pour .NET fonctionne sur différents systèmes d'exploitation, frameworks et environnements d'exploitation. Vous pouvez l'utiliser sur la plate-forme de votre choix et il ne nécessite aucune installation de logiciel supplémentaire pour fonctionner."
>}} 
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper 
   popularheading="Outils de manipulation de photos et d'images"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG vers PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/jpeg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG en PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/png-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG en PDF"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/svg-to-PDF/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG à PSD"
moreproducts="https://products.aspose.com/imaging/net/conversion/jpeg-to-psd/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="SVG vers JPEG"
moreproducts="https://products.aspose.com/imaging/en/net/conversion/SVG-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP vers WEBP"
moreproducts="https://products.aspose.com/imaging/net/conversion/bmp-to-webp/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF vers SVG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-svg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF à JPEG"
moreproducts="https://products.aspose.com/imaging/net/conversion/gif-to-jpeg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="CDR en PNG"
moreproducts="https://products.aspose.com/imaging/net/conversion/cdr-to-png/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner JPG"
moreproducts="https://products.aspose.com/imaging/net/merge/jpg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="Fusionner TIFF"
moreproducts="https://products.aspose.com/imaging/net/merge/tiff/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="Fusionner PNG"
moreproducts="https://products.aspose.com/imaging/net/merge/png/"
>}} 
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Vous cherchez de l'aide ?"
bartext="Consultez nos canaux d'assistance pour obtenir de l'aide sur vos questions liées aux fonctionnalités et au fonctionnement de l'API du produit Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/imaging/net/"
 resourcetxt2="Référence API"
 resourcelinks2="https://reference.aspose.com/imaging/" 
 resourcetxt3="Base de connaissances"
 resourcelinks3="https://kb.aspose.com/imaging/net/"
 resourcetxt4="Assistance gratuite"
 resourcelinks4="https://forum.aspose.com/c/imaging/14"
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
 resourcelistlink="https://blog.aspose.com/imaging/draw-shapes-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/imaging/blur-images-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/imaging/adjust-image-contrast-brightness-gamma-csharp/"
 resourcelisttext="Dessiner des formes en C # - Lignes, arcs et rectangles"
 resourcelisttext2="Flouter les images par programmation en C#"
 resourcelisttext3="Ajuster le contrat d'image, la luminosité et le gamma"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/imaging/net/features/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Imaging/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Imaging pour les fonctionnalités .NET"
 resourcelisttext2="Installer le package Aspose.Imaging pour .NET NuGet"
 resourcelisttext3="Assistance technique payante Aspose.Imaging pour .NET"
>}} 
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de connaissances"
 resourcealt="Exemples de codes"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/imaging/net/how-to-compress-image-size-in-csharp/"
 resourcelistlink2="https://kb.aspose.com/imaging/net/how-to-draw-graphics-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/imaging/net/how-to-resize-image-in-c-sharp/"
 resourcelisttext="Comment compresser la taille de l'image en C#"
resourcelisttext2="Comment dessiner des graphiques en C #"
resourcelisttext3="Comment redimensionner une image en C#"
>}} 
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Prêt à commencer?"
rtstext="Télécharger la version d'essai gratuite"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Afficher toutes les API"
>}} 
