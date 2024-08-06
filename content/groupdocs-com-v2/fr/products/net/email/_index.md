---
title: API de traitement des e-mails .NET pour manipuler les fichiers de messagerie Outlook
description: Principale bibliothèque de traitement des e-mails pour .NET pour gérer les formats de fichiers Thunderbird et Outlook, y compris MSG, EML et MBOX via les protocoles SMPT, POP3 et IMAP.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle="API de traitement des e-mails .NET pour manipuler les fichiers de messagerie Outlook"
  inheadertext="Simplifiez le processus de manipulation des fichiers de messagerie Microsoft Outlook et Mozilla Thunderbird dans vos applications C#, ASP.NET et VB.NET. Travaillez avec les formats de fichiers MSG, EML, PST, OST, MBOX, VCF et HTML. Gérez par programmation les e-mails et les pièces jointes via POP3, SMTP, IMAP ou Microsoft Exchange Server."
  ctabtn="Télécharger la version d'essai gratuite"
  ctabtn="Télécharger la version d'essai gratuite"
  ctalink="https://releases.aspose.com/email/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="Afficher toutes les API"
  bchomelink="/"
  bchome="Maison"
  bcpage="E-mail"
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
subnav5="https://purchase.aspose.com/pricing/email/net"
subnavtxt5="Tarification" 
subbtn1="https://docs.aspose.com/email/net/"
subbtntxt1="Apprendre"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Acheter"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Une API de messagerie .NET complète pour manipuler et traiter les e-mails"
   subtext="Aspose.Email pour .NET est une API de traitement des e-mails flexible, robuste et facile à utiliser permettant aux utilisateurs de créer, modifier et analyser les formats de fichiers de messagerie populaires tels que MSG, PST, OST, EML, EMLX, MBOX, ainsi comme VCF, HTML et MHTML dans la plate-forme .NET. Cela permet aux utilisateurs de travailler avec différents formats de messages électroniques sans se soucier des problèmes de compatibilité de format. En plus d'accéder et de gérer les e-mails Thunderbird et Outlook, les développeurs peuvent utiliser l'API .NET Email pour manipuler par programmation les pièces jointes, ajouter ou supprimer des destinataires, modifier l'objet du message et bien plus encore. "
   subtext2="De plus, la possibilité de convertir des e-mails d'un format à un autre via C #, ASP.NET et VB.NET fait que cette API de traitement des e-mails .NET se distingue par son utilisation et son ensemble de fonctionnalités. Vous pouvez facilement envoyer et recevoir des e-mails en utilisant le protocole de votre choix parmi POP3, SMTP, IMAP ou vous connecter à Microsoft Exchange Server. Aspose.Email pour .NET vous aide à automatiser efficacement le processus de gestion des e-mails."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Commencer</h2>
   <p>Veuillez consulter la page <a href="https://docs.aspose.com/email/net/system-requirements/">Configuration requise</a> pour connaître les prérequis avant de configurer Aspose.Email pour .NET de votre côté . Les informations suivantes vous aideront à configurer correctement l'API d'emailing .NET.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples"
>}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.Email pour l'installation de .NET"
>}}
<p>Pour télécharger les DLL ou le programme d'installation MSI, veuillez visiter la <a href="https://releases.aspose.com/email/net/">section des téléchargements</a>. Vous pouvez également utiliser le <a href="https://www.nuget.org/packages/Aspose.Email/">package NuGet</a> pour l'installation de l'API. La commande du gestionnaire de packages pour configurer l'API de traitement des e-mails .NET est partagée ci-dessous :</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
PM > Install-Package Aspose.Email
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="Comment convertir des e-mails Outlook en HTML et ouvrir des e-mails sans Outlook dans .NET"
featuretext="L'API Aspose.Email pour .NET permet de convertir par programme les messages MSG et EML au format HTML. Il prend également en charge l'accès et l'ouverture des e-mails Outlook dans vos applications .NET sans avoir besoin de Microsoft Outlook."
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Convertir des fichiers MSG ou EML en HTML dans .NET"
>}}
<p>Transformez de manière transparente les e-mails Outlook au format HTML à l'aide de la bibliothèque Aspose.Email pour .NET. Vous pouvez développer une application de traitement d'e-mails complète à l'aide de l'API d'e-mailing .NET et incorporer la fonctionnalité de conversion d'e-mails pour convertir les formats MSG ou EML en HTML. Veuillez vous référer à l'extrait de code et aux autres informations partagées ci-dessous à cette fin :</p>
<ul>
   <li>Instanciez l'objet de classe <a href="https://reference.aspose.com/email/net/aspose.email/mailmessage/">MailMessage</a> pour accéder au fichier MSG ou EML source.</li>
   <li>Appliquez les options d'enregistrement HTML pour le fichier HTML de sortie.</li>
   <li>Enregistrez ou exportez le fichier MSG au format HTML à l'aide de la méthode Save.</li>
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
featurecolheading="Ouvrir des e-mails dans .NET sans Outlook"
>}}
<p>Vous cherchez à ouvrir des messages Outlook dans vos applications de traitement de messagerie .NET sans installer Microsoft Outlook ? Si oui, Aspose.Email pour l'API .NET est le bon choix pour vous. Il permet aux développeurs .NET d'accéder et d'ouvrir les fichiers de messagerie MSG et de récupérer des informations telles que l'objet de l'e-mail, l'adresse de l'expéditeur et les pièces jointes. Veuillez vérifier les informations suivantes pour en savoir plus :</p>
<ul>
   <li>Chargez le fichier de messagerie MSG source dans un objet de classe <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessage/">MapiMessage</a>.</li>
   <li>Lire et afficher différentes propriétés du fichier MSG.</li>
   <li>Analyser les <a href="https://reference.aspose.com/email/net/aspose.email.mapi/mapimessageitembase/attachments">pièces jointes</a> et lire/afficher différentes propriétés des pièces jointes dans le MSG déposer.</li>
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
   <p class="col-lg-12">Pour voir plus d'exemples de travail et d'exemples de codage d'Aspose.Email pour l'API .NET, veuillez visiter le <a href="https://github.com/aspose-email/Aspose.Email-for-.NET/tree/master/">Page d'exemples GitHub</a>. Nous fournissons également des <a href="https://products.aspose.app/email/family">applications en ligne gratuites</a> pour Aspose.Email pour vous aider à convertir, comparer, afficher, filigraner, fusionner, modifier et signez numériquement vos fichiers de courrier électronique à la volée à l'aide de vos appareils mobiles.</p>
{{< products/product-feature-blocks
featureheading="Analyse des e-mails sans dépendances dans .NET"
featuretext="Les développeurs .NET travaillant avec plusieurs formats de fichiers de courrier électronique peuvent utiliser les fonctionnalités étendues d'Aspose.Email pour .NET pour créer des applications de traitement de courrier électronique dotées de la capacité d'analyser et de stocker les messages électroniques de manière sécurisée et indépendante. Microsoft Automation ou tout autre logiciel tiers n'est pas nécessaire car cette API de messagerie .NET est construite à l'aide de code managé."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
>}}
   {{< products/faq-block
 faqquery="1. Comment puis-je convertir des fichiers e-mail en .NET ?"
 faqanswer="La conversion de fichiers de messagerie Microsoft Exchange ou Thunderbird en .NET est simple et rapide à l'aide de l'API Aspose.Email pour .NET. Seules quelques lignes de codage .NET sont nécessaires pour convertir les fichiers MSG, PST, OST, EML, EMLX, MBOX et HTML en différents formats de fichiers."
>}}
   {{< products/faq-block 
 faqquery="2. Combien de temps faut-il pour convertir ou traiter les fichiers e-mail ?"
 faqanswer="L'API .NET pour la manipulation et le traitement des fichiers de courrier électronique fonctionne rapidement et complète vos demandes de conversion de fichiers de courrier électronique en un rien de temps."
>}}
   {{< products/faq-block
 faqquery="3. Est-il sûr de traiter les e-mails à l'aide de l'API .NET ?"
 faqanswer="Vous pouvez être sûr de la sécurité de vos fichiers de messages électroniques lors de leur traitement à l'aide de l'API Aspose.Email pour .NET. Nous veillons à la confidentialité de vos données et prenons toutes les mesures nécessaires pour vous offrir une expérience utilisateur sécurisée."
>}}
   {{< products/faq-block
 faqquery="4. Puis-je traiter des fichiers e-mail sur Mac OS, Windows ou Linux ?"
 faqanswer="Oui, l'API de traitement des e-mails pour .NET fonctionne sur différents systèmes d'exploitation, frameworks et environnements d'exploitation. Vous pouvez l'utiliser sur la plate-forme de votre choix et il ne nécessite aucune installation de logiciel supplémentaire pour fonctionner."
>}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Outils de manipulation de fichiers d'e-mails"
   >}}
   {{< products/popularapp-anchor
 anchorlink="MSG en PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG à EML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-eml/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG en HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG à MBOX"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-mbox/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG à PST"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-pst/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MSG à VCF"
 moreproducts="https://products.aspose.com/email/net/conversion/msg-to-vcf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML en PDF"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-pdf/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML vers HTML"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-html/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="EML vers MSG"
 moreproducts="https://products.aspose.com/email/net/conversion/eml-to-msg/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="MBOX vers XPS"
 moreproducts="https://products.aspose.com/email/net/conversion/mbox-to-xps/"
>}} 
   {{< products/popularapp-anchor
 anchorlink="OST à PST"
 moreproducts="https://products.aspose.com/email/net/conversion/ost-to-pst/"
>}}  
   {{< products/popularapp-anchor
 anchorlink="PST vers EML"
 moreproducts="https://products.aspose.com/email/net/conversion/pst-to-eml/"
 >}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Vous cherchez de l'aide ?"
bartext="Consultez nos canaux d'assistance pour obtenir de l'aide sur vos questions liées aux fonctionnalités et au fonctionnement de l'API du produit Aspose."
 resourcetxt1="Docs"
 resourcelinks1="https://docs.aspose.com/email/net/"
 resourcetxt2="Référence API"
 resourcelinks2="https://reference.aspose.com/email/" 
 resourcetxt3="Base de connaissances"
 resourcelinks3="https://kb.aspose.com/email/net/"
 resourcetxt4="Assistance gratuite"
 resourcelinks4="https://forum.aspose.com/c/email/12"  >}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
 resource-heading="Ressources sectionid=soutien"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://blog.aspose.com/"
 resourcetitle="Blogues"
 resourcealt="Blogues"
 resourceimg="/images/blog1.svg"
 resourcelistlink="https://blog.aspose.com/email/create-mime-messages-in-csharp/"
 resourcelistlink2="https://blog.aspose.com/email/merge-multiple-mbox-files-in-csharp/"
 resourcelistlink3="https://blog.aspose.com/cells/send-excel-data-in-email-body-using-csharp-net/"
 resourcelisttext="Créer des messages MIME en C# .NET"
 resourcelisttext2="Fusionner plusieurs fichiers MBOX en C#"
 resourcelisttext3="Envoyer des données Excel dans le corps de l'e-mail à l'aide de C# .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://docs.aspose.com/"
 resourcetitle="Documentation"
 resourcealt="Documentation"
 resourceimg="/img/docs1.svg"
 resourcelistlink="https://docs.aspose.com/email/net/features-overview/"
 resourcelistlink2="https://www.nuget.org/packages/Aspose.Email/"
 resourcelistlink3="https://helpdesk.aspose.com/"
 resourcelisttext="Aspose.Email pour les fonctionnalités .NET"
 resourcelisttext2="Installer le package Aspose.Email pour .NET NuGet"
 resourcelisttext3="Aspose.Email pour le service d'assistance payant .NET"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
 resourcelink="https://kb.aspose.com/"
 resourcetitle="Base de connaissances"
 resourcealt="Exemples de codes"
 resourceimg="/images/code1.svg"
 resourcelistlink="https://kb.aspose.com/email/net/how-to-send-email-in-c-sharp/"
 resourcelistlink2="https://kb.aspose.com/email/net/how-to-create-a-pst-file-in-csharp/"
 resourcelistlink3="https://kb.aspose.com/email/net/how-to-add-mapicalendar-to-pst-using-csharp/"
 resourcelisttext="Comment envoyer un e-mail en C#"
resourcelisttext2="Comment créer un fichier PST en C#"
resourcelisttext3="Comment ajouter MapiCalendar à PST en utilisant C #"
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper
rtsheading="Prêt à commencer?"
rtstext="Télécharger la version d'essai gratuite"
rtslink="https://releases.aspose.com/"
rtslink2="https://products.aspose.com"
rtstext2="Afficher toutes les API"
>}}
