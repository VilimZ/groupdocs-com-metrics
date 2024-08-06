---
title: API OCR puissante pour .NET pour effectuer une reconnaissance de texte précise
description: Utilisez l'API Aspose Optical Character Recognition (OCR) pour .NET pour reconnaître et extraire avec précision le texte des images, convertir les images et les PDF en texte, et plus encore.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="Puissante API .NET OCR pour effectuer la reconnaissance de texte"
  inheadertext="Intégrez des capacités OCR avancées dans vos applications avec l'API Aspose Optical Character Recognition pour .NET. Reconnaître et extraire en toute transparence du texte à partir d'images PNG, JPG, GIF et BMP, de photos numérisées et de PDF, ou convertir des images ou des PDF en texte."
  ctabtn="Télécharger la version d'essai gratuite"
  ctabtn="Télécharger la version d'essai gratuite"
  ctalink="https://releases.aspose.com/ocr/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Afficher toutes les API"
  bchomelink="/"
  bchome="Maison"
  bcpage="ROC"
  bclink2="Des produits"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview" subnavtxt1="Aperçu" 
subnav2="#features" subnavtxt2="Caractéristiques" 
subnav3="#support" subnavtxt3="Soutien" 
subnav4="#examples" subnavtxt4="Exemples" 
subnav5="https://purchase.aspose.com/pricing/ocr/net"
subnavtxt5="Tarification" 
subbtn1="https://docs.aspose.com/ocr/net/"
subbtntxt1="Apprendre"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acheter"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Moteur OCR .NET avec une vitesse et une précision supérieures"
   subtext="Aspose.OCR pour .NET est une API de reconnaissance optique de caractères avancée, efficace et précise pour reconnaître sans effort du texte dans des images et des PDF. Il aide à développer la fonctionnalité OCR pour les applications .NET et offre une vitesse de traitement, une précision et un ensemble complet de fonctionnalités améliorés. Le puissant moteur .NET OCR vous permet d'effectuer une reconnaissance et une extraction de texte précises à partir de fichiers PDF et d'images JPEG, GIF, PNG, TIFF et BMP. Vous pouvez créer des solutions automatisées pour convertir des images et des documents PDF aux formats texte, Word, Excel, XML et JSON à l'aide de l'API OCR pour .NET."
   subtext2="Les développeurs peuvent profiter d'une expérience d'extraction de texte multiplateforme à l'aide de l'API Aspose.OCR pour .NET, car elle peut fonctionner de manière identique dans les environnements Windows, Mac OS et Linux. L'API prend en charge 27 langues différentes dans les scripts latins et cyrilliques et des milliers de caractères chinois et permet de détecter et de reconnaître les polices de caractères bien connues. De plus, vous pouvez reconnaître le texte de vos photos numérisées grâce à la capacité intégrée de traiter les images bruyantes, inclinées ou pivotées. La bibliothèque Aspose.OCR pour .NET est une solution complète d'analyse d'images et d'extraction de texte qui pourrait augmenter vos applications existantes ou vous aider à créer des solutions OCR professionnelles à partir de zéro."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Commencer</h2>
   <p>Pour configurer et utiliser correctement l'API .NET OCR, veuillez vérifier les détails ci-dessous. Il est conseillé de se référer à la liste des prérequis sur la page <a href="https://docs.aspose.com/ocr/net/system-requirements/">Configuration requise</a> pour une installation en douceur de l'API de reconnaissance optique de caractères pour .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.OCR pour l'installation de .NET"
>}}
<p>Vous pouvez installer la bibliothèque OCR pour C# .NET en téléchargeant le programme d'installation MSI ou les DLL à partir de la <a href="https://releases.aspose.com/ocr/net/">section des téléchargements</a>. Ou, vous pouvez utiliser le <a href="https://www.nuget.org/packages/Aspose.OCR/">package NuGet</a> pour le configurer. La commande pour la console du gestionnaire de packages Visual Studio est fournie ci-dessous :</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.OCR
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Effectuez efficacement l'OCR sur des documents PDF et convertissez des images en texte"
featuretext="Aspose.OCR pour l'API .NET est un excellent choix pour effectuer de manière transparente la reconnaissance optique de caractères (OCR) pour les développeurs .NET. L'application de l'OCR aux documents PDF et la conversion du texte reconnu au format Word ne nécessitent que quelques lignes de code. De même, vous pouvez créer des solutions de conversion d'image en texte à l'aide de la bibliothèque de reconnaissance de texte pour C# .NET."
>}}
{{< products/product-feature-blocks-col
featurecolheading="Reconnaître et extraire du texte de documents PDF dans .NET"
>}}
<p>La reconnaissance optique des caractères pour les documents PDF numérisés est simplifiée à l'aide d'Aspose.OCR pour .NET. C'est l'une des fonctionnalités les plus appréciées de l'API OCR de documents PDF .NET et fournit à toute personne travaillant avec l'API tous les outils nécessaires pour reconnaître, extraire et convertir le texte des documents PDF en plusieurs formats. Jetons un coup d'œil aux étapes nécessaires pour effectuer l'OCR sur des documents PDF et convertir le texte extrait du format PDF au format Word :</p>
<ul>
   <li>Instanciez la classe <strong>AsposeOcr</strong>.</a></li>
   <li>Créez un objet de la classe <strong>DocumentRecognitionSettings</strong>.</li>
   <li>Spécifiez la langue OCR.</li>
   <li>Appelez la méthode <strong>RecognizePdf()</strong> pour obtenir <strong>RecognitionResult</strong>. Ajoutez le chemin du fichier et l'objet <strong>DocumentRecognitionSettings</strong> comme arguments.</li>
   <li>Enregistrez le texte à l'aide de la méthode <strong>SaveMultipageDocument()</strong>. Ajoutez le chemin du fichier de sortie, les objets <strong>SaveFormat</strong> et <strong>RecognitionResult</strong> comme arguments</li>
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
featurecolheading="Convertissez sans effort des images en PDF consultables dans .NET"
>}}
<p>L'API OCR .NET hautes performances permet aux développeurs d'extraire du texte consultable à partir d'images numérisées et de photos de différents formats d'image couramment utilisés tels que GIF, PNG, JPG, BMP et TIFF. Si vous cherchez à intégrer des capacités d'OCR dans vos applications .NET, la fonction de conversion d'image en texte pourrait les renforcer. Ici, nous passerons en revue les étapes nécessaires pour convertir efficacement JPG en PDF à l'aide de la robuste API OCR pour .NET :</p>
<ul>
   <li>Définissez le chemin du fichier image d'entrée pour la reconnaissance de texte.</li>
   <li>Créer une instance de classe <strong>AsposeOcr</strong></li>
   <li>Utilisez la méthode <strong>RecognizeImage</strong> pour reconnaître le texte dans votre fichier image sélectionné.</li>
   <li>Enregistrez le fichier traité à l'aide de la méthode <strong>Save</strong> et ajoutez le nom du fichier de sortie et le <strong>SaveFormat</strong> comme arguments.</li>
   <li>Assurez-vous de définir le fichier résultant sur un document PDF interrogeable à l'aide de <strong>SaveFormat</strong>.</li>
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
   <p class="col-lg-12">La <a href="https://github.com/aspose-ocr/Aspose.OCR-for-.NET/tree/master/Examples">page d'exemples</a> de l'API de reconnaissance optique de caractères Aspose pour . NET comprend plus d'exemples de code fonctionnels, n'hésitez pas à les consulter. Nous fournissons également <a href="https://products.aspose.app/ocr/family">OCR PDF en ligne gratuit et convertisseur d'image en texte</a>, la reconnaissance de texte et des applications d'extraction. Vous pouvez utiliser ces applications OCR gratuites à la volée à l'aide de vos appareils mobiles.</p>
{{< products/product-feature-blocks
featureheading="Bibliothèque OCR .NET facile à utiliser pour l'extraction de texte dans les photos"
featuretext="Avez-vous des difficultés à lire et à extraire du texte à partir d'images numérisées ? Si oui, utilisez Aspose.OCR pour .NET, car il s'agit de la meilleure API OCR pour l'analyse d'images et l'extraction de texte à partir de photos numérisées, d'images de smartphones, etc. À l'aide de cette API, vous pouvez reconnaître par programmation du texte dans des images et le convertir en différents formats de fichier. De plus, l'API de conversion d'image en texte comprend des fonctions avancées telles que la vérification orthographique et le remplacement de caractères pour les textes visuellement défectueux. Il pourrait facilement lire de tels textes, vérifier l'orthographe et remplacer les caractères déformés du texte mal orthographié sur l'image. Lors de l'exécution de l'OCR d'image, vous pouvez fournir le lien vers un fichier image comme source. Il est possible de numériser et de reconnaître le texte d'une image complète ou seulement une partie sélectionnée de l'image pour ce processus. Développez avec compétence des applications complètes de conversion d'image en texte à l'aide de l'API OCR d'image .NET et convertissez facilement JPEG en texte, PNG en texte, BMP en texte, etc."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Comment puis-je convertir des images en texte dans .NET ?"
 faqanswer="La conversion d'images en texte dans .NET est simple et rapide grâce à l'API .NET OCR. Seules quelques lignes de codage .NET sont nécessaires pour convertir les fichiers JPG, BMP, GIF, PNG, TIFF et autres fichiers image aux formats PDF, Word, Excel, JSON, Texte brut et XML."
>}}
   {{< products/faq-block 
 faqquery="2. Combien de temps faut-il pour convertir des fichiers image ou PDF en texte ?"
 faqanswer="La meilleure API OCR pour .NET fonctionne rapidement et répond à vos demandes de reconnaissance, d'extraction et de conversion de texte en un rien de temps."
>}}
   {{< products/faq-block
 faqquery="3. Est-il sûr de traiter des images numérisées et des PDF à l'aide de l'API .NET ?"
 faqanswer="Vous pouvez être sûr de la sécurité de vos fichiers de données lors de leur traitement à l'aide de l'API de reconnaissance optique de caractères pour .NET. Nous veillons à la confidentialité de vos données et prenons toutes les mesures nécessaires pour vous offrir une expérience utilisateur sécurisée."
>}}
   {{< products/faq-block
 faqquery="4. Puis-je traiter des photos et des fichiers PDF sous Mac OS, Windows ou Linux ?"
 faqanswer="Oui, l'API de reconnaissance de texte et de conversion d'image en texte pour .NET fonctionne sur différents systèmes d'exploitation, frameworks et environnements d'exploitation. Vous pouvez l'utiliser sur la plate-forme de votre choix et il ne nécessite aucune installation de logiciel supplémentaire pour fonctionner."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper popularheading="Outils de reconnaissance optique de caractères"
>}}
   {{< products/popularapp-anchor
 anchorlink="JPEG à TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG à TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF à TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="BMP à TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="TIFF à TXT"
 moreproducts="https://products.aspose.com/ocr/net/conversion/tiff-to-txt/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG vers PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-pdf"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG vers Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG vers Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xlsx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="JPEG vers XML"
 moreproducts="https://products.aspose.com/ocr/net/conversion/jpeg-to-xml"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG vers Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-docx"
>}} 
   {{< products/popularapp-anchor
 anchorlink="PNG vers Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-xls"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PNG en PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/png-to-pdf"
>}}  
   {{< products/popularapp-anchor
 anchorlink="GIF à Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-doc"
>}} 
   {{< products/popularapp-anchor
 anchorlink="GIF en PDF"
 moreproducts="https://products.aspose.com/ocr/net/conversion/gif-to-pdf"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP vers Word"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-docx"
>}}
   {{< products/popularapp-anchor
 anchorlink="BMP vers Excel"
 moreproducts="https://products.aspose.com/ocr/net/conversion/bmp-to-xls"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Vous cherchez de l'aide ?"
bartext="Consultez nos canaux d'assistance pour obtenir de l'aide sur vos questions liées aux fonctionnalités et au fonctionnement de l'API du produit Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/ocr/net/"
 resourcetxt2="Référence API"
 resourcelinks2="https://reference.aspose.com/ocr/net/" 
 resourcetxt3="Base de connaissances"
 resourcelinks3="https://kb.aspose.com/ocr/net/"
 resourcetxt4="Assistance gratuite"
 resourcelinks4="https://forum.aspose.com/c/ocr/16"
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
 resourcelistlink="https://blog.aspose.com/ocr/skew-correction-in-image-processing-using-csharp/"
 resourcelistlink2="https://blog.aspose.com/ocr/convert-screenshot-to-text-with-ocr-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/ocr/image-to-excel-ocr-csharp/"
 resourcelisttext="Correction de l'inclinaison dans le traitement d'image à l'aide de C#"
 resourcelisttext2="Convertir des captures d'écran en texte avec OCR en C#"
 resourcelisttext3="Convertir une image en Excel avec OCR en C#"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/ocr/net/how-to-run-the-examples/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.OCR/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Comment exécuter des exemples"
 resourcelisttext2="Installer le package Aspose.OCR pour .NET NuGet"
 resourcelisttext3="Aspose.OCR pour le service d'assistance payant .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de connaissances"
 resourcealt="Exemples de codes"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/ocr/net/how-to-extract-text-from-scanned-pdf-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/ocr/net/how-to-extract-text-from-image-in-csharp/"
 resourcelisttext="Comment extraire du texte d'un PDF numérisé en C#"
resourcelisttext2="Comment extraire du texte d'une image en C#"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Prêt à commencer?"
rtstext="Télécharger la version d'essai gratuite"
rtslink="https://releases.aspose.com/ocr/net/" 
rtslink2="https://products.aspose.com" 
rtstext2="Afficher toutes les API"
>}}
