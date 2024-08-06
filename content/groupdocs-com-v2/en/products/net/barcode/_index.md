---
title: .NET Barcode API to Read, Recognize, and Generate Barcodes
description: Use the C# .NET Barcode API for reading, recognizing, and generating 1D and 2D barcodes. Create QR code generator or scanner apps in ASP.NET & VB.NET.
draft: false
weight: 1
---
{{< products/innerheader-wrapper col-class="sb-6"
  inheadertitle=".NET Barcode API to Read, Recognize, and Generate Barcodes and QR Codes"
  inheadertext="Generate barcodes in .NET with unmatched accuracy and scan, read, and recognize linear, 2D, and postal barcodes of different symbologies using the C# .NET barcode API. It supports scanning and detecting barcodes and QR codes in JPG, PNG, GIF, BMP, and TIFF formats."
  ctabtn="Download Free Trial"
  ctalink="https://releases.aspose.com/barcode/net/"
  ctalink2="/products/#prod-grid"
  ctabtn2="View All APIs"
  bchomelink="/"
  bchome="Home"
  bcpage="BarCode"
  bclink2="Products"
  bclink3=".NET"
  bclink2url="/products/"
  bclink3url="/products/net/"
  >}}
{{< homepage/conholdate/com/inner-wrapper/sub-nav 
subnav1="#overview"
subnavtxt1="Overview" 
subnav2="#features"
subnavtxt2="Features" 
subnav3="#support"
subnavtxt3="Support" 
subnav4="#examples"
subnavtxt4="Examples" 
subnav5="https://purchase.aspose.com/pricing/barcode/net"
subnavtxt5="Pricing" 
subbtn1="https://docs.aspose.com/barcode/net/"
subbtntxt1="Learn"
subbtn2="https://purchase.aspose.com/buy"
subbtntxt2="Buy"
>}}
   {{< products/subtext-wrapper
   sectionid="overview"
   subtitle="Build barcode recognition and QR code generator apps in C# .NET"
   subtext="Aspose.BarCode for .NET is a high-performance barcode generation and recognition API enabling .NET developers to create, scan, read, detect, and export different types of 1D (linear), 2D, and postal barcodes. Boasting a great feature set, this .NET barcode generator API offers immaculate accuracy while reading or scanning the barcode images in PNG, BMP, JPG, GIF, TIFF, and other formats. Furthermore, you can also export the barcodes to popular raster images or EMF and SVG vector files. Together with the barcode and QR code scanning features, Aspose.BarCode for .NET lets you manipulate several elements of the barcode appearance including the image quality, file size, background & bar color, image quality and resolution, rotation angle, captions, and many more."
   subtext2="Using the barcode API for .NET, you can quickly and easily integrate QR code scanner functionality in your existing .NET barcode processing solutions or build comprehensive barcode recognition apps in C#, ASP.NET, or VB.NET from scratch. Aspose.BarCode for .NET library supports more than 50 linear, 2D, and postal barcode symbologies such as Code 128, Code 39 Extended, Data Matrix, QR Code, PDF 417, and Postnet."
   >}} 
   {{< products/product-text-blocks >}}
   <h2>Getting Started</h2>
   <p>Before setting up the .NET barcode API at your end, please check the prerequisites on the <a href="https://docs.aspose.com/barcode/net/system-requirements/">System Requirements</a> page to ensure a smooth API setup and user experience.</p>
   {{< /products/product-text-blocks >}}
{{< products/product-feature-wrapper
sectionid="examples">}}
{{< products/product-feature-blocks-col
featurecolheading="Aspose.BarCode for .NET Installation"
>}}
<p>Please visit the <a href="https://releases.aspose.com/barcode/net/">downloads section</a> to directly download the DLLs or the MSI installer of the .NET barcode recognition and generation API. You can install the API using the <a href="https://www.nuget.org/packages/Aspose.BarCode/">NuGet package</a> as well. Please find below the command for the package manager console:</p>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp1"
>}}
PM > Install-Package Aspose.BarCode 
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks
featureheading="How to Generate QR Codes in .NET and Read Barcodes from Images"
featuretext="With Aspose.BarCode for .NET, developers can incorporate QR code generation capability into their .NET barcode processing apps. Moreover, recognizing different types of barcodes from PNG, JPEG, BMP, and other images is also possible. You can scan and read multiple barcode types from the same image file." 
>}}  
{{< products/product-feature-blocks-col
featurecolheading="Quickly Generate QR Codes in .NET"
>}}
<p>The .NET barcode API supports generating QR codes with different types of encoding. You can add this functionality to your barcode manipulation applications and further enhance your offerings. Please check the following information and C# coding to quickly and easily generate QR codes using Aspose.BarCode for .NET library:</p>
<ul>
   <li>Instantiate the <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/barcodegenerator">BarcodeGenerator</a> class and specify the <a href="https://reference.aspose.com/barcode/net/aspose.barcode.generation/encodetypes">EncodeType</a> and the input text.</li>
   <li>Set the QR code version and encoding type.</li>
   <li>Generate and save the QR Code image in PNG format.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp2"
>}}
// Initialize an instance of BarcodeGenerator class
BarcodeGenerator gen = new BarcodeGenerator(EncodeTypes.QR, "Aspose");
gen.Parameters.Barcode.XDimension.Pixels = 4;
// Set Auto version
gen.Parameters.Barcode.QR.QrVersion = QRVersion.Auto;
//Set ForceMicroQR QR encode type
gen.Parameters.Barcode.QR.QrEncodeType = QREncodeType.ForceMicroQR;
gen.Save(dataDir + "QREncodeTypeForceMicroQR.png", BarCodeImageFormat.Png);
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< products/product-feature-blocks-col
featurecolheading="Read Barcodes from Images in .NET"
>}}
<p>Aspose.BarCode for .NET API makes reading barcodes of different symbologies from PNG, JPEG, BMP, GIF, and other image file formats easier. This .NET barcode recognition and generation API supports scanning and reading <a href="https://blog.aspose.com/barcode/read-barcode-from-image-in-csharp/#Read-Barcode-of-Multiple-Types-from-Image-in-CSharp">multiple barcodes from the same image</a>. Please check the following information for more help:</p>
<ul>
   <li>Load the source barcode image using the <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/">BarCodeReader</a> class.</li>
   <li>Call the <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcodereader/readbarcodes/">ReadBarCodes()</a> method to get recognition results in the <a href="https://reference.aspose.com/barcode/net/aspose.barcode.barcoderecognition/barcoderesult/">BarCodeResult</a> class object.</li>
   <li>Loop through the obtained results and display the barcode’s type and text.</li>
</ul>
{{< products/product-feature-blocks-snip
snipclass="greysnipp"
copyID="snipp3"
>}}
// Initialize barcode reader
BarCodeReader reader = new BarCodeReader("C:\\Files\\BarCode\\Sample.png");

// Read the barcode and show the results
foreach(BarCodeResult result in reader.ReadBarCodes()) 
{
    Console.Out.WriteLine("CodeText: " + result.CodeText);
    Console.Out.WriteLine("Symbology type: " + result.CodeType);
}
{{< /products/product-feature-blocks-snip >}}
{{< /products/product-feature-blocks-col >}}
{{< /products/product-feature-blocks >}}
   <p class="col-lg-12">Please visit the <a href="https://github.com/aspose-barcode/Aspose.BarCode-for-.NET/tree/master/Examples">GitHub Examples</a> page for more working examples of the .NET barcode API. If you are looking to scan, recognize, and generate 1D, 2D, and postal barcodes or QR codes on the fly using your mobile devices, please check the <a href="https://products.aspose.app/barcode/family">free online apps</a> of Aspose.BarCode.</p>
{{< products/product-feature-blocks
featureheading="Easy integration and advanced operations"
featuretext="Aspose.BarCode for .NET allows super easy operations requiring only a few lines of .NET coding to start generating, reading, and recognizing different types of barcodes. As a .NET developer, you can effortlessly integrate the .NET barcode generator API with any of your .NET apps. One of the best features of this library is the ability to read damaged barcodes and QR codes using intricate algorithms and filtering mechanisms enabling you to stay on top of your barcode processing needs."
>}}
   {{< /products/product-feature-blocks >}}
   {{< products/faq-wrapper
   faqtitle="FAQ"
   >}}
   {{< products/faq-block
   faqquery="1. How can I generate barcodes in .NET?"
   faqanswer="Generating 1D, 2D, and postal barcodes in .NET is quick and easy using Aspose.BarCode for .NET API. Only a few lines of .NET coding are needed to generate the barcode of your desired type." 
   >}}
   {{< products/faq-block
   faqquery="2. How long it takes to read or generate barcodes?"
   faqanswer="The .NET barcode recognition and generation API works fast and completes your requests in no time." 
   >}}
   {{< products/faq-block
   faqquery="3. Is it safe to process files using the .NET API?"
   faqanswer="You can be sure of the security of your barcode files while processing them using Aspose.BarCode for .NET API. We ensure the privacy of your data and take all required measures to provide you with a secure user experience." 
   >}}
   {{< products/faq-block
   faqquery="4. Can I recognize and generate barcodes on Mac OS, Windows, or Linux?"
   faqanswer="Yes, the barcode API for .NET works across different OS, frameworks, and operating environments. You can use it on the platform of your choice and it does not require any additional software installation to function." 
   >}}
   {{< /products/faq-wrapper >}}
   {{< products/popularapp-home-wrapper
   popularheading="Barcode Generation and Recognition Tools"
   >}}
   {{< products/popularapp-anchor
anchorlink="Generate PDF417 Barcode"
moreproducts="https://products.aspose.com/barcode/net/generate/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generate CODE39 Barcode"
moreproducts="https://products.aspose.com/barcode/net/generate/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generate CODE128 Barcode"
moreproducts="https://products.aspose.com/barcode/net/generate/code128/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generate QR Code"
moreproducts="https://products.aspose.com/barcode/net/generate/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generate POSTNET Barcode"
moreproducts="https://products.aspose.com/barcode/net/generate/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Generate PLANET Barcode"
moreproducts="https://products.aspose.app/barcode/net/generate/planet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Recognize CODE39 Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/code39/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Recognize QR Code"
moreproducts="https://products.aspose.com/barcode/net/recognize/qr/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Recognize PDF417 Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/pdf417/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Recognize POSTNET Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/postnet/"
>}} 
   {{< products/popularapp-anchor
anchorlink="Recognize AZTEC Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/aztec/"
>}}  
   {{< products/popularapp-anchor
anchorlink="Recognize ISBN Barcode"
moreproducts="https://products.aspose.com/barcode/net/recognize/isbn/"
>}}
   {{< /products/popularapp-home-wrapper >}}
   {{< /products/product-feature-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/resourcebar-wrapper
customclass="sy-6"
bartitle="Looking for help?"
bartext="Checkout our support channels for help with your questions related to Aspose product API features and working."
resourcetxt1="Docs"
resourcelinks1="https://docs.aspose.com/barcode/net/"
resourcetxt2="API Reference"
resourcelinks2="https://reference.aspose.com/barcode/" 
resourcetxt3="Knowledge Base"
resourcelinks3="https://kb.aspose.com/barcode/net/"
resourcetxt4="Free Support"
resourcelinks4="https://forum.aspose.com/c/barcode/13"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-wrapper
resource-heading="Resources"
sectionid="support"
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://blog.aspose.com/"
resourcetitle="Blogs"
resourcealt="Blogs"
resourceimg="/images/blog1.svg"
resourcelistlink="https://blog.aspose.com/barcode/generate-dotcode-barcodes/"
resourcelistlink2="https://blog.aspose.com/barcode/generate-hibc-lic-barcodes/"
resourcelistlink3="https://blog.aspose.com/barcode/read-barcode-from-multipage-tiff-in-csharp/"
resourcelisttext="Generate DotCode Barcodes in C#"
resourcelisttext2="Generate HIBC LIC Barcodes in C#"
resourcelisttext3="Read Barcode from Multi-page TIFF Image in C#" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://docs.aspose.com/"
resourcetitle="Documentation"
resourcealt="Documentation"
resourceimg="/img/docs1.svg"
resourcelistlink="https://docs.aspose.com/barcode/net/product-features/"
resourcelistlink2="https://www.nuget.org/packages/Aspose.BarCode/"
resourcelistlink3="https://helpdesk.aspose.com/"
resourcelisttext="Aspose.BarCode for .NET Features"
resourcelisttext2="Install Aspose.BarCode for .NET NuGet Package"
resourcelisttext3="Aspose.BarCode for .NET Paid Support Helpdesk" 
>}}
{{< homepage/aspose/com/inner-wrapper/resources-block
resourcelink="https://kb.aspose.com/"
resourcetitle="Knowledge Base"
resourcealt="Code Samples"
resourceimg="/images/code1.svg"
resourcelistlink="https://kb.aspose.com/barcode/net/how-to-rotate-barcode-image-in-c-sharp/"
resourcelistlink2="https://kb.aspose.com/barcode/net/how-to-generate-barcode-image-in-csharp/"
resourcelistlink3="https://kb.aspose.com/barcode/net/how-to-convert-barcode-to-svg-in-csharp/"
resourcelisttext="How to Rotate Barcode Image in C#"
resourcelisttext2="How to Generate Barcode Image in C#"
resourcelisttext3="How to Convert Barcode to SVG in C#" 
>}}
{{< /homepage/aspose/com/inner-wrapper/resources-wrapper >}}
{{< homepage/aspose/com/inner-wrapper/readytostart-wrapper 
rtsheading="Ready to get started?" 
rtstext="Download Free Trial" 
rtslink="https://releases.aspose.com/" 
rtslink2="https://products.aspose.com" 
rtstext2="View All APIs" 
>}}
